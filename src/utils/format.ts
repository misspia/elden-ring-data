import { DropRarity, DropRarityRaw } from "@/types/items";

export const formatRarity = (rarity: DropRarityRaw): DropRarity =>
  rarity === "White (Large)" || rarity === "White (Small)" ? "White" : rarity;
