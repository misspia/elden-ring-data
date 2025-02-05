import * as fs from "fs";
import * as path from "path";
import { DATA_OUTPUT_FILE_PATH } from "@/types/scraper";
import { EldenRingScraper } from "@/scrapers";

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
    const scraper = new EldenRingScraper();
    scraper.init();

    // const data = JSON.stringify({ test: "data!" });
    // fs.writeFileSync(path.resolve(DATA_OUTPUT_FILE_PATH, `test.json`), data);
  } catch (e) {
    console.log("error");
  }
})();
