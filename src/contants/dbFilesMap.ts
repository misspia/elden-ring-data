import { CSV_BASE_PATH, HTML_BASE_PATH, JSON_BASE_PATH } from "@/contants/db";
import { DBFilesMap } from "@/types/files";
import { ashesOfWarCompatibilityWeaponsFormatter } from "@/formatters/ashesOfWarCompatibilityWeapons";
import { ashesOfWarCompatibilityAshesFormatter } from "@/formatters/ashesOfWarCompatibilityAshes";
import { bossesFormatter } from "@/formatters/bosses";
import { playerBossesFormatter } from "@/formatters/playerBosses";
import { weaponStatsFormatter } from "@/formatters/weaponStats";
import { levelUpCostFormatter } from "@/formatters/levelUpCost";
import { weaponsEffectsFormatter } from "@/formatters/weaponsEffects";
import { consumablesEffectsFormatter } from "@/formatters/consumablesEffects";
import { greatRunesEffectsFormatter } from "@/formatters/greatRunesEffects";
import { spellDamagesFormatter } from "@/formatters/spellDamages";
import { weaponsAffinitiesFormatter } from "@/formatters/weaponsAffinities";
import { armorsFormatter } from "@/formatters/armors";
import { magicFormatter } from "@/formatters/magic";
import { talismansFormatter } from "@/formatters/talismans";
import { spiritAshesFormatter } from "@/formatters/spiritAshes";
import { craftingMaterialsFormatter } from "@/formatters/craftingMaterials";
import { ammunitionFormatter } from "@/formatters/ammunition";
import { consumableWeaponsFormatter } from "@/formatters/consumableWeapons";
import { bolsteringMaterialsFormatter } from "@/formatters/bolsteringMaterials";
import { keyItemsFormatter } from "@/formatters/keyItems";
import { multiplayerItemsFormatter } from "@/formatters/multiplayerItems";
import { infoItemsFormatter } from "@/formatters/infoItems";
import { craftingIngredientsFormatter } from "@/formatters/craftingIngredients";

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
  //   json: "weapon-stats.json",
  //   formatter: weaponStatsFormatter,
  // },
  // /**
  //  * https://docs.google.com/spreadsheets/d/1x6LvzrqA9LWXPbzPZBDG8aL4N3Xc_ZxtEFMWpUxQj5c/edit?gid=0#gid=0
  //  * Note: modified Axe of Godrick -- (source: https://eldenring.wiki.fextralife.com/I+Command+Thee,+Kneel!)
  //  *  - default weapon skill: I command thee --> I command thee, kneel!
  //  *  - default weapon skill fp cost: - --> 15
  //  */
  // {
  //   csv: "Elden Ring Item Data Sheet (1.09) - Weapons.csv",
  //   json: "weapons-affinities.json",
  //   formatter: weaponsAffinitiesFormatter,
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
  // /**
  //  * https://docs.google.com/spreadsheets/d/1rfYfa5kcyoCuKgnS23dc8J8lLLTqWXsWtq9qG4TxT50/edit?gid=2041613656#gid=2041613656
  //  */
  // {
  //   csv: "ER - Miscellaneous Data (App Ver. 1.16) - Effects - Consumables.csv",
  //   json: "consumables-effects.json",
  //   formatter: consumablesEffectsFormatter,
  // },
  // /**
  //  * https://docs.google.com/spreadsheets/d/1rfYfa5kcyoCuKgnS23dc8J8lLLTqWXsWtq9qG4TxT50/edit?gid=69936079#gid=69936079
  //  */
  // {
  //   csv: "ER - Miscellaneous Data (App Ver. 1.16) - Effects - Great Runes.csv",
  //   json: "great-runes-effects.json",
  //   formatter: greatRunesEffectsFormatter,
  // },
  // /**
  //  * https://docs.google.com/spreadsheets/d/1ybiI1WgyRs67kGklUXeroi58KDab2KsU_hKutBORiW0/edit?gid=1699546889#gid=1699546889
  //  */
  // {
  //   csv: "Elden Ring Weapon Data Sheet (1.09) - Spell_Data.csv",
  //   json: "spell-damages.json",
  //   formatter: spellDamagesFormatter,
  // },
  // /**
  //  * https://docs.google.com/spreadsheets/d/1x6LvzrqA9LWXPbzPZBDG8aL4N3Xc_ZxtEFMWpUxQj5c/edit?gid=1685478111#gid=1685478111
  //  */
  // {
  //   csv: "Elden Ring Item Data Sheet (1.09) - Armor.csv",
  //   json: "armors.json",
  //   formatter: armorsFormatter,
  // },
  // /**
  //  * https://docs.google.com/spreadsheets/d/1x6LvzrqA9LWXPbzPZBDG8aL4N3Xc_ZxtEFMWpUxQj5c/edit?gid=611749740#gid=611749740
  //  */
  // {
  //   csv: "Elden Ring Item Data Sheet (1.09) - Magic.csv",
  //   json: "magic.json",
  //   formatter: magicFormatter,
  // },
  /**
   * https://docs.google.com/spreadsheets/d/1x6LvzrqA9LWXPbzPZBDG8aL4N3Xc_ZxtEFMWpUxQj5c/edit?gid=1804084520#gid=1804084520
   */
  // {
  //   csv: "Elden Ring Item Data Sheet (1.09) - Talismans.csv",
  //   json: "talismans.json",
  //   formatter: talismansFormatter,
  // },
  // /**
  //  * https://docs.google.com/spreadsheets/d/1x6LvzrqA9LWXPbzPZBDG8aL4N3Xc_ZxtEFMWpUxQj5c/edit?gid=525203103#gid=525203103
  //  */
  // {
  //   csv: "Elden Ring Item Data Sheet (1.09) - Spirit Ashes.csv",
  //   json: "spirit-ashes.json",
  //   formatter: spiritAshesFormatter,
  // },
  // /**
  //  * https://docs.google.com/spreadsheets/d/1x6LvzrqA9LWXPbzPZBDG8aL4N3Xc_ZxtEFMWpUxQj5c/edit?gid=958920399#gid=958920399
  //  */
  // {
  //   csv: "Elden Ring Item Data Sheet (1.09) - Crafting Materials.csv",
  //   json: "crafting-materials.json",
  //   formatter: craftingMaterialsFormatter,
  // },
  /**
   * https://docs.google.com/spreadsheets/d/1x6LvzrqA9LWXPbzPZBDG8aL4N3Xc_ZxtEFMWpUxQj5c/edit?gid=1491084983#gid=1491084983
   */
  // {
  //   csv: "Elden Ring Item Data Sheet (1.09) - Other Weapons.csv",
  //   json: "ammunition.json",
  //   formatter: ammunitionFormatter,
  // },
  // /**
  //  * https://docs.google.com/spreadsheets/d/1x6LvzrqA9LWXPbzPZBDG8aL4N3Xc_ZxtEFMWpUxQj5c/edit?gid=1491084983#gid=1491084983
  //  */
  // {
  //   csv: "Elden Ring Item Data Sheet (1.09) - Other Weapons.csv",
  //   json: "consumable-weapons.json",
  //   formatter: consumableWeaponsFormatter,
  // },
  // /**
  //  * https://docs.google.com/spreadsheets/d/1x6LvzrqA9LWXPbzPZBDG8aL4N3Xc_ZxtEFMWpUxQj5c/edit?gid=478384990#gid=478384990
  //  */
  // {
  //   csv: "Elden Ring Item Data Sheet (1.09) - Bolstering Materials.csv",
  //   json: "bolstering-materials.json",
  //   formatter: bolsteringMaterialsFormatter,
  // },
  // /**
  //  * https://docs.google.com/spreadsheets/d/1x6LvzrqA9LWXPbzPZBDG8aL4N3Xc_ZxtEFMWpUxQj5c/edit?gid=478384990#gid=478384990
  //  */
  // {
  //   csv: "Elden Ring Item Data Sheet (1.09) - Key Items.csv",
  //   json: "key-items.json",
  //   formatter: keyItemsFormatter,
  // },
  // /**
  //  * https://docs.google.com/spreadsheets/d/1x6LvzrqA9LWXPbzPZBDG8aL4N3Xc_ZxtEFMWpUxQj5c/edit?gid=1645410556#gid=1645410556
  //  */
  // {
  //   csv: "Elden Ring Item Data Sheet (1.09) - Multiplayer Items.csv",
  //   json: "multiplayer-items.json",
  //   formatter: multiplayerItemsFormatter,
  // },
  // /**
  //  * https://docs.google.com/spreadsheets/d/1x6LvzrqA9LWXPbzPZBDG8aL4N3Xc_ZxtEFMWpUxQj5c/edit?gid=782655497#gid=782655497
  //  */
  // {
  //   csv: "Elden Ring Item Data Sheet (1.09) - Info Items.csv",
  //   json: "info-items.json",
  //   formatter: infoItemsFormatter,
  // },
  /**
   * https://eldenring.wiki.fextralife.com/Crafting
   * view-source:https://eldenring.wiki.fextralife.com/Crafting
   */
  {
    html: "view-source_https___eldenring.wiki.fextralife.com_Crafting.html",
    json: "crafting-ingredients.json",
    formatter: craftingIngredientsFormatter,
  },
];

// https://www.reddit.com/r/Eldenring/search/?q=spreadsheet+crafting&cId=d968be92-f7de-4015-9af6-a34c551127f3&iId=9c78c289-0a41-4ded-9809-ee63c33bb604
// https://eldenring.wiki.fextralife.com/Crafting
// https://docs.google.com/spreadsheets/d/1C7nkqmrRRt5aRseJt_h_3FSGob22W-Nzmbuf8GrL-ZE/edit?gid=1504622472#gid=1504622472

export const DB_FILES_MAP: DBFilesMap = DB_FILES_MAP_NAMES.map((file) => ({
  ...(file.csv ? { csv: `${CSV_BASE_PATH}/${file.csv}` } : {}),
  ...(file.html ? { html: `${HTML_BASE_PATH}/${file.html}` } : {}),
  json: `${JSON_BASE_PATH}/${file.json}`,
  formatter: file.formatter,
}));
