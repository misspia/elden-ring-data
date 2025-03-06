import { JSONFormatter } from "@/types/files";
import { DropRarity, DropRarityRaw } from "@/types/items";

type UnformattedCraftingMaterial = {
  Name: string;
  Icon: string;
  "Info 1": string;
  "Info 2": string;
  Caption: string;
  "Drop Type": DropRarityRaw;
  "No. Held Max": string;
  "Storage Max": string;
  "Sell Price": string;
  ID: string;
  "Icon ID": string;
  "Sort Group ID": string;
  "Sort ID": string;
};

type FormattedCraftingMaterial = {
  name: string;
  effect: string; // Info 1 (ie. "Material used for crafting items")
  obtainedBy: string; // Info 2 (ie. "Found by hunting herbivorous beasts")
  caption: string;
  rarity: DropRarity;
  maxHeld: number;
  maxStorage: number;
  sellPrice: number;
};

const formatRarity = (rarity: DropRarityRaw): DropRarity =>
  rarity === "White (Large)" || rarity === "White (Small)" ? "White" : rarity;

export const craftingMaterialsFormatter: JSONFormatter<
  UnformattedCraftingMaterial[],
  FormattedCraftingMaterial[]
> = (json) =>
  json.map((material) => ({
    name: material.Name,
    effect: material["Info 1"],
    obtainedBy: material["Info 2"],
    caption: material.Caption,
    rarity: formatRarity(material["Drop Type"]),
    maxHeld: parseInt(material["No. Held Max"]),
    maxStorage: parseInt(material["Storage Max"]),
    sellPrice: parseInt(material["Sell Price"]),
  }));
