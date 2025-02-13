import { SentenceToCamelCase } from "@/types/camelCase";

export const sentenceToCamelCase = <T extends string>(
  str: T
): SentenceToCamelCase<T> => {
  const isAllUppercase = str === str.toUpperCase();
  if (isAllUppercase) {
    return str.toLowerCase() as SentenceToCamelCase<T>;
  }

  const result = str
    .replace(/(?:^\w|[A-Z]|\b\w)/g, (word: string, index: number) =>
      index === 0 ? word.toLowerCase() : word.toUpperCase()
    )
    .replace(/\s+/g, "");

  return result as SentenceToCamelCase<T>;
};
