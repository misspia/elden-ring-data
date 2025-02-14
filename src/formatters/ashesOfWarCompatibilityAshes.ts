import { JSONFormatter } from "@/types/files";
import { SentenceCaseKeysToCamelCase } from "@/types/camelCase";
import { sentenceToCamelCase } from "@/utils/camelCase";

type UnformattedAshesOfWarCompatibilityAshes = {
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

type boolKeys = Exclude<
  keyof SentenceCaseKeysToCamelCase<UnformattedAshesOfWarCompatibilityAshes>,
  "name"
>;
type FormattedAshesOfWarCompatibilityWeapon = { name: string } & Record<
  boolKeys,
  boolean
>;

const toBool = (str: "TRUE" | "FALSE"): boolean => str === "TRUE";

export const ashesOfWarCompatibilityAshesFormatter: JSONFormatter<
  UnformattedAshesOfWarCompatibilityAshes[],
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
        {} as Record<string, boolean>,
      ),
    } as FormattedAshesOfWarCompatibilityWeapon;
  });
};
