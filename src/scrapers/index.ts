import {
  ELDEN_RING_WIKI_BASE_URL,
  SECTION_NAMES,
  WEAPONS_WIKI_PATH,
} from "@/types/scraper";
import puppeteer from "puppeteer-extra";
import { Command, Option } from "commander";
import { WeaponsScraper } from "@/scrapers/Weapons";

const StealthPlugin = require("puppeteer-extra-plugin-stealth");
puppeteer.use(StealthPlugin());

const program = new Command();

export class EldenRingScraper {
  constructor() {}
  public init() {
    program
      .addOption(
        new Option(
          "--prod",
          "Outputs into minified files if specified, else files will be formatted to be more readable",
        ).default(false),
      )
      .addOption(
        new Option(
          "--section <section-name>",
          "Specify specific section to scrape",
        ).choices(SECTION_NAMES),
      );

    program.parse();
    this.run();
  }

  private createURL(path: string) {
    return `${ELDEN_RING_WIKI_BASE_URL}/${path}`;
  }

  public async run() {
    const options = program.opts();

    try {
      const browser = await puppeteer.launch({
        headless: true,
        args: ["--no-sandbox", "--disable-setuid-sandbox"],
      });
      const page = await browser.newPage();
      await page.setUserAgent(
        "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/132.0.0.0 Safari/537.36",
      );

      const weapons = new WeaponsScraper(
        page,
        this.createURL(WEAPONS_WIKI_PATH),
      );

      await weapons.scrape();

      await browser.close();
    } catch (e) {
      throw e;
    }
  }
}
