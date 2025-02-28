import { JSONFormatter } from "@/types/files";
import { NegationValue, NegationValueRaw } from "@/types/stats";
import {
  PhysicalDamageType,
  PhysicalDamageTypeRaw,
  StatusEffect,
  StatusEffectRaw,
  WeaponType,
} from "@/types/weapons";

/**
 * Motion values (MV)
 * https://eldenring.wiki.fextralife.com/Calculating+Damage
 * https://www.reddit.com/r/Eldenring/comments/14c9i2u/comment/jojnlqx/?utm_source=share&utm_medium=web3x&utm_name=web3xcss&utm_term=1&utm_content=share_button
 */
type UnformattedSpellDamage = {
  Name: string;
  "Physical MV": string | "";
  "Magic MV": string | "";
  "Fire MV": string | "";
  "Lightning MV": string | "";
  "Holy MV": string | "";
  "Physical Damage Type": PhysicalDamageTypeRaw;
  Status: StatusEffectRaw;
  "Build-Up": string | "-";
  "Heal Multiplier": string | "-";
  "Damage Boosted By 1": string | "-";
  "Damage Boosted By 2": string | "-";
  "Damage Boost Multiplier": string | "-";
};

type FormattedSpellDamage = {
  name: string;
  motionValue: {
    physical: number;
    magic: number;
    fire: number;
    lightning: number;
    holy: number;
  };
  physicalDamageType: PhysicalDamageType;
  status?: StatusEffect;
  buildUp?: number;
  healMultiplier?: number;
  damageBoostedBy?: string[];
  damageBoostMultiplier?: number;
};

const formatMotionValue = (value: string | ""): number =>
  value === "" ? 0 : parseInt(value);

const formatDamage = (value: string | "-"): number | undefined =>
  value === "-" ? undefined : parseInt(value);

export const spellDamagesFormatter: JSONFormatter<
  UnformattedSpellDamage[],
  FormattedSpellDamage[]
> = (json) => {
  return json.map((spell) => {
    const damageBoostedBy: string[] = [
      ...(spell["Damage Boosted By 1"] !== "-"
        ? [spell["Damage Boosted By 1"]]
        : []),
      ...(spell["Damage Boosted By 2"] !== "-"
        ? [spell["Damage Boosted By 2"]]
        : []),
    ];
    return {
      name: spell.Name,
      motionValue: {
        physical: formatMotionValue(spell["Physical MV"]),
        magic: formatMotionValue(spell["Magic MV"]),
        fire: formatMotionValue(spell["Fire MV"]),
        lightning: formatMotionValue(spell["Lightning MV"]),
        holy: formatMotionValue(spell["Holy MV"]),
      },
      physicalDamageType: spell["Physical Damage Type"],
      ...(spell.Status !== "-" && { status: spell.Status }),
      buildUp: formatDamage(spell["Build-Up"]),
      healMultiplier: formatDamage(spell["Heal Multiplier"]),
      ...(damageBoostedBy.length !== 0 && { damageBoostedBy }),
      damageBoostMultiplier: formatDamage(spell["Damage Boost Multiplier"]),
    };
  });
};
