import { JSONFormatter } from "@/types/files";
import { DropRarity, DropRarityRaw } from "@/types/items";
import { formatRarity } from "@/utils/format";

type UnformattedBolsteringMaterial = {
  Name: string;
  Icon: string;
  Info: string;
  Caption: string;
  "Drop Type": DropRarityRaw;
  "No. Held Max": string;
  "Storage Max": string;
  "Sell Price": string | "-";
  ID: string;
  "Icon ID": string;
  "Sort Group ID": string;
  "Sort ID": string;
};

type FormattedBolsteringMaterial = {
  name: string;
  effect: string;
  caption: string;
  rarity: DropRarity;
  maxHeld: number;
  maxStorage: number;
  sellPrice?: number; // undefined means it cannot be sold
};

export const bolsteringMaterialsFormatter: JSONFormatter<
  UnformattedBolsteringMaterial[],
  FormattedBolsteringMaterial[]
> = (json) =>
  json.map((material) => ({
    name: material.Name,
    effect: material.Info,
    caption: material.Caption,
    rarity: formatRarity(material["Drop Type"]),
    maxHeld: parseInt(material["No. Held Max"]),
    maxStorage: parseInt(material["Storage Max"]),
    sellPrice:
      material["Sell Price"] === "-"
        ? undefined
        : parseInt(material["Sell Price"]),
  }));
