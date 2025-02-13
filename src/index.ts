import { DB_FILES_MAP } from "@/contants/dbFilesMap";
import { Cleanser } from "./Cleanser";

/**
 * @description Cleanses and formats csvs from @/data/csv and organizes them into conveniently
 * retreivable files under @/api. See README.md for the list of file sources
 *
 * Command line arguments:
 * -
 */
(async () => {
  try {
    const args = process.argv.slice(2);
    const cleanser = new Cleanser(DB_FILES_MAP);
    cleanser.cleanse();
  } catch (e) {
    console.log("error", e);
  }
})();
