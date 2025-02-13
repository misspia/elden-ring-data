import { CSV_BASE_PATH, JSON_BASE_PATH } from "@/contants/db";
import { DBFilesMap } from "@/types/files";
import { ashesOfWarCompatibilityWeaponsFormatter } from "@/formatters/ashesOfWarCompatibilityWeapons";
import { ashesOfWarCompatibilityAshesFormatter } from "@/formatters/ashesOfWarCompatibilityAshes";
import { bossesFormatter } from "@/formatters/bosses";

/**
 * Map of original csv file name to its corresponding json output file name
 */
export const DB_FILES_MAP_NAMES: DBFilesMap = [
  {
    // https://docs.google.com/spreadsheets/d/1BTwjJaSX8iEK7TjUi0TbCY34apgH_028_a_j2XcITqY/edit?gid=1383691957#gid=1383691957
    csv: "Elden Ring Compatible Ash of War Sheet - Ashes_of_War.csv",
    json: "ashes-of-war-compatibility.json",
    formatter: ashesOfWarCompatibilityAshesFormatter,
  },
  {
    // https://docs.google.com/spreadsheets/d/1BTwjJaSX8iEK7TjUi0TbCY34apgH_028_a_j2XcITqY/edit?gid=0#gid=0
    csv: "Elden Ring Compatible Ash of War Sheet - Weapons.csv",
    json: "ashes-of-war-compatibility-weapons.json",
    formatter: ashesOfWarCompatibilityWeaponsFormatter,
  },
  // https://docs.google.com/spreadsheets/d/1aujq95UfL_oUs3voPt3nGqM1hLhaVJOj6JKB6Np3FD8/edit?gid=1466577964#gid=1466577964
  {
    csv: "Elden Ring NPC Data Sheet (1.05) - Boss_Data.csv",
    json: "bosses.json",
    formatter: bossesFormatter,
  },
];

export const DB_FILES_MAP: DBFilesMap = DB_FILES_MAP_NAMES.map((file) => ({
  csv: `${CSV_BASE_PATH}/${file.csv}`,
  json: `${JSON_BASE_PATH}/${file.json}`,
  formatter: file.formatter,
}));
