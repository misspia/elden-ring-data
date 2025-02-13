import { FILES_MAP } from "@/contants/filesMap";
import { Cleanser } from "./Cleanser";

/**
 * @description Runs a web scraper for the Elden Ring Wiki at
 * https://eldenring.wiki.fextralife.com/Elden+Ring+Wiki
 *
 * Command line arguments:
 * -
 */
(async () => {
  try {
    const args = process.argv.slice(2);
    const cleanser = new Cleanser(FILES_MAP);
    cleanser.cleanse();
  } catch (e) {
    console.log("error", e);
  }
})();
