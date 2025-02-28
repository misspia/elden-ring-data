import { JSONFormatter } from "@/types/files";
import { DropRarity } from "@/types/items";
import { MagicCategory } from "@/types/magic";

type UnformattedMagic = {
  Name: string;
  Type: MagicCategory;
  Icon: string;
  Info: string;
  Caption: string;
  "Required (Int)": string;
  "Required (Fai)": string;
  "Required (Arc)": string;
  "Slots Used": string;
  "FP Cost": string;
  "FP Cost (Continuous)": string | "-";
  "Stamina Cost": string;
  "Base Poison Build-up": string | "-";
  "Base Rot Build-up": string | "-";
  "Base Blood Build-up": string | "-";
  "Base Frost Build-up": string | "-";
  "Base Sleep Build-up": string | "-";
  "Base Death Blight Build-up": string | "-";
  "Base Death Blight Build-up (Charged)": string | "-";
  "Base Madness Build-up": string | "-";
  "Base Madness Build-up (Charged)": string | "-";
  "Base Madness Build-up (Self)": string | "-";
  "Base Madness Build-up (Self; Charged)": string | "-";
  "Damage Boosted By 1": string | "-";
  "Damage Boosted By 2": string | "-";
  "Weapon Buff": "Yes" | "No";
  "Shield Buff": "Yes" | "No";
  "Drop Type": DropRarity;
  Achievement: "Yes" | "No";
  "Usable while Riding": "Yes" | "No";
  "Item Type": string; // ?? values: 0, 5, 16, 17, 18
  ID: string;
  "Icon ID": string;
  "AtkParam ID": string;
  "SpEffect Category": string;
  "Conditional Weapon Effect": string;
  "Sort Group ID": string;
  "Sort ID": string;
};

const formatOptionalNumber = (str: string | "-"): number | undefined =>
  str === "-" ? undefined : parseInt(str);

type FormattedMagic = {
  name: string;
  category: MagicCategory;
  info: string;
  caption: string;
  requirements: {
    intelligence: number;
    faith: number;
    arcane: number;
  };
  fpCost: number;
  fpCostContinuous?: number;
  staminaCost: number;
  baseBuildUp?: {
    poison?: number;
    rot?: number;
    blood?: number;
    frost?: number;
    sleep?: number;
    deathBlight?: number;
    deathBlightCharged?: number;
    madness?: number;
    madnessCharged?: number;
    madnessSelf?: number;
    madnessSelfCharged?: number;
  };
  damageBoostedBy?: string[];
  weaponBuff: boolean;
  shieldBuff: boolean;
  rarity: DropRarity;
  achievement: boolean;
  usableWhileRiding: boolean;
};

export const magicFormatter: JSONFormatter<
  UnformattedMagic[],
  FormattedMagic[]
> = (json) =>
  json.map((magic) => {
    const baseBuildUp: FormattedMagic["baseBuildUp"] = {
      ...(magic["Base Poison Build-up"] !== "-"
        ? { poison: formatOptionalNumber(magic["Base Poison Build-up"]) }
        : {}),
      ...(magic["Base Rot Build-up"] !== "-"
        ? { rot: formatOptionalNumber(magic["Base Rot Build-up"]) }
        : {}),
      ...(magic["Base Poison Build-up"] !== "-"
        ? { blood: formatOptionalNumber(magic["Base Poison Build-up"]) }
        : {}),
      ...(magic["Base Frost Build-up"] !== "-"
        ? { frost: formatOptionalNumber(magic["Base Frost Build-up"]) }
        : {}),
      ...(magic["Base Sleep Build-up"] !== "-"
        ? { sleep: formatOptionalNumber(magic["Base Sleep Build-up"]) }
        : {}),
      ...(magic["Base Death Blight Build-up"] !== "-"
        ? {
            deathBlight: formatOptionalNumber(
              magic["Base Death Blight Build-up"],
            ),
          }
        : {}),
      ...(magic["Base Death Blight Build-up (Charged)"] !== "-"
        ? {
            deathBlightCharged: formatOptionalNumber(
              magic["Base Death Blight Build-up (Charged)"],
            ),
          }
        : {}),
      ...(magic["Base Madness Build-up"] !== "-"
        ? { madness: formatOptionalNumber(magic["Base Madness Build-up"]) }
        : {}),
      ...(magic["Base Madness Build-up (Charged)"] !== "-"
        ? {
            madnessCharged: formatOptionalNumber(
              magic["Base Madness Build-up (Charged)"],
            ),
          }
        : {}),
      ...(magic["Base Madness Build-up (Self)"] !== "-"
        ? {
            maddnessSelf: formatOptionalNumber(
              magic["Base Madness Build-up (Self)"],
            ),
          }
        : {}),
      ...(magic["Base Madness Build-up (Self; Charged)"] !== "-"
        ? {
            madnessSelfCharged: formatOptionalNumber(
              magic["Base Madness Build-up (Self; Charged)"],
            ),
          }
        : {}),
    };
    const damageBoostedBy = [
      ...(magic["Damage Boosted By 1"] !== "-"
        ? [magic["Damage Boosted By 1"]]
        : []),
      ...(magic["Damage Boosted By 2"] !== "-"
        ? [magic["Damage Boosted By 2"]]
        : []),
    ];
    return {
      name: magic.Name,
      category: magic.Type,
      info: magic.Info,
      caption: magic.Caption,
      requirements: {
        intelligence: parseInt(magic["Required (Int)"]),
        faith: parseInt(magic["Required (Fai)"]),
        arcane: parseInt(magic["Required (Arc)"]),
      },
      fpCost: parseInt(magic["FP Cost"]),
      fpCostContinuous: formatOptionalNumber(magic["FP Cost"]),
      staminaCost: parseInt(magic["Stamina Cost"]),
      baseBuildUp:
        Object.keys(baseBuildUp).length !== 0 ? baseBuildUp : undefined,
      damageBoostedBy: damageBoostedBy.length ? damageBoostedBy : undefined,
      weaponBuff: magic["Weapon Buff"] === "Yes",
      shieldBuff: magic["Shield Buff"] === "Yes",
      rarity: magic["Drop Type"],
      achievement: magic.Achievement === "Yes",
      usableWhileRiding: magic["Usable while Riding"] === "Yes",
    };
  });
