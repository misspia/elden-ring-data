import { JSONFormatter } from "@/types/files";
import { DropRarity, DropRarityRaw } from "@/types/items";
import { formatRarity } from "@/utils/format";

type UnformattedMultiplayerItem = {
  Name: string;
  Icon: string;
  Info: string;
  Caption: string;
  "Drop Type": DropRarityRaw;
  "No. Held Max": string;
  "Sell Price": string | "-"; // "-" means items cannot be sold
  "Consumable/Reusable": "Consumable" | "Reusable";
  "Can Discard": "Yes" | "No";
  "SpEffect ID": string;
  ID: string;
  "Icon ID": string;
  "Sort ID": string;
};

type FormattedMultiplayerItem = {
  name: string;
  effect: string;
  caption: string;
  rarity: DropRarity;
  maxHeld: number;
  sellPrice?: number;
  isConsumable: boolean;
  isReusable: boolean;
  canDiscard: boolean;
};

export const multiplayerItemsFormatter: JSONFormatter<
  UnformattedMultiplayerItem[],
  FormattedMultiplayerItem[]
> = (json) =>
  json.map((item) => ({
    name: item.Name,
    effect: item.Info,
    caption: item.Caption,
    rarity: formatRarity(item["Drop Type"]),
    maxHeld: parseInt(item["No. Held Max"]),
    sellPrice:
      item["Sell Price"] === "-" ? undefined : parseInt(item["Sell Price"]),
    isConsumable: item["Consumable/Reusable"] === "Consumable",
    isReusable: item["Consumable/Reusable"] === "Reusable",
    canDiscard: item["Can Discard"] === "Yes",
  }));
