import { JSONFormatter } from "@/types/files";
import { OtherWeaponTypeRaw, PhysicalDamageTypeRaw } from "@/types/weapons";

type UnformattedConsumableWeapon = {
  Name: string;
  "Weapon Type": OtherWeaponTypeRaw;
  Icon: string;
  Info: string | "-";
  Caption: string;
  "Attack Power (Physical)": string;
  "Attack Power (Magic)": string;
  "Attack Power (Fire)": string;
  "Attack Power (Lightning)": string;
  "Attack Power (Holy)": string;
  "Attack Power (Stamina)": string;
  "Scaling (Str)": string | "-"; // amunition have no scaling
  "Scaling (Dex)": string | "-"; // tools have a number scaling
  "Scaling (Int)": string | "-";
  "Scaling (Fai)": string | "-";
  "Scaling (Arc)": string | "-";
  "Base Poison Build-up": string | "-";
  "Base Rot Build-up": string | "-";
  "Base Blood Build-up": string | "-";
  "Base Frost Build-up": string | "-";
  "Base Sleep Build-up": string | "-";
  "Physical Damage Type": PhysicalDamageTypeRaw; // ammunination always has type, only weapon type = tools don't
  "No. Held Max": string;
  "Sell Price": string | "-";
  "FP Cost": string | "-";
  "Ref ID": string | "-";
  "SpEffect ID": string | "-";
  "SpEffect Text ID": string | "-";
  "Behavior Variation ID": string;
  "CalcCorrect ID (Physical)": string | "-";
  "CalcCorrect ID (Magic)": string | "-";
  "CalcCorrect ID (Fire)": string | "-";
  "CalcCorrect ID (Lightning)": string | "-";
  "CalcCorrect ID (Holy)": string | "-";
  "CalcCorrect ID (Status)": string | "-";
  "Attack Element Correct ID": string;
  ID: string;
  "Icon ID": string;
  "Sort ID": string;
};

type FormattedConsumableWeapon = {
  name: string;
  type: "Damage";
  caption: string;
  scaling: {
    strength: number;
    dexterity: number;
    intelligence: number;
    faith: number;
    arcane: number;
  };
  attackPower: {
    physical: number;
    magic: number;
    fire: number;
    lightning: number;
    holy: number;
    stamina: number;
  };
  baseBuildUp?: {
    poison?: number;
    rot?: number;
    blood?: number;
    frost?: number;
    sleep?: number;
  };
  maxHeld: number;
  sellPrice: number;
  fpCost: number;
};

const formatNumber = (num: string | "-"): number =>
  num === "-" ? 0 : parseInt(num);
export const consumableWeaponsFormatter: JSONFormatter<
  UnformattedConsumableWeapon[],
  FormattedConsumableWeapon[]
> = (json) =>
  json
    .filter((weapon) => weapon["Weapon Type"] === "Tool")
    .map((consumable) => {
      const baseBuildUp: FormattedConsumableWeapon["baseBuildUp"] = {
        ...(consumable["Base Poison Build-up"] !== "-" && {
          poison: parseInt(consumable["Base Poison Build-up"]),
        }),
        ...(consumable["Base Rot Build-up"] !== "-" && {
          rot: parseInt(consumable["Base Rot Build-up"]),
        }),
        ...(consumable["Base Blood Build-up"] !== "-" && {
          blood: parseInt(consumable["Base Blood Build-up"]),
        }),
        ...(consumable["Base Frost Build-up"] !== "-" && {
          frost: parseInt(consumable["Base Frost Build-up"]),
        }),
        ...(consumable["Base Sleep Build-up"] !== "-" && {
          sleep: parseInt(consumable["Base Sleep Build-up"]),
        }),
      };
      return {
        name: consumable.Name,
        type: "Damage",
        caption: consumable.Caption,
        scaling: {
          strength: formatNumber(consumable["Scaling (Str)"]),
          dexterity: formatNumber(consumable["Scaling (Dex)"]),
          intelligence: formatNumber(consumable["Scaling (Int)"]),
          faith: formatNumber(consumable["Scaling (Fai)"]),
          arcane: formatNumber(consumable["Attack Power (Physical)"]),
        },
        attackPower: {
          physical: parseInt(consumable["Attack Power (Physical)"]),
          magic: parseInt(consumable["Attack Power (Magic)"]),
          fire: parseInt(consumable["Attack Power (Fire)"]),
          lightning: parseInt(consumable["Attack Power (Lightning)"]),
          holy: parseInt(consumable["Attack Power (Holy)"]),
          stamina: parseInt(consumable["Attack Power (Stamina)"]),
        },
        baseBuildUp:
          Object.keys(baseBuildUp).length === 0 ? undefined : baseBuildUp,
        maxHeld: parseInt(consumable["No. Held Max"]),
        sellPrice: parseInt(consumable["Sell Price"]),
        fpCost: parseInt(consumable["FP Cost"]),
      };
    });
