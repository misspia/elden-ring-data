import { JSONFormatter } from "@/types/files";
import {
  PhysicalDamageType,
  PhysicalDamageTypeRaw,
  WeaponEffect,
  WeaponEffectRaw,
  WeaponType,
} from "@/types/weapons";

type UnformattedWeapon = {
  ID: string;
  Name: string;
  "Reinforce Type ID": string;
  "Physical Attack": string;
  "Magic Attack": string;
  "Fire Attack": string;
  "Lightning Attack": string;
  "Holy Attack": string;
  "Stamina Attack": string;
  "Str Scaling": string;
  "Dex Scaling": string;
  "Int Scaling": string;
  "Fai Scaling": string;
  "Arc Scaling": string;
  "Physical Guard": string;
  "Magic Guard": string;
  "Fire Guard": string;
  "Lightning Guard": string;
  "Holy Guard": string;
  "Guard Boost": string;
  "Resistance Guard": string;
  "Upgrade Price": string;
  "Effect 1": string;
  "Effect 1 Type": WeaponEffectRaw;
  "Effect 2": string;
  "Effect 2 Type": WeaponEffectRaw;
  "Attack Element Correct ID": string;
  Infusable: "Yes" | "No";
  "Max Upgrade": string;
  "Required (Str)": string;
  "Required (Dex)": string;
  "Required (Int)": string;
  "Required (Fai)": string;
  "Required (Arc)": string;
  "Weapon Type": WeaponType;
  "Physical Damage Type": PhysicalDamageTypeRaw;
  Caption: string;
  Weight: string;
  "Attack Power (Critical)": string;
  "2H Str Bonus": "Yes" | "No";
  "Base Poise Attack": string;
  "Sort Group Type": string;
  "Sort Group ID": string;
  "Sort ID": string;
};

type Effect = {
  type: WeaponEffect;
  value: number;
};

type FormattedWeapon = {
  id: string;
  name: string;
  type: WeaponType;
  physicalDamageType: PhysicalDamageType;
  caption: string;
  weight: number;
  attackPowerCritical: number;
  strengthBonus2Hand: boolean;
  basePoiseAttack: number;
  attack: {
    physical: number;
    magic: number;
    fire: number;
    lightning: number;
    holy: number;
    stamina: number;
  };
  scaling: {
    strength: number;
    dexterity: number;
    intelligence: number;
    faith: number;
    arcane: number;
  };
  guard: {
    physical: number;
    magic: number;
    fire: number;
    lightning: number;
    holy: number;
    boost: number;
  };
  resistanceguard: number;
  upgradePrice: number;
  effects: Effect[];
  infusable: boolean;
  maxUpgrade: number;
  requirements: {
    strength: number;
    dexterity: number;
    intelligence: number;
    faith: number;
    arcane: number;
  };
};

const addEffect = (type: WeaponEffectRaw, value: string): Effect[] =>
  type !== "None"
    ? [
        {
          type,
          value: parseFloat(value),
        },
      ]
    : [];

export const weaponsFormatter: JSONFormatter<
  UnformattedWeapon[],
  FormattedWeapon[]
> = (json) => {
  return json.map((weapon) => ({
    id: weapon.ID,
    name: weapon.Name,
    type: weapon["Weapon Type"],
    physicalDamageType: weapon["Physical Damage Type"],
    caption: weapon.Caption,
    weight: parseInt(weapon.Weight),
    attackPowerCritical: parseInt(weapon["Attack Power (Critical)"]),
    strengthBonus2Hand: weapon["2H Str Bonus"] === "Yes",
    basePoiseAttack: parseInt(weapon["Base Poise Attack"]),
    attack: {
      physical: parseInt(weapon["Physical Attack"]),
      magic: parseInt(weapon["Magic Attack"]),
      fire: parseInt(weapon["Fire Attack"]),
      lightning: parseInt(weapon["Lightning Attack"]),
      holy: parseInt(weapon["Holy Attack"]),
      stamina: parseInt(weapon["Stamina Attack"]),
    },
    scaling: {
      strength: parseInt(weapon["Str Scaling"]),
      dexterity: parseInt(weapon["Dex Scaling"]),
      intelligence: parseInt(weapon["Int Scaling"]),
      faith: parseInt(weapon["Fai Scaling"]),
      arcane: parseInt(weapon["Arc Scaling"]),
    },
    guard: {
      physical: parseInt(weapon["Physical Guard"]),
      magic: parseInt(weapon["Magic Guard"]),
      fire: parseInt(weapon["Fire Guard"]),
      lightning: parseInt(weapon["Lightning Guard"]),
      holy: parseInt(weapon["Holy Guard"]),
      boost: parseInt(weapon["Guard Boost"]),
    },
    resistanceguard: parseInt(weapon["Resistance Guard"]),
    upgradePrice: parseInt(weapon["Upgrade Price"]),
    effects: [
      ...addEffect(weapon["Effect 1 Type"], weapon["Effect 1"]),
      ...addEffect(weapon["Effect 2 Type"], weapon["Effect 2"]),
    ],
    infusable: weapon.Infusable === "Yes",
    maxUpgrade: parseInt(weapon["Max Upgrade"]),
    requirements: {
      strength: parseInt(weapon["Required (Str)"]),
      dexterity: parseInt(weapon["Required (Dex)"]),
      intelligence: parseInt(weapon["Required (Int)"]),
      faith: parseInt(weapon["Required (Fai)"]),
      arcane: parseInt(weapon["Required (Arc)"]),
    },
  }));
};
