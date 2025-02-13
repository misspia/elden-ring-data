import { JSONFormatter } from "@/types/files";

type UnformattedBoss = {
  "NPC ID 1": string | "-";
  "NPC ID 2": string | "-";
  "NPC ID 3": string | "-";
  "NPC ID (Phase 2)": string | "-";
  "NPC ID (HP)": string | "-";
  "SpEffect ID": string;
  "SpEffect ID (NG+)": string;
  "Encounter Name": string;
  "Encounter HP": string;
  Runes: string;
  "Actual Name 1": string;
  "Name 1": string;
  HP: string | "-";
  Defense: string | "-";
  "Standard Negation": string | "-";
  "Slash Negation": string | "-";
  "Strike Negation": string | "-";
  "Pierce Negation": string | "-";
  "Magic Negation": string | "-";
  "Fire Negation": string | "-";
  "Lightning Negation": string | "-";
  "Holy Negation": string | "-";
  Poison: string | "-";
  Rot: string | "-";
  Blood: string | "-";
  Frost: string | "-";
  Sleep: string | "-";
  Madness: string | "-";
  "Death Blight": string | "-";
  Poise: string | "-";
  "Actual Name 2": string | "-";
  "Name 2": string | "-";
  "Actual Name 3": string | "-";
  "Name 3": string | "-";
  "Actual Name (Phase 2)": string | "-";
  Region: string;
  Location: string;
  "Nearest Grace": string;
  "Only Spawns at Night": "Yes" | "No";
};

type FormattedBoss = {};

export const bossesFormatter: JSONFormatter<
  UnformattedBoss[],
  FormattedBoss[]
> = (json) => {
  return json;
};
