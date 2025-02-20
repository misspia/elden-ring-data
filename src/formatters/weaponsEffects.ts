import { SentenceCaseKeysToCamelCase } from "@/types/camelCase";
import { JSONFormatter } from "@/types/files";
import { sentenceToCamelCase } from "@/utils/camelCase";

type UnformattedWeaponsEffects = {
  "Weapon Class": string;
  Weapon: string;
  Effect: string;
  Notes: "";
};

type FormattedWeaponsEffectsKey =
  keyof SentenceCaseKeysToCamelCase<UnformattedWeaponsEffects>;
type FormattedWeaponsEffects = Record<FormattedWeaponsEffectsKey, number>;

export const weaponsEffectsFormatter: JSONFormatter<
  UnformattedWeaponsEffects[],
  FormattedWeaponsEffects[]
> = (json) =>
  json.map(
    (item) =>
      Object.entries(item).reduce(
        (acc, [key, value]) => ({
          ...acc,
          [sentenceToCamelCase(key) as FormattedWeaponsEffectsKey]: value,
        }),
        {}
      ) as FormattedWeaponsEffects
  );
