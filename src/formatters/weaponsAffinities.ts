import { JSONFormatter } from "@/types/files";
import {
  PhysicalDamageType,
  PhysicalDamageTypeRaw,
  WeaponAffinity,
  WeaponAffinityRaw,
  WeaponType,
} from "@/types/weapons";

type UnformattedWeaponsAffinities = {
  Name: string;
  "Weapon Name": string;
  Affinity: WeaponAffinityRaw;
  "Weapon Type": WeaponType;
  Icon: string;
  "Physical Damage Type": PhysicalDamageTypeRaw;
  Caption: string;
  "Passive Effect 1": string | "-";
  "Passive Effect 2": string | "-";
  "Hidden Effect": string | "-";
  "Default Weapon Skill": string | "No Skill";
  "Default Weapon Skill FP Cost": string | "-";
  Weight: string;
  "Sell Price": string; // "-1 means it cannot be sold"
  "Upgrade Price": string;
  "Attack Power (Critical)": string;
  "Required (Str)": string;
  "Required (Dex)": string;
  "Required (Int)": string;
  "Required (Fai)": string;
  "Required (Arc)": string;
  "Physical Damage (Standard)": "Yes" | "No";
  "Physical Damage (Strike)": "Yes" | "No";
  "Physical Damage (Slash)": "Yes" | "No";
  "Physical Damage (Pierce)": "Yes" | "No";
  Infusable: "Yes" | "No" | "";
  "Can Enchant": "Yes" | "No";
  Achievement: "Yes" | "No" | "";
  Obtainable: "Yes" | "No";
  ID: string;
  "Weapon Group ID": string;
  "Weapon ID": string;
  "Affinity ID": string;
  "Weapon Moveset Category": string;
  "Magic Effect Category": string;
  "SpEffect ID": string;
  "Icon ID": string;
  "Model ID": string;
  "Reinforce Type ID": string;
  "Behavior Variation ID": string;
  "Sort Group Type ID": string;
  "Sort Group ID": string;
  "Sort ID": string;
};

type FormattedWeaponsAffinities = {
  affinityWeaponName: string;
  weaponName: string;
  affinity?: WeaponAffinity;
  weaponType: WeaponType;
  physicalDamageType?: PhysicalDamageType;
  caption: string;
  passiveEffects?: string[];
  hiddenEffect?: string;
  defaultWeaponSkill?: {
    name: string;
    fpCost: number;
  };
  weight: number;
  /**
   * undefined sell price means it cannot be sold
   */
  sellPrice?: number;
  upgradePrice: number;
  attackPowerCritical: number;
  requirements: {
    strength: number;
    dexterity: number;
    intelligence: number;
    faith: number;
    arcane: number;
  };
  physicalDamage: {
    standard: boolean;
    strike: boolean;
    slash: boolean;
    pierce: boolean;
  };
  infusable?: boolean;
  canEnchant: boolean;
  achievement?: boolean;
  obtainable: boolean;
};

const stringToBoolean = (str: "Yes" | "No"): boolean => str === "Yes";

export const weaponsAffinitiesFormatter: JSONFormatter<
  UnformattedWeaponsAffinities[],
  FormattedWeaponsAffinities[]
> = (json) =>
  json.map((weapon) => {
    const passiveEffects: string[] = [
      ...(weapon["Passive Effect 1"] !== "-"
        ? [weapon["Passive Effect 1"]]
        : []),
      ...(weapon["Passive Effect 2"] !== "-"
        ? [weapon["Passive Effect 2"]]
        : []),
    ];
    return {
      affinityWeaponName: weapon.Name,
      weaponName: weapon["Weapon Name"],
      affinity: weapon.Affinity === "-" ? undefined : weapon.Affinity,
      weaponType: weapon["Weapon Type"],
      physicalDamageType:
        weapon["Physical Damage Type"] === "-"
          ? undefined
          : weapon["Physical Damage Type"],
      caption: weapon.Caption,
      passiveEffects: passiveEffects.length === 0 ? undefined : passiveEffects,
      hiddenEffect:
        weapon["Hidden Effect"] === "-" ? undefined : weapon["Hidden Effect"],
      defaultWeaponSkill:
        weapon["Default Weapon Skill"] === "No Skill"
          ? undefined
          : {
              name: weapon["Default Weapon Skill"],
              fpCost: parseInt(weapon["Default Weapon Skill FP Cost"]),
            },
      weight: parseInt(weapon.Weight),
      sellPrice:
        parseInt(weapon["Sell Price"]) < 0
          ? undefined
          : parseInt(weapon["Sell Price"]),
      upgradePrice: parseInt(weapon["Upgrade Price"]),
      attackPowerCritical: parseInt(weapon["Attack Power (Critical)"]),
      requirements: {
        strength: parseInt(weapon["Required (Str)"]),
        dexterity: parseInt(weapon["Required (Dex)"]),
        intelligence: parseInt(weapon["Required (Int)"]),
        faith: parseInt(weapon["Required (Fai)"]),
        arcane: parseInt(weapon["Required (Arc)"]),
      },
      physicalDamage: {
        standard: stringToBoolean(weapon["Physical Damage (Standard)"]),
        strike: stringToBoolean(weapon["Physical Damage (Strike)"]),
        slash: stringToBoolean(weapon["Physical Damage (Slash)"]),
        pierce: stringToBoolean(weapon["Physical Damage (Pierce)"]),
      },
      infusable:
        weapon.Infusable === "" ? undefined : stringToBoolean(weapon.Infusable),
      canEnchant: stringToBoolean(weapon["Can Enchant"]),
      achievement:
        weapon.Achievement === ""
          ? undefined
          : stringToBoolean(weapon.Achievement),
      obtainable: stringToBoolean(weapon.Obtainable),
    };
  });
