import { JSONFormatter } from "@/types/files";
import { DropRarity, DropRarityRaw } from "@/types/items";
import { formatRarity } from "@/utils/format";

type UnformattedInfoItem = {
  Name: string;
  Icon: string;
  Info: string;
  Caption: string;
  "Drop Type": DropRarityRaw;
  "Lost in NG+": "Yes" | "No";
  Obtainable: "Yes" | "no";
  "Goods Type": string;
  "Version Added": string;
  ID: string;
  "Icon ID": string;
  "Sort Group ID": string;
  "Sort ID": string;
};

type FormattedInfoItem = {
  name: string;
  effect: string;
  caption: string;
  rarity: DropRarity;
  lostinNGPlus: boolean;
  obtainable: boolean;
};

export const infoItemsFormatter: JSONFormatter<
  UnformattedInfoItem[],
  FormattedInfoItem[]
> = (json) =>
  json.map((item) => ({
    name: item.Name,
    effect: item.Info,
    caption: item.Caption,
    rarity: formatRarity(item["Drop Type"]),
    lostinNGPlus: item["Lost in NG+"] === "Yes",
    obtainable: item.Obtainable === "Yes",
  }));
