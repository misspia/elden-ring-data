import { JSONFormatter } from "@/types/files";
import { ResistanceValue, ResistanceValueRaw } from "./stats";

type UnformattedSpiritAsh = {
  Name: string;
  "Ash Name": string;
  Icon: string;
  Upgrade: string;
  "Info 1": string;
  "Info 2": string;
  Caption: string;
  "FP Cost": string | "-";
  "HP Cost": string | "-";
  HP: string;
  Defense: string;
  "Standard Negation": string;
  "Slash Negation": string;
  "Strike Negation": string;
  "Pierce Negation": string;
  "Magic Negation": string;
  "Fire Negation": string;
  "Lightning Negation": string;
  "Holy Negation": string;
  Poison: ResistanceValueRaw;
  Rot: ResistanceValueRaw;
  Blood: ResistanceValueRaw;
  Frost: ResistanceValueRaw;
  Sleep: ResistanceValueRaw;
  Madness: ResistanceValueRaw;
  "Death Blight": ResistanceValueRaw;
  "Upgrade Type": "Ashes" | "Special Ashes";
  "Upgrade Cost": string;
  "Drop Type": string;
  Achievement: "Yes" | "No";
  "NPC ID": string;
  "ReinforcementSpEffect ID": string;
  ID: string;
  "Ash ID": string;
  "Icon ID": string;
  "Sort Group ID": string;
  "Sort ID": string;
};

type FormattedSpiritAshUpgradeStats = {
  upgrade: number; // 0 - 10
  upgradeCost: number;
  hp: number;
  defense: number;
  damageNegation: {
    standard: number;
    slash: number;
    strike: number;
    pierce: number;
    magic: number;
    fire: number;
    lightning: number;
    holy: number;
  };
  resistance: {
    poison: ResistanceValue;
    rot: ResistanceValue;
    blood: ResistanceValue;
    frost: ResistanceValue;
    sleep: ResistanceValue;
    madness: ResistanceValue;
    deathBlight: ResistanceValue;
  };
};

type FormattedSpiritAsh = {
  name: string; // name without upgrade (ie. Wandering Noble Ashes NOT Wandering Noble Ashes +1)
  effect: string; // Info 1 (ie. Summons five wandering noble spirits)
  spiritOf: string; // Info 2 (ie. Wandering Nobles)
  caption: string;
  summonCost: {
    fp: number;
    hp: number;
  };
  stats: FormattedSpiritAshUpgradeStats[]; // by upgrade level
  isRenownedAsh: boolean; // "Upgrade Type" --> false = "Ashes" | true = "Special Ashes"
  achievement: boolean;
};

const formatSummonCost = (cost: string | "-"): number =>
  cost === "-" ? 0 : parseInt(cost);
const formatResistance = (resistance: ResistanceValueRaw): ResistanceValue =>
  resistance === "IMMUNE" ? resistance : parseInt(resistance);
export const spiritAshesFormatter: JSONFormatter<
  UnformattedSpiritAsh[],
  FormattedSpiritAsh[]
> = (json) => {
  /**
   * "Ash Name": <index>
   */
  const seenAshes: Record<string, number> = {};
  return json.reduce<FormattedSpiritAsh[]>((ashes, ash) => {
    const newUpgradeStats: FormattedSpiritAshUpgradeStats = {
      upgrade: parseInt(ash.Upgrade),
      upgradeCost: parseInt(ash["Upgrade Cost"]),
      hp: parseInt(ash.HP),
      defense: parseInt(ash.Defense),
      damageNegation: {
        standard: parseInt(ash["Standard Negation"]),
        slash: parseInt(ash["Slash Negation"]),
        strike: parseInt(ash["Strike Negation"]),
        pierce: parseInt(ash["Pierce Negation"]),
        magic: parseInt(ash["Magic Negation"]),
        fire: parseInt(ash["Fire Negation"]),
        lightning: parseInt(ash["Lightning Negation"]),
        holy: parseInt(ash["Holy Negation"]),
      },
      resistance: {
        poison: formatResistance(ash.Poison),
        rot: formatResistance(ash.Rot),
        blood: formatResistance(ash.Blood),
        frost: formatResistance(ash.Frost),
        sleep: formatResistance(ash.Sleep),
        madness: formatResistance(ash.Madness),
        deathBlight: formatResistance(ash["Death Blight"]),
      },
    };

    if (seenAshes[ash["Ash Name"]] !== undefined) {
      const ashIndex = seenAshes[ash["Ash Name"]];
      const existingAsh = ashes[ashIndex];
      existingAsh.stats.push(newUpgradeStats);
      ashes[ashIndex] = { ...existingAsh };
    } else {
      seenAshes[ash["Ash Name"]] = ashes.length;
      ashes.push({
        name: ash["Ash Name"],
        effect: ash["Info 1"],
        spiritOf: ash["Info 2"],
        caption: ash.Caption,
        summonCost: {
          fp: formatSummonCost(ash["FP Cost"]),
          hp: formatSummonCost(ash["HP Cost"]),
        },
        stats: [newUpgradeStats],
        isRenownedAsh: ash["Upgrade Type"] === "Special Ashes",
        achievement: ash.Achievement === "Yes",
      });
    }
    return ashes;
  }, []);
};
