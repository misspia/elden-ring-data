import { JSONFormatter } from "@/types/files";
import {
  AmmunitionType,
  OtherWeaponTypeRaw,
  PhysicalDamageType,
  PhysicalDamageTypeRaw,
} from "@/types/weapons";

type UnformattedAmmunition = {
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
  "FP Cost": string | "-"; // ammunition have no fp cost
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

type FormattedAmmunition = {
  name: string;
  type: AmmunitionType;
  caption: string;
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
  physicalDamageType: PhysicalDamageType;
  maxHeld: number;
  sellPrice: number;
};

const formatNumber = (num: string | "-"): number =>
  num === "-" ? 0 : parseInt(num);

export const ammunitionFormatter: JSONFormatter<
  UnformattedAmmunition[],
  FormattedAmmunition[]
> = (json) =>
  json
    .filter((weapon) => weapon["Weapon Type"] !== "Tool")
    .map((ammunition) => {
      const baseBuildUp: FormattedAmmunition["baseBuildUp"] = {
        ...(ammunition["Base Poison Build-up"] !== "-" && {
          poison: parseInt(ammunition["Base Poison Build-up"]),
        }),
        ...(ammunition["Base Rot Build-up"] !== "-" && {
          rot: parseInt(ammunition["Base Rot Build-up"]),
        }),
        ...(ammunition["Base Blood Build-up"] !== "-" && {
          blood: parseInt(ammunition["Base Blood Build-up"]),
        }),
        ...(ammunition["Base Frost Build-up"] !== "-" && {
          frost: parseInt(ammunition["Base Frost Build-up"]),
        }),
        ...(ammunition["Base Sleep Build-up"] !== "-" && {
          sleep: parseInt(ammunition["Base Sleep Build-up"]),
        }),
      };

      return {
        name: ammunition.Name,
        type: ammunition["Weapon Type"],
        caption: ammunition.Caption,
        attackPower: {
          physical: parseInt(ammunition["Attack Power (Physical)"]),
          magic: parseInt(ammunition["Attack Power (Magic)"]),
          fire: parseInt(ammunition["Attack Power (Fire)"]),
          lightning: parseInt(ammunition["Attack Power (Lightning)"]),
          holy: parseInt(ammunition["Attack Power (Holy)"]),
          stamina: parseInt(ammunition["Attack Power (Stamina)"]),
        },
        baseBuildUp:
          Object.keys(baseBuildUp).length === 0 ? undefined : baseBuildUp,
        physicalDamageType: ammunition["Physical Damage Type"],
        maxHeld: parseInt(ammunition["No. Held Max"]),
        sellPrice: parseInt(ammunition["Sell Price"]),
      };
    });
