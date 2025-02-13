import { JSONFormatter } from "@/types/files";

type SentenceToCamelCase<S extends string> =
  S extends `${infer P1} ${infer P2}${infer P3}`
    ? `${Lowercase<P1>}${Uppercase<P2>}${SentenceToCamelCase<P3>}`
    : Lowercase<S>;

type UnformattedAshesOfWarCompatibilityWeapon = {
  Name: string;
  Standard: "TRUE" | "FALSE";
  Heavy: "TRUE" | "FALSE";
  Keen: "TRUE" | "FALSE";
  Quality: "TRUE" | "FALSE";
  Fire: "TRUE" | "FALSE";
  "Flame Art": "TRUE" | "FALSE";
  Lightning: "TRUE" | "FALSE";
  Sacred: "TRUE" | "FALSE";
  Magic: "TRUE" | "FALSE";
  Cold: "TRUE" | "FALSE";
  Poison: "TRUE" | "FALSE";
  Blood: "TRUE" | "FALSE";
  Occult: "TRUE" | "FALSE";
  Dagger: "TRUE" | "FALSE";
  "Straight Sword": "TRUE" | "FALSE";
  Greatsword: "TRUE" | "FALSE";
  "Colossal Sword": "TRUE" | "FALSE";
  "Curved Sword": "TRUE" | "FALSE";
  "Curved Greatsword": "TRUE" | "FALSE";
  Katana: "TRUE" | "FALSE";
  Twinblade: "TRUE" | "FALSE";
  "Thrusting Sword": "TRUE" | "FALSE";
  "Heavy Thrusting Sword": "TRUE" | "FALSE";
  Axe: "TRUE" | "FALSE";
  Greataxe: "TRUE" | "FALSE";
  Hammer: "TRUE" | "FALSE";
  "Great Hammer": "TRUE" | "FALSE";
  Flail: "TRUE" | "FALSE";
  Spear: "TRUE" | "FALSE";
  "Great Spear": "TRUE" | "FALSE";
  Halberd: "TRUE" | "FALSE";
  Reaper: "TRUE" | "FALSE";
  Fist: "TRUE" | "FALSE";
  Claw: "TRUE" | "FALSE";
  Whip: "TRUE" | "FALSE";
  "Colossal Weapon": "TRUE";
  "Light Bow": "TRUE" | "FALSE";
  Bow: "TRUE" | "FALSE";
  Greatbow: "TRUE" | "FALSE";
  Crossbow: "TRUE" | "FALSE";
  Ballista: "TRUE" | "FALSE";
  Staff: "TRUE" | "FALSE";
  Seal: "TRUE" | "FALSE";
  "Small Shield": "TRUE" | "FALSE";
  "Medium Shield": "TRUE" | "FALSE";
  Greatshield: "TRUE" | "FALSE";
  Torch: "TRUE" | "FALSE";
  NONE: "FALSE";
};

type KeysToCamelCase<T> = {
  [K in keyof T as SentenceToCamelCase<string & K>]: T[K] extends {}
    ? KeysToCamelCase<T[K]>
    : T[K];
};

type boolKeys = Exclude<
  keyof KeysToCamelCase<UnformattedAshesOfWarCompatibilityWeapon>,
  "name"
>;
type FormattedAshesOfWarCompatibilityWeapon = { name: string } & Record<
  boolKeys,
  boolean
>;

const toBool = (str: "TRUE" | "FALSE"): boolean => str === "TRUE";

function sentenceToCamelCase<T extends string>(str: T): SentenceToCamelCase<T> {
  const result = str
    .replace(/(?:^\w|[A-Z]|\b\w)/g, (word: string, index: number) =>
      index === 0 ? word.toLowerCase() : word.toUpperCase()
    )
    .replace(/\s+/g, "");

  return result as SentenceToCamelCase<T>;
}

export const ashesOfWarWeaponsFormatter: JSONFormatter<
  UnformattedAshesOfWarCompatibilityWeapon[],
  FormattedAshesOfWarCompatibilityWeapon[]
> = (json) => {
  return json.map((item) => {
    const { Name: name, ...boolFields } = item;
    return {
      name,
      ...Object.entries(boolFields).reduce(
        (acc, [key, value]) => ({
          ...acc,
          [sentenceToCamelCase(key)]: toBool(value),
        }),
        {} as Record<string, boolean>
      ),
    } as FormattedAshesOfWarCompatibilityWeapon;
  });
};
