import { JSONFormatter } from "@/types/files";
import { NegationValue, NegationValueRaw } from "@/types/stats";

type UnformattedBoss = {
  "NPC ID 1": string;
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
  HP: string;
  Defense: string;
  "Standard Negation": NegationValueRaw;
  "Slash Negation": NegationValueRaw;
  "Strike Negation": NegationValueRaw;
  "Pierce Negation": NegationValueRaw;
  "Magic Negation": NegationValueRaw;
  "Fire Negation": NegationValueRaw;
  "Lightning Negation": NegationValueRaw;
  "Holy Negation": NegationValueRaw;
  Poison: NegationValueRaw;
  Rot: NegationValueRaw;
  Blood: NegationValueRaw;
  Frost: NegationValueRaw;
  Sleep: NegationValueRaw;
  Madness: NegationValueRaw;
  "Death Blight": NegationValueRaw;
  Poise: string;
  Region: string;
  Location: string;
  "Nearest Grace": string;
  "Only Spawns at Night": "Yes" | "No";
};

type FormattedBoss = {
  id: string;
  encounterName: string;
  encounterHp: number;
  runes: number;
  hp: number;
  defence: number;
  negation: {
    standard: NegationValue;
    slash: NegationValue;
    strike: NegationValue;
    pierce: NegationValue;
    magic: NegationValue;
    fire: NegationValue;
    lightning: NegationValue;
    holy: NegationValue;
    poison: NegationValue;
    rot: NegationValue;
    blood: NegationValue;
    frost: NegationValue;
    sleep: NegationValue;
    madness: NegationValue;
    deathBlight: NegationValue;
  };
  poise: number;
  region: string;
  location: string;
  nearestGrace: string;
  onlySpawnsAtNight: boolean;
};

const formatNegation = (negation: NegationValueRaw): NegationValue =>
  negation === "IMMUNE" ? negation : parseInt(negation);

export const bossesFormatter: JSONFormatter<
  UnformattedBoss[],
  FormattedBoss[]
> = (json) => {
  return json.map((boss) => ({
    id: boss["NPC ID 1"],
    encounterName: boss["Encounter Name"],
    encounterHp: parseInt(boss["Encounter HP"]),
    runes: parseInt(boss["Runes"]),
    hp: parseInt(boss.HP),
    defence: parseInt(boss.Defense),
    negation: {
      standard: formatNegation(boss["Standard Negation"]),
      slash: formatNegation(boss["Slash Negation"]),
      strike: formatNegation(boss["Strike Negation"]),
      pierce: formatNegation(boss["Pierce Negation"]),
      magic: formatNegation(boss["Magic Negation"]),
      fire: formatNegation(boss["Fire Negation"]),
      lightning: formatNegation(boss["Lightning Negation"]),
      holy: formatNegation(boss["Holy Negation"]),
      poison: formatNegation(boss.Poison),
      rot: formatNegation(boss.Rot),
      blood: formatNegation(boss.Blood),
      frost: formatNegation(boss.Frost),
      sleep: formatNegation(boss.Sleep),
      madness: formatNegation(boss.Madness),
      deathBlight: formatNegation(boss["Death Blight"]),
    },
    poise: parseInt(boss.Poise),
    region: boss.Region,
    location: boss.Location,
    nearestGrace: boss["Nearest Grace"],
    onlySpawnsAtNight: boss["Only Spawns at Night"] === "Yes",
  }));
};
