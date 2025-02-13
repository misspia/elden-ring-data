import * as path from "path";

export const DATA_OUTPUT_FILE_PATH = path.resolve(__dirname, "../db");

export const SECTION_NAMES = ["ammo", "armor", "ashes", "weapons"] as const;

export type SectionName = (typeof SECTION_NAMES)[number];
