import { SentenceCaseKeysToCamelCase } from "@/types/camelCase";
import { JSONFormatter } from "@/types/files";
import { sentenceToCamelCase } from "@/utils/camelCase";

type UnformattedLevelUpCost = {
  Level: string;
  "Runes to Next": string;
  "Cost Increase": string;
  "Total Runes": string;
};

type FormattedLevelUpCostKey =
  keyof SentenceCaseKeysToCamelCase<UnformattedLevelUpCost>;
type FormattedLevelUpCost = Record<FormattedLevelUpCostKey, number>;

export const levelUpCostFormatter: JSONFormatter<
  UnformattedLevelUpCost[],
  FormattedLevelUpCost[]
> = (json) => {
  return json.map((item) => {
    const test = Object.entries(item).reduce(
      (acc, [key, value]) => ({
        ...acc,
        [sentenceToCamelCase(key) as FormattedLevelUpCostKey]: parseInt(value),
      }),
      {},
    );
    return test as FormattedLevelUpCost;
  });
};
