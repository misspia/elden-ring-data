import { JSONFormatter } from "@/types/files";
import { NegationValue, NegationValueRaw } from "@/types/stats";
import { WeaponType } from "@/types/weapons";

type UnformattedBoss = {
  "CharInit ID": string;
  "NPC ID": string;
  "SpEffect ID": string;
  "SpEffect ID (NG+)": string;
  Name: string;
  "Actual Name": string;
  "Encounter Name": string;
  Condition: "-";
  "Encounter HP": string;
  Runes: string;
  HP: string;
  "Physical Defense": string;
  "Magic Defense": string;
  "Fire Defense": string;
  "Lightning Defense": string;
  "Holy Defense": string;
  "Standard Negation": NegationValueRaw;
  "Slash Negation": NegationValueRaw;
  "Strike Negation": NegationValueRaw;
  "Pierce Negation": NegationValueRaw;
  "Magic Negation": NegationValueRaw;
  "Fire Negation": NegationValueRaw;
  "Lightning Negation": NegationValueRaw;
  "Holy Negation": NegationValueRaw;
  Immunity: NegationValueRaw;
  Robustness: NegationValueRaw;
  "Focus (Sleep)": NegationValueRaw;
  "Focus (Madness)": NegationValueRaw;
  Vitality: NegationValueRaw;
  Poise: string;
  "Weapon (Right 1)": WeaponType;
  "Attack Power / Sorc Scaling (Right 1)": string;
  "Weapon Level (Right 1)": string;
  "Weapon Skill (Right 1)": "Kick";
  "Custom Weapon ID (Right 1)": "-";
  "Custom Weapon Str Scaling (Right 1)": "-";
  "Custom Weapon Dex Scaling (Right 1)": "-";
  "Custom Weapon Int Scaling (Right 1)": "-";
  "Custom Weapon Fai Scaling (Right 1)": "-";
  "Custom Weapon CalcCorrect ID (Right 1)": "-";
  "Spell Damage Multiplier (Right 1)": "-";
  "Weapon (Right 2)": "-";
  "Attack Power / Sorc Scaling (Right 2)": "-";
  "Weapon Level (Right 2)": "-";
  "Weapon Skill (Right 2)": "-";
  "Custom Weapon ID (Right 2)": "-";
  "Custom Weapon Str Scaling (Right 2)": "-";
  "Custom Weapon Dex Scaling (Right 2)": "-";
  "Custom Weapon Int Scaling (Right 2)": "-";
  "Custom Weapon Fai Scaling (Right 2)": "-";
  "Custom Weapon CalcCorrect ID (Right 2)": "-";
  "Spell Damage Multiplier (Right 2)": "-";
  "Weapon (Left)": "Custom Inverted Hawk Towershield";
  "Attack Power / Sorc Scaling / Phys Absorb (Left)": "286";
  "Weapon Level (Left)": "10";
  "Weapon Skill (Left)": "No Skill";
  "Custom Weapon ID (Left)": "32900000";
  "Custom Weapon Str Scaling (Left)": "0.42";
  "Custom Weapon Dex Scaling (Left)": "0.78";
  "Custom Weapon Int Scaling (Left)": "-";
  "Custom Weapon Fai Scaling (Left)": "-";
  "Custom Weapon CalcCorrect ID (Left)": "-";
  "Spell Damage Multiplier (Left)": "-";
  "Armor (Head)": "-";
  "Armor (Body)": "Leather Armor";
  "Armor (Arms)": "Leather Gloves";
  "Armor (Legs)": "Leather Boots";
  "Custom Armor ID (Head)": "-";
  "Spell 1": "-";
  "Spell 1 Boost": "-";
  "Spell 2": "-";
  "Spell 2 Boost": "-";
  "Spell 3": "-";
  "Spell 3 Boost": "-";
  "Spell 4": "-";
  "Spell 5": "-";
  "Spell 6": "-";
  "Spell 7": "-";
  "Talisman 1": "-";
  "Talisman 2": "-";
  Item: string;
  "Item Amount": string;
  "Flask Heal Amount": "30%";
  "Rune Level": string;
  Vigor: string;
  Mind: string;
  Endurance: string;
  Strength: string;
  Dexterity: string;
  Intelligence: string;
  Faith: string;
  Arcane: string;
  Region: string;
  Location: string;
  "Nearest Grace": string;
  "Runes (NG+)": string;
  "HP (NG+)": string;
  "Physical Defense (NG+)": string;
  "Magic Defense (NG+)": string;
  "Fire Defense (NG+)": string;
  "Lightning Defense (NG+)": string;
  "Holy Defense (NG+)": string;
  "Immunity (NG+)": NegationValueRaw;
  "Robustness (NG+)": NegationValueRaw;
  "Focus (NG+)": NegationValueRaw;
  "Vitality (NG+)": NegationValueRaw;
  "Runes (NG+2)": NegationValueRaw;
  "HP (NG+2)": string;
  "Physical Defense (NG+2)": string;
  "Magic Defense (NG+2)": string;
  "Fire Defense (NG+2)": string;
  "Lightning Defense (NG+2)": string;
  "Holy Defense (NG+2)": string;
  "Immunity (NG+2)": NegationValueRaw;
  "Robustness (NG+2)": NegationValueRaw;
  "Focus (NG+2)": NegationValueRaw;
  "Vitality (NG+2)": NegationValueRaw;
  "Runes (NG+3)": string;
  "HP (NG+3)": string;
  "Physical Defense (NG+3)": string;
  "Magic Defense (NG+3)": string;
  "Fire Defense (NG+3)": string;
  "Lightning Defense (NG+3)": string;
  "Holy Defense (NG+3)": string;
  "Immunity (NG+3)": NegationValueRaw;
  "Robustness (NG+3)": NegationValueRaw;
  "Focus (NG+3)": NegationValueRaw;
  "Vitality (NG+3)": NegationValueRaw;
  "Runes (NG+4)": string;
  "HP (NG+4)": string;
  "Physical Defense (NG+4)": string;
  "Magic Defense (NG+4)": string;
  "Fire Defense (NG+4)": string;
  "Lightning Defense (NG+4)": string;
  "Holy Defense (NG+4)": string;
  "Immunity (NG+4)": NegationValueRaw;
  "Robustness (NG+4)": NegationValueRaw;
  "Focus (NG+4)": NegationValueRaw;
  "Vitality (NG+4)": NegationValueRaw;
  "Runes (NG+5)": string;
  "HP (NG+5)": string;
  "Physical Defense (NG+5)": string;
  "Magic Defense (NG+5)": string;
  "Fire Defense (NG+5)": string;
  "Lightning Defense (NG+5)": string;
  "Holy Defense (NG+5)": string;
  "Immunity (NG+5)": NegationValueRaw;
  "Robustness (NG+5)": NegationValueRaw;
  "Focus (NG+5)": NegationValueRaw;
  "Vitality (NG+5)": NegationValueRaw;
  "Runes (NG+6)": string;
  "HP (NG+6)": string;
  "Physical Defense (NG+6)": string;
  "Magic Defense (NG+6)": string;
  "Fire Defense (NG+6)": string;
  "Lightning Defense (NG+6)": string;
  "Holy Defense (NG+6)": string;
  "Immunity (NG+6)": NegationValueRaw;
  "Robustness (NG+6)": NegationValueRaw;
  "Focus (NG+6)": NegationValueRaw;
  "Vitality (NG+6)": NegationValueRaw;
  "Runes (NG+7)": string;
  "HP (NG+7)": string;
  "Physical Defense (NG+7)": string;
  "Magic Defense (NG+7)": string;
  "Fire Defense (NG+7)": string;
  "Lightning Defense (NG+7)": string;
  "Holy Defense (NG+7)": string;
  "Immunity (NG+7)": NegationValueRaw;
  "Robustness (NG+7)": NegationValueRaw;
  "Focus (NG+7)": NegationValueRaw;
  "Vitality (NG+7)": NegationValueRaw;
};

