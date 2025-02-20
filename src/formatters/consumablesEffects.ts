import { SentenceCaseKeysToCamelCase } from "@/types/camelCase";
import { JSONFormatter } from "@/types/files";
import { sentenceToCamelCase } from "@/utils/camelCase";

type UnformattedConsumablesEffects = {
  Name: "Starlight Shards";
  "Listed Effect In-game": "Use to gradually recover FP";
  Effect: "Regenerates 2 FP/s for 60 seconds";
  "PvP Alter": "";
  Duration: "";
  Notes: "";
};

type FormattedConsumablesEffectsKey =
  | keyof SentenceCaseKeysToCamelCase<
      Omit<UnformattedConsumablesEffects, "Listed Effect In-game">
    >
  | "listedEffectInGame";
type FormattedConsumablesEffects = Record<
  FormattedConsumablesEffectsKey,
  number
>;

export const consumablesEffectsFormatter: JSONFormatter<
  UnformattedConsumablesEffects[],
  FormattedConsumablesEffects[]
> = (json) => {
  return json.map((item) => {
    return {
      ...(Object.entries(item).reduce((acc, [key, value]) => {
        if (key === "Listed Effect In-game") {
          return {
            ...acc,
            listedEffectInGame: value,
          };
        }
        return {
          ...acc,
          [sentenceToCamelCase(key) as FormattedConsumablesEffectsKey]: value,
        };
      }, {}) as FormattedConsumablesEffects),
    };
  });
};
