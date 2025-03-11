import { JSONFormatter } from "@/types/files";
import { DropRarity, DropRarityRaw } from "@/types/items";
import { formatRarity } from "@/utils/format";

type UnformattedKeyItem = {
  Name: string;
  Icon: string;
  "Info 1": string;
  "Info 2": string | "-";
  Caption: string;
  "Consumable/Reusable": "Consumable" | "Reusable";
  "Drop Type": DropRarityRaw;
  "No. Held Max": string;
  "Storage Max": string; // 0 means item cannot be stored
  "Can Deposit": "Yes" | "No"; // what does this mean? not storage related since "Yes" items can have storage max > 0
  "Sell Price": string | "-"; // "-" means item cannot be sold
  Equippable: "Yes" | "No";
  "Lost in NG+": "Yes" | "No";
  "Enabled while Riding": "Yes" | "No";
  Obtainable: "Yes" | "No";
  "Goods Type": string;
  "SpEffect ID": string | "-";
  ID: string;
  "Icon ID": string;
  "Sort Group ID": string;
  "Sort ID": string;
};

type FormattedKeyItem = {
  name: string;
  effect: string;
  caption: string;
  isConsumable: boolean;
  isReusable: boolean;
  rarity: DropRarity;
  maxHeld: number;
  maxStorage: number;
  sellPrice?: number;
  equippable: boolean;
  lostInNGPlus: boolean;
  useableWhileRiding: boolean;
  obtainable: boolean;
};

export const keyItemsFormatter: JSONFormatter<
  UnformattedKeyItem[],
  FormattedKeyItem[]
> = (json) =>
  json.map((item) => ({
    name: item.Name,
    effect: item["Info 1"],
    caption: item.Caption,
    isConsumable: item["Consumable/Reusable"] === "Consumable",
    isReusable: item["Consumable/Reusable"] === "Reusable",
    rarity: formatRarity(item["Drop Type"]),
    maxHeld: parseInt(item["No. Held Max"]),
    maxStorage: parseInt(item["Storage Max"]),
    sellPrice:
      item["Sell Price"] === "-" ? undefined : parseInt(item["Sell Price"]),
    equippable: item.Equippable === "Yes",
    lostInNGPlus: item["Lost in NG+"] === "Yes",
    useableWhileRiding: item["Enabled while Riding"] === "Yes",
    obtainable: item.Obtainable === "Yes",
  }));
