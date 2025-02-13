import * as path from "path";

export const DATA_OUTPUT_FILE_PATH = path.resolve(__dirname, "../data");

export const SECTION_NAMES = ["ammo", "armor", "ashes", "weapons"] as const;

export type SectionName = (typeof SECTION_NAMES)[number];

export const ELDEN_RING_WIKI_BASE_URL = "https://eldenring.wiki.fextralife.com";
export const WEAPONS_WIKI_PATH = "Weapons";
