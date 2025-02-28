import { UnionToArray, unionToArray } from "@/types/union";

export type WeaponType =
  | "Dagger"
  | "Straight Sword"
  | "Curved Sword"
  | "Greatsword"
  | "Colossal Sword"
  | "Thrusting Sword"
  | "Heavy Thrusting Sword"
  | "Curved Greatsword"
  | "Katana"
  | "Twinblade"
  | "Hammer"
  | "Great Hammer"
  | "Flail"
  | "Axe"
  | "Greataxe"
  | "Spear"
  | "Great Spear"
  | "Halberd"
  | "Reaper"
  | "Whip"
  | "Fist"
  | "Claw"
  | "Colossal Weapon"
  | "Torch"
  | "Small Shield"
  | "Medium Shield"
  | "Greatshield"
  | "Staff"
  | "Glintstone Staff"
  | "Light Bow"
  | "Bow"
  | "Greatbow"
  | "Crossbow"
  | "Ballista"
  | "Sacred Seal";

export type WeaponAffinityRaw =
  | "-"
  | "Standard"
  | "Heavy"
  | "Keen"
  | "Quality"
  | "Magic"
  | "Frost"
  | "Fire"
  | "Flame Art"
  | "Lightning"
  | "Sacred"
  | "Poison"
  | "Blood"
  | "Occult";

export type WeaponAffinity = Exclude<WeaponAffinityRaw, "-">;

export type CanApplyAshOfWarRaw = "Yes" | "No";

export type WeaponTypeColumnRaw =
  | "AA"
  | "AB"
  | "AC"
  | "AD"
  | "AE"
  | "AF"
  | "AJ"
  | "AH"
  | "AI"
  | "AK"
  | "AS"
  | "AT"
  | "AU"
  | "AQ"
  | "AR"
  | "AL"
  | "AM"
  | "AN"
  | "AO"
  | "AP"
  | "O"
  | "P"
  | "Q"
  | "R"
  | "S"
  | "T"
  | "U"
  | "V"
  | "W"
  | "X"
  | "Y"
  | "Z";

export type WeaponAffinityColumnRaw =
  | "B"
  | "C"
  | "D"
  | "E"
  | "F"
  | "G"
  | "H"
  | "I"
  | "J"
  | "K"
  | "L"
  | "M"
  | "N"
  | "AW";

export type WeaponEffectRaw =
  | "None"
  | "Blood"
  | "Madness"
  | "Poison"
  | "Rot"
  | "Frost"
  | "Sleep";

export type WeaponEffect = Omit<WeaponEffectRaw, "None">;

export type PhysicalDamageTypeRaw =
  | "-"
  | "Pierce"
  | "Slash"
  | "Slash/Pierce"
  | "Standard"
  | "Standard/Pierce"
  | "Strike"
  | "Strike/Pierce";

export type PhysicalDamageType = Omit<PhysicalDamageTypeRaw, "-">;

export type StatusEffectRaw =
  | "-"
  | "Bleed"
  | "Death"
  | "Frost"
  | "Madness"
  | "Poison"
  | "Rot"
  | "Sleep";

export type StatusEffect = Omit<StatusEffectRaw, "-">;