type Spell = {
  name: string;
  boost?: number;
};

type FormattedBoss = {
  id: string;
  name: string;
  actualName: string;
  encounterName: string;
  condition: string;
  encounterHP: number;
  runes: number;
  hp: number;
  defence: {
    physical: number;
    magic: number;
    fire: number;
    lightning: number;
    holy: number;
  };
  negation: {
    standard: NegationValue;
    slash: NegationValue;
    pierce: NegationValue;
    magic: NegationValue;
    fire: NegationValue;
    lightning: NegationValue;
    holy: NegationValue;
    immunity: NegationValue;
    robustness: NegationValue;
    focusSleep: NegationValue;
    focusMadness: NegationValue;
    vitality: NegationValue;
  };
  poise: number;
  spells: Spell[];
  vigor: number;
  mind: number;
  endurance: number;
  strength: number;
  dexterity: number;
  itelligence: number;
  faith: number;
  arcane: number;
  region: string;
  location: string;
  nearestGrace: string;
};

const formatNegation = (negation: NegationValueRaw): NegationValue =>
  negation === "IMMUNE" ? negation : parseInt(negation);

const addSpell = (name: string, boost?: string) =>
  name !== "-"
    ? [
        {
          name,
          boost: boost && boost !== "-" ? parseFloat(boost) : undefined,
        },
      ]
    : [];

