// import {
//   ELDEN_RING_WIKI_BASE_URL,
//   SECTION_NAMES,
//   WEAPONS_WIKI_PATH,
// } from "@/types/scraper";
// import puppeteer from "puppeteer-extra";
// import { Command, Option } from "commander";
// import { WeaponsScraper } from "@/scrapers/Weapons";

// const StealthPlugin = require("puppeteer-extra-plugin-stealth");
// puppeteer.use(StealthPlugin());

// const program = new Command();

// export class EldenRingScraper {
//   constructor() {}
//   public init() {
//     program
//       .addOption(
//         new Option(
//           "--prod",
//           "Outputs into minified files if specified, else files will be formatted to be more readable",
//         ).default(false),
//       )
//       .addOption(
//         new Option(
//           "--section <section-name>",
//           "Specify specific section to scrape",
//         ).choices(SECTION_NAMES),
//       );

//     program.parse();
//     this.run();
//   }

//   private createURL(path: string) {
//     return `${ELDEN_RING_WIKI_BASE_URL}/${path}`;
//   }

//   public async run() {
//     const options = program.opts();

//     try {
//       const browser = await puppeteer.launch({
//         headless: true,
//         args: ["--no-sandbox", "--disable-setuid-sandbox"],
//       });
//       const page = await browser.newPage();
//       await page.setUserAgent(
//         "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/132.0.0.0 Safari/537.36",
//       );

//       const weapons = new WeaponsScraper(
//         page,
//         this.createURL(WEAPONS_WIKI_PATH),
//       );

//       await weapons.scrape();

//       await browser.close();
//     } catch (e) {
//       throw e;
//     }
//   }
// }

import { PlaywrightCrawler, Dataset } from "crawlee";
import {
  ELDEN_RING_WIKI_BASE_URL,
  SECTION_NAMES,
  WEAPONS_WIKI_PATH,
} from "@/types/scraper";
import { Command, Option } from "commander";
import { WeaponsScraper } from "@/scrapers/Weapons";

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
      // await Dataset.pushData({ 'test': 'data???'});
      //     const dataset = await Dataset.open('some-name');
      //     await dataset.pushData({ foo: 'bar' });
      //     await dataset.exportToJSON('MY-DATA');
      console.log("------> start");
      //   const crawler = new PlaywrightCrawler({
      //     requestHandler: async ({ page, request, enqueueLinks }) => {
      //       await Dataset.pushData({ 'test': 'data???'});
      //       const dataset = await Dataset.open('some-name');
      //       await dataset.pushData({ foo: 'bar' });
      //       await dataset.exportToJSON('MY-DATA');

      //     //     console.log(`Processing: ${request.url}`);
      //     //     if (request.label === 'DETAIL') {
      //     //       console.log("------> request.label === 'DETAIL")
      //     //       const urlPart = request.url.split('/').slice(-1); // ['sennheiser-mke-440-professional-stereo-shotgun-microphone-mke-440']
      //     //       const manufacturer = urlPart[0].split('-')[0]; // 'sennheiser'

      //     //       const title = await page.locator('.product-meta h1').textContent();
      //     //       const sku = await page.locator('span.product-meta__sku-number').textContent();

      //     //       const priceElement = page
      //     //           .locator('span.price')
      //     //           .filter({
      //     //               hasText: '$',
      //     //           })
      //     //           .first();

      //     //       const currentPriceString = await priceElement.textContent();
      //     //       if(currentPriceString) {
      //     //         const rawPrice = currentPriceString.split('$')[1];
      //     //         const price = Number(rawPrice.replaceAll(',', ''));

      //     //         const inStockElement = page
      //     //             .locator('span.product-form__inventory')
      //     //             .filter({
      //     //                 hasText: 'In stock',
      //     //             })
      //     //             .first();

      //     //         const inStock = (await inStockElement.count()) > 0;

      //     //         const results = {
      //     //             url: request.url,
      //     //             manufacturer,
      //     //             title,
      //     //             sku,
      //     //             currentPrice: price,
      //     //             availableInStock: inStock,
      //     //         };

      //     //         await Dataset.pushData(results);
      //     //       }
      //     //     } else if (request.label === 'CATEGORY') {
      //     //       console.log("------> request.label === 'CATEGORY'")
      //     //         // We are now on a category page. We can use this to paginate through and enqueue all products,
      //     //         // as well as any subsequent pages we find

      //     //         await page.waitForSelector('.product-item > a');
      //     //         await enqueueLinks({
      //     //             selector: '.product-item > a',
      //     //             label: 'DETAIL', // <= note the different label
      //     //         });

      //     //         // Now we need to find the "Next" button and enqueue the next page of results (if it exists)
      //     //         const nextButton = await page.$('a.pagination__next');
      //     //         if (nextButton) {
      //     //             await enqueueLinks({
      //     //                 selector: 'a.pagination__next',
      //     //                 label: 'CATEGORY', // <= note the same label
      //     //             });
      //     //         }
      //     //     } else {
      //     //         // This means we're on the start page, with no label.
      //     //         // On this page, we just want to enqueue all the category pages.

      //     //         await page.waitForSelector('.collection-block-item');
      //     //         await enqueueLinks({
      //     //             selector: '.collection-block-item',
      //     //             label: 'CATEGORY',
      //     //         });
      //     //     }
      //     },
      // });

      // Add first URL to the queue and start the crawl.
      // await crawler.run(['https://warehouse-theme-metal.myshopify.com/collections']);

      const crawler = new PlaywrightCrawler({
        headless: true,
        requestHandlerTimeoutSecs: 300,
        requestHandler: async ({ page, request, enqueueLinks }) => {
          console.log("Processing:", request.url);
          console.log(await page.content()); // Debugging: print page content
          try {
            const content = await page.content();
            console.log(
              `📝 Page content for ${request.url}:\n`,
              content.substring(0, 500),
            ); // Show first 500 chars
          } catch (error) {
            console.error(
              `❌ Error fetching content for ${request.url}:`,
              error,
            );
          }

          await enqueueLinks(); // Attempt to queue more links
          console.log(`✅ Finished processing: ${request.url}`);
        },
      });
      await crawler.run([
        "https://eldenring.wiki.fextralife.com/Weapons+Comparison+Tables",
      ]);
    } catch (e) {
      throw e;
    }
  }
}
