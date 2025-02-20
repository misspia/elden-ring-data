import { CSV_BASE_PATH, JSON_BASE_PATH } from "@/contants/db";
import { DBFilesMap } from "@/types/files";
import { ashesOfWarCompatibilityWeaponsFormatter } from "@/formatters/ashesOfWarCompatibilityWeapons";
import { ashesOfWarCompatibilityAshesFormatter } from "@/formatters/ashesOfWarCompatibilityAshes";
import { bossesFormatter } from "@/formatters/bosses";
import { playerBossesFormatter } from "@/formatters/playerBosses";
import { weaponsFormatter } from "@/formatters/weapons";
import { levelUpCostFormatter } from "@/formatters/levelUpCost";
import { weaponsEffectsFormatter } from "@/formatters/weaponsEffects";
import { consumablesEffectsFormatter } from "@/formatters/consumablesEffects";

/**
 * Map of original csv file name to its corresponding json output file name
 */
export const DB_FILES_MAP_NAMES: DBFilesMap = [
  // /**
  //  * https://docs.google.com/spreadsheets/d/1BTwjJaSX8iEK7TjUi0TbCY34apgH_028_a_j2XcITqY/edit?gid=1383691957#gid=1383691957
  //  */
  // {
  //   csv: "Elden Ring Compatible Ash of War Sheet - Ashes_of_War.csv",
  //   json: "ashes-of-war-compatibility.json",
  //   formatter: ashesOfWarCompatibilityAshesFormatter,
  // },
  // /**
  //  * https://docs.google.com/spreadsheets/d/1BTwjJaSX8iEK7TjUi0TbCY34apgH_028_a_j2XcITqY/edit?gid=0#gid=0
  //  */
  // {
  //   csv: "Elden Ring Compatible Ash of War Sheet - Weapons.csv",
  //   json: "ashes-of-war-compatibility-weapons.json",
  //   formatter: ashesOfWarCompatibilityWeaponsFormatter,
  // },
  // /**
  //  * https://docs.google.com/spreadsheets/d/1aujq95UfL_oUs3voPt3nGqM1hLhaVJOj6JKB6Np3FD8/edit?gid=1466577964#gid=1466577964
  //  * phase 2 - 4 columns manually removed
  //  */
  // {
  //   csv: "Elden Ring NPC Data Sheet (1.05) (Trimmed) - Boss_Data.csv",
  //   json: "bosses.json",
  //   formatter: bossesFormatter,
  // },
  /**
   * https://docs.google.com/spreadsheets/d/1jV0LNCStg769ZpTMwYGGgHn7Le3cncPg5D8RJ7f8nv8/edit?gid=934475621#gid=934475621
   */
  // {
  //   csv: "Elden Ring NPC Data Sheet (1.05) - Player_Boss_Data.csv",
  //   json: "player-bosses.json",
  //   formatter: playerBossesFormatter,
  // },
  // /**
  //  * https://docs.google.com/spreadsheets/d/1ybiI1WgyRs67kGklUXeroi58KDab2KsU_hKutBORiW0/edit?gid=0#gid=0
  //  */
  // {
  //   csv: "Elden Ring Weapon Data Sheet (1.09) - Raw_Data.csv",
  //   json: "weapons.json",
  //   formatter: weaponsFormatter,
  // },
  // /**
  //  * https://docs.google.com/spreadsheets/d/1rfYfa5kcyoCuKgnS23dc8J8lLLTqWXsWtq9qG4TxT50/edit?gid=1688610004#gid=1688610004
  //  */
  // {
  //   csv: "ER - Miscellaneous Data (App Ver. 1.16) - Level Up Cost.csv",
  //   json: "level-up-cost.json",
  //   formatter: levelUpCostFormatter,
  // },
  // /**
  //  * https://docs.google.com/spreadsheets/d/1rfYfa5kcyoCuKgnS23dc8J8lLLTqWXsWtq9qG4TxT50/edit?gid=500408578#gid=500408578
  //  */
  // {
  //   csv: "ER - Miscellaneous Data (App Ver. 1.16) - Effects - Weapons.csv",
  //   json: "weapons-effects.json",
  //   formatter: weaponsEffectsFormatter,
  // },
  /**
   * https://docs.google.com/spreadsheets/d/1rfYfa5kcyoCuKgnS23dc8J8lLLTqWXsWtq9qG4TxT50/edit?gid=2041613656#gid=2041613656
   */
  {
    csv: "ER - Miscellaneous Data (App Ver. 1.16) - Effects - Consumables.csv",
    json: "consumables-effects.json",
    formatter: consumablesEffectsFormatter,
  },
];

export const DB_FILES_MAP: DBFilesMap = DB_FILES_MAP_NAMES.map((file) => ({
  csv: `${CSV_BASE_PATH}/${file.csv}`,
  json: `${JSON_BASE_PATH}/${file.json}`,
  formatter: file.formatter,
}));
