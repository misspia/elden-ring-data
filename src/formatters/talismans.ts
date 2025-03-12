import { JSONFormatter } from "@/types/files";

type UnformattedTalisman = {
  Name: string;
  "Talisman Name": string;
  Icon: string;
  Info: string;
  Caption: string;
  Level: string;
  Weight: string;
  "Sell Price": string;
  ID: string;
  "Icon ID": string;
  "Sort Group ID": string;
  "Sort ID": string;
  Achievement: "Yes" | "No";
  "SpEffect ID [0]": string;
  "SpEffect ID [1]": string;
  "SpEffect ID [2]": string;
  "SpEffect ID [3]": string;
  "SpEffect ID [4]": string;
};

type FormattedTalisman = {
  name: string;
  talismanName: string;
  effect: string;
  caption: string;
  level: number;
  weight: number;
  sellPrice: number;
  achievement: boolean;
};

export const talismansFormatter: JSONFormatter<
  UnformattedTalisman[],
  FormattedTalisman[]
> = (json) =>
  json.map((talisman) => ({
    name: talisman.Name,
    talismanName: talisman["Talisman Name"],
    effect: talisman.Info,
    caption: talisman.Caption,
    level: parseInt(talisman.Level),
    weight: parseFloat(talisman.Weight),
    sellPrice: parseInt(talisman["Sell Price"]),
    achievement: talisman.Achievement === "Yes",
  }));
