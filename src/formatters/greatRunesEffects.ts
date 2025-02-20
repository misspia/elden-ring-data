import { SentenceCaseKeysToCamelCase } from "@/types/camelCase";
import { JSONFormatter } from "@/types/files";
import { sentenceToCamelCase } from "@/utils/camelCase";

type UnformattedGreatRunesEffects = {
  Name: string;
  "Listed Effect In-game": string;
  Effect: string;
  Notes: string;
};

type FormattedGreatRunesEffectsKey =
  | keyof SentenceCaseKeysToCamelCase<
      Omit<UnformattedGreatRunesEffects, "Listed Effect In-game">
    >
  | "listedEffectInGame";
type FormattedGreatRunesEffects = Record<FormattedGreatRunesEffectsKey, number>;

export const greatRunesEffectsFormatter: JSONFormatter<
  UnformattedGreatRunesEffects[],
  FormattedGreatRunesEffects[]
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
          [sentenceToCamelCase(key) as FormattedGreatRunesEffectsKey]: value,
        };
      }, {}) as FormattedGreatRunesEffects),
    };
  });
};
