import { useState, useCallback } from "react";
import {
  getTeams,
  getCards,
  deleteTeam,
  deleteCard,
  createDatabaseSnapshot,
  resetDatabase,
  restoreDatabaseFromSnapshot,
} from "@/services/api";

interface Team {
  id: string;
  teamName: string;
  score: number;
}

interface Card {
  id: string;
  name: string;
  question: string;
  options: string[];
  correctAnswer: number;
  image: string;
  mindFile: string;
  modelUrl: string;
  targetIndex?: number | null;
  tier?: "Common" | "Rare" | "Legendary" | string;
  value?: number;
  isCaught: boolean;
  caughtByTeam: string;
}

interface Snapshot {
  teams: Team[];
  cards: Card[];
  timestamp: number;
}

export const useAdminData = () => {
  const [teams, setTeams] = useState<Team[]>([]);
  const [cards, setCards] = useState<Card[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [deleteConfirm, setDeleteConfirm] = useState<string | null>(null);

  const fetchTeams = useCallback(async () => {
    setIsLoading(true);
    try {
      const teamsData = await getTeams();
      setTeams(teamsData);
    } catch (err) {
      console.error("Error fetching teams:", err);
    } finally {
      setIsLoading(false);
    }
  }, []);

  const fetchCards = useCallback(async () => {
    setIsLoading(true);
    try {
      const cardsData = await getCards();
      setCards(
        cardsData.map((c) => ({
          id: c.id,
          name: c.name,
          question: c.question || "",
          options: c.options || [],
          correctAnswer: c.correctAnswer ?? 0,
          image: c.image || "",
          mindFile: c.mindFile || "",
          modelUrl: c.modelUrl || "",
          targetIndex: c.targetIndex ?? null,
          tier: c.tier,
          value: c.value,
          isCaught: c.isCaught,
          caughtByTeam: c.caughtByTeam || "",
        }))
      );
    } catch (err) {
      console.error("Error fetching cards:", err);
    } finally {
      setIsLoading(false);
    }
  }, []);

  const handleDeleteTeam = async (teamId: string) => {
    if (deleteConfirm !== teamId) {
      setDeleteConfirm(teamId);
      return;
    }

    try {
      await deleteTeam(teamId);
      setTeams(teams.filter((team) => team.id !== teamId));
      setDeleteConfirm(null);
    } catch (err) {
      console.error("Error deleting team:", err);
    }
  };

  const handleDeleteCard = async (cardId: string) => {
    if (deleteConfirm !== cardId) {
      setDeleteConfirm(cardId);
      return;
    }

    try {
      await deleteCard(cardId);
      setCards(cards.filter((card) => card.id !== cardId));
      setDeleteConfirm(null);
    } catch (err) {
      console.error("Error deleting card:", err);
    }
  };

  return {
    teams,
    cards,
    isLoading,
    deleteConfirm,
    fetchTeams,
    fetchCards,
    handleDeleteTeam,
    handleDeleteCard,
    setDeleteConfirm,
  };
};

export const useResetDatabase = (fetchTeams: () => Promise<void>, fetchCards: () => Promise<void>) => {
  const [showResetModal, setShowResetModal] = useState(false);
  const [resetPassword, setResetPassword] = useState("");
  const [resetError, setResetError] = useState("");
  const [isResetting, setIsResetting] = useState(false);
  const [lastSnapshot, setLastSnapshot] = useState<Snapshot | null>(null);

  const handleResetDatabase = async (adminPassword: string) => {
    if (resetPassword !== adminPassword) {
      setResetError("Invalid password");
      return;
    }

    setIsResetting(true);
    setResetError("");

    try {
      const snapshot = await createDatabaseSnapshot();
      setLastSnapshot({
        teams: snapshot.teams as unknown as Team[],
        cards: snapshot.cards as unknown as Card[],
        timestamp: Date.now(),
      });

      await resetDatabase();
      await fetchTeams();
      await fetchCards();

      setShowResetModal(false);
      setResetPassword("");
      alert("Database reset successfully! You can undo this action if needed.");
    } catch (err) {
      console.error("Error resetting database:", err);
      setResetError("Failed to reset database. Please try again.");
    } finally {
      setIsResetting(false);
    }
  };

  const handleUndoLastAction = async () => {
    if (!lastSnapshot) {
      alert("No action to undo");
      return;
    }

    const fiveMinutes = 5 * 60 * 1000;
    if (Date.now() - lastSnapshot.timestamp > fiveMinutes) {
      alert("Undo window expired (5 minutes). Cannot undo this action.");
      setLastSnapshot(null);
      return;
    }

    if (!confirm("Are you sure you want to undo the last database reset?")) {
      return;
    }

    try {
      await restoreDatabaseFromSnapshot({
        teams: lastSnapshot.teams as unknown as Array<{ id: string; [key: string]: unknown }>,
        cards: lastSnapshot.cards as unknown as Array<{ id: string; [key: string]: unknown }>,
      });

      await fetchTeams();
      await fetchCards();

      setLastSnapshot(null);
      alert("Last action undone successfully!");
    } catch (err) {
      console.error("Error undoing last action:", err);
      alert("Failed to undo last action. Please try again.");
    }
  };

  return {
    showResetModal,
    setShowResetModal,
    resetPassword,
    setResetPassword,
    resetError,
    setResetError,
    isResetting,
    lastSnapshot,
    handleResetDatabase,
    handleUndoLastAction,
  };
};