export const playerBossesFormatter: JSONFormatter<
  UnformattedBoss[],
  FormattedBoss[]
> = (json) => {
  return json.map((boss) => {
    const spells: Spell[] = [
      ...addSpell(boss["Spell 1"], boss["Spell 1 Boost"]),
      ...addSpell(boss["Spell 2"], boss["Spell 2 Boost"]),
      ...addSpell(boss["Spell 3"], boss["Spell 3 Boost"]),
      ...addSpell(boss["Spell 4"]),
      ...addSpell(boss["Spell 5"]),
      ...addSpell(boss["Spell 6"]),
      ...addSpell(boss["Spell 7"]),
    ];
    return {
      id: boss["NPC ID"],
      name: boss.Name,
      actualName: boss["Actual Name"],
      encounterName: boss["Encounter Name"],
      condition: boss.Condition,
      encounterHP: parseInt(boss["Encounter HP"]),
      runes: parseInt(boss.Runes),
      hp: parseInt(boss.HP),
      defence: {
        physical: parseInt(boss["Physical Defense"]),
        magic: parseInt(boss["Magic Defense"]),
        fire: parseInt(boss["Fire Defense"]),
        lightning: parseInt(boss["Lightning Defense"]),
        holy: parseInt(boss["Holy Defense"]),
      },
      negation: {
        standard: formatNegation(boss["Standard Negation"]),
        slash: formatNegation(boss["Slash Negation"]),
        pierce: formatNegation(boss["Pierce Negation"]),
        magic: formatNegation(boss["Magic Negation"]),
        fire: formatNegation(boss["Fire Negation"]),
        lightning: formatNegation(boss["Lightning Negation"]),
        holy: formatNegation(boss["Holy Negation"]),
        immunity: formatNegation(boss.Immunity),
        robustness: formatNegation(boss.Robustness),
        focusSleep: formatNegation(boss["Focus (Sleep)"]),
        focusMadness: formatNegation(boss["Focus (Madness)"]),
        vitality: formatNegation(boss.Vitality),
      },
      poise: parseInt(boss.Poise),
      spells,
      vigor: parseInt(boss.Vigor),
      mind: parseInt(boss.Mind),
      endurance: parseInt(boss.Endurance),
      strength: parseInt(boss.Strength),
      dexterity: parseInt(boss.Dexterity),
      itelligence: parseInt(boss.Intelligence),
      faith: parseInt(boss.Faith),
      arcane: parseInt(boss.Arcane),
      region: boss.Region,
      location: boss.Location,
      nearestGrace: boss["Nearest Grace"],
    };
  });
};
