import { EquipmentSlot } from "@/types/armors";
import { DropRarity } from "@/types/items";
import { JSONFormatter } from "@/types/files";

type UnformattedArmor = {
  Name: string;
  "Icon (Male)": string;
  "Icon (Female)": string;
  "Equip Slot": EquipmentSlot;
  Caption: string;
  Weight: string;
  "Damage Negation (Physical)": string;
  "Damage Negation (VS Strike)": string;
  "Damage Negation (VS Slash)": string;
  "Damage Negation (VS Pierce)": string;
  "Damage Negation (Magic)": string;
  "Damage Negation (Fire)": string;
  "Damage Negation (Lightning)": string;
  "Damage Negation (Holy)": string;
  "Immunity (Poison and Rot)": string;
  "Robustness (Blood)": string;
  Frost: string | "-"; // ignore, only present on one item and not referenced on official wiki
  "Focus (Madness)": string | "-";
  Sleep: string | "-"; // ignore, only listed on one item as a small patch fix
  "Vitality (Death Blight)": string | "-";
  Poise: string;
  "Sell Price": string;
  "Drop Type": DropRarity;
  "Can Be Altered": "TRUE" | "FALSE";
  Obtainable: "Yes" | "No";
  ID: string;
  "Armor Set ID": string;
  "Armor ID": string;
  "Icon ID (Male)": string;
  "Icon ID (Female)": string;
  "Model ID": string;
  "Armor Category": string;
  "Sort Group ID": string;
  "Sort ID": string;
  "Resident SpEffect ID [1]": string;
  "Resident SpEffect ID [2]": string;
  "Resident SpEffect ID [3]": string;
  "Hidden Effect": ""; // all fields are blank
  "Physical Negation (Raw)": string;
  "Strike Negation (Raw)": string;
  "Slash Negation (Raw)": string;
  "Pierce Negation (Raw)": string;
  "Magic Negation (Raw)": string;
  "Fire Negation (Raw)": string;
  "Lightning Negation (Raw)": string;
  "Holy Negation (Raw)": string;
  "Info (Unused)": string | "%null%";
};

type FormattedArmor = {
  name: string;
  category: EquipmentSlot; // same as slot
  caption: string;
  weight: string;
  damageNegation: {
    physical: number;
    strike: number;
    slash: number;
    pierce: number;
    magic: number;
    fire: number;
    lightning: number;
    holy: number;
  };
  rawDamageNegation: {
    physical: number;
    strike: number;
    slash: number;
    pierce: number;
    magic: number;
    fire: number;
    lightning: number;
    holy: number;
  };
  resistance: {
    immunity: number;
    robustness: number;
    focus: number;
    vitality: number;
    poise: number;
  };
  sellPrice: number;
  rarity: DropRarity;
  canBeAltered: boolean;
  altered: boolean;
  obtainable: boolean;
};

export const armorsFormatter: JSONFormatter<
  UnformattedArmor[],
  FormattedArmor[]
> = (json) => {
  return json.map((armor) => ({
    name: armor.Name,
    category: armor["Equip Slot"],
    caption: armor.Caption,
    weight: armor.Weight,
    damageNegation: {
      physical: parseInt(armor["Damage Negation (Physical)"]),
      strike: parseInt(armor["Damage Negation (VS Strike)"]),
      slash: parseInt(armor["Damage Negation (VS Slash)"]),
      pierce: parseInt(armor["Damage Negation (VS Pierce)"]),
      magic: parseInt(armor["Damage Negation (Magic)"]),
      fire: parseInt(armor["Damage Negation (Fire)"]),
      lightning: parseInt(armor["Damage Negation (Lightning)"]),
      holy: parseInt(armor["Damage Negation (Holy)"]),
    },
    rawDamageNegation: {
      physical: parseInt(armor["Physical Negation (Raw)"]),
      strike: parseInt(armor["Strike Negation (Raw)"]),
      slash: parseInt(armor["Slash Negation (Raw)"]),
      pierce: parseInt(armor["Pierce Negation (Raw)"]),
      magic: parseInt(armor["Magic Negation (Raw)"]),
      fire: parseInt(armor["Fire Negation (Raw)"]),
      lightning: parseInt(armor["Lightning Negation (Raw)"]),
      holy: parseInt(armor["Holy Negation (Raw)"]),
    },
    resistance: {
      immunity: parseInt(armor["Immunity (Poison and Rot)"]),
      robustness: parseInt(armor["Robustness (Blood)"]),
      focus: parseInt(armor["Focus (Madness)"]),
      vitality: parseInt(armor["Vitality (Death Blight)"]),
      poise: parseInt(armor.Poise),
    },
    sellPrice: parseInt(armor["Sell Price"]),
    rarity: armor["Drop Type"],
    canBeAltered: armor["Can Be Altered"] === "TRUE",
    altered: armor.Name.toLowerCase().includes("altered"),
    obtainable: armor.Obtainable === "Yes",
  }));
};
