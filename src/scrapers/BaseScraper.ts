import { SectionName } from "@/types/scraper";
import { Page } from "puppeteer";

export class BaseScraper {
  public readonly page: Page;
  public readonly url: string;
  public readonly section: SectionName;

  constructor({
    page,
    url,
    section,
  }: {
    page: Page;
    url: string;
    section: SectionName;
  }) {
    this.page = page;
    this.url = url;
    this.section = section;
  }

  public throwError(e?: any) {
    console.log(`Failed at ${this.section} section`);
    throw e;
  }

  public async scrape() {
    try {
      console.log(this.url);
      await this.page.goto(this.url, {
        waitUntil: "networkidle2",
        timeout: 6000,
      });
      this.crawl();
    } catch (e) {
      this.throwError(e);
    }
  }

  public crawl() {}
}
