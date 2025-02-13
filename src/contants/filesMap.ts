import * as path from "path";
import { FilesMap } from "@/types/files";
import { ashesOfWarWeaponsFormatter } from "@/formatters/ashesOfWarWeapons";

const CSV_BASE_PATH = path.resolve(__dirname, "../../data/csv");
const JSON_BASE_PATH = path.resolve(__dirname, "../../data/json");

/**
 * Map of original csv file name to its corresponding json output file name
 */
export const FILES_MAP_NAMES: FilesMap = [
  {
    // https://docs.google.com/spreadsheets/d/1BTwjJaSX8iEK7TjUi0TbCY34apgH_028_a_j2XcITqY/edit?gid=1383691957#gid=1383691957
    csv: "Elden Ring Compatible Ash of War Sheet - Ashes_of_War.csv",
    json: "ashes-of-war-compatibility.json",
    formatter: ashesOfWarWeaponsFormatter,
  },
  {
    // https://docs.google.com/spreadsheets/d/1BTwjJaSX8iEK7TjUi0TbCY34apgH_028_a_j2XcITqY/edit?gid=0#gid=0
    csv: "Elden Ring Compatible Ash of War Sheet - Weapons.csv",
    json: "ashes-of-war-compatibility-weapons.json",
    formatter: ashesOfWarWeaponsFormatter,
  },
];

export const FILES_MAP: FilesMap = FILES_MAP_NAMES.map((file) => ({
  csv: `${CSV_BASE_PATH}/${file.csv}`,
  json: `${JSON_BASE_PATH}/${file.json}`,
  formatter: file.formatter,
}));
