import { Page } from "puppeteer";
import { BaseScraper } from "@/scrapers/BaseScraper";

export class WeaponsScraper extends BaseScraper {
  constructor(page: Page, url: string) {
    super({ page, url, section: "weapons" });
  }

  private getAllThrustingShields() {
    console.log("DOCUMENT", document);
  }

  public async crawl() {
    const thrustingShields = await this.page.evaluate(
      this.getAllThrustingShields,
    );
    console.log("------->", { thrustingShields });
  }
}
