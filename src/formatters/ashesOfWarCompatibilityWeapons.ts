import { JSONFormatter } from "@/types/files";
import {
  WeaponType,
  WeaponAffinityRaw,
  WeaponAffinity,
  CanApplyAshOfWarRaw,
  WeaponTypeColumnRaw,
  WeaponAffinityColumnRaw,
} from "@/types/weapons";

type UnformattedAshesOfWarCompatibilityAshes = {
  ID: string;
  "Weapon Name": string;
  "Weapon Type": WeaponType;
  Affinity: WeaponAffinityRaw;
  "Weapon Type Column": WeaponTypeColumnRaw;
  "Affinity Column": WeaponAffinityColumnRaw;
  "Default Ash of War": string;
  "Can Apply Ash of War": CanApplyAshOfWarRaw;
  "Ash of War 1": string;
  "Ash of War 2": string;
  "Ash of War 3": string;
  "Ash of War 4": string;
  "Ash of War 5": string;
  "Ash of War 6": string;
  "Ash of War 7": string;
  "Ash of War 8": string;
  "Ash of War 9": string;
  "Ash of War 10": string;
  "Ash of War 11": string;
  "Ash of War 12": string;
  "Ash of War 13": string;
  "Ash of War 14": string;
  "Ash of War 15": string;
  "Ash of War 16": string;
  "Ash of War 17": string;
  "Ash of War 18": string;
  "Ash of War 19": string;
  "Ash of War 20": string;
  "Ash of War 21": string;
  "Ash of War 22": string;
  "Ash of War 23": string;
  "Ash of War 24": string;
  "Ash of War 25": string;
  "Ash of War 26": string;
  "Ash of War 27": string;
  "Ash of War 28": string;
  "Ash of War 29": string;
  "Ash of War 30": string;
  "Ash of War 31": string;
  "Ash of War 32": string;
  "Ash of War 33": string;
  "Ash of War 34": string;
  "Ash of War 35": string;
  "Ash of War 36": string;
  "Ash of War 37": string;
  "Ash of War 38": string;
  "Ash of War 39": string;
  "Ash of War 40": string;
  "Ash of War 41": string;
  "Ash of War 42": string;
  "Ash of War 43": string;
  "Ash of War 44": string;
  "Ash of War 45": string;
  "Ash of War 46": string;
  "Ash of War 47": string;
  "Ash of War 48": string;
  "Ash of War 49": string;
  "Ash of War 50": string;
  "Ash of War 51": string;
  "Ash of War 52": string;
  "Ash of War 53": string;
  "Ash of War 54": string;
  "Ash of War 55": string;
  "Ash of War 56": string;
};

type FormattedAshesOfWarCompatibilityAshes = {
  id: string;
  weaponName: string;
  weaponType: WeaponType;
  defaultAshOfWar: string;
  canApplyAshOfWar: boolean;
  compatibleAshesOfWar: string[];
  affinity?: WeaponAffinity;
};

export const ashesOfWarCompatibilityWeaponsFormatter: JSONFormatter<
  UnformattedAshesOfWarCompatibilityAshes[],
  FormattedAshesOfWarCompatibilityAshes[]
> = (json) =>
  json.map((weapon) => {
    const {
      ID: id,
      "Weapon Name": weaponName,
      "Weapon Type": weaponType,
      Affinity: affinity,
      "Default Ash of War": defaultAshOfWar,
      "Can Apply Ash of War": canApplyAshOfWar,
      "Weapon Type Column": _weaponTypeColumn,
      "Affinity Column": _affinityColumn,
      ...compatibleAshes
    } = weapon;
    const compatibleAshesOfWar: string[] = Object.values(
      compatibleAshes
    ).filter((ash) => ash !== "");
    return {
      id,
      weaponName,
      weaponType,
      affinity: affinity === "-" ? undefined : affinity,
      defaultAshOfWar,
      canApplyAshOfWar: canApplyAshOfWar === "Yes",
      compatibleAshesOfWar,
    };
  });
