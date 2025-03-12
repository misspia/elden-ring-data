import * as fs from "fs";
import { parse as htmlParse, HTMLElement } from "node-html-parser";
import { parse as csvParse } from "csv-parse/sync";
import { DBFilesMap } from "@/types/files";

type CSVToJSONResult = Record<string, string>[];
export class Cleanser {
  public DBfilesMap: DBFilesMap;

  constructor(DBfilesMap: DBFilesMap) {
    this.DBfilesMap = DBfilesMap;
  }

  readCSV(path: string): CSVToJSONResult {
    const file = fs
      .readFileSync(path, { encoding: "utf8" })
      .trim()
      .replace(/^\uFEFF/, "");

    return csvParse(file, {
      columns: true,
      skip_empty_lines: true,
      trim: true,
    }) as CSVToJSONResult;
  }

  readHTML(path: string): HTMLElement {
    const file = fs.readFileSync(path, { encoding: "utf8" });
    return htmlParse(file) as HTMLElement;
  }

  convertToJSON() {}

  format() {}

  cleanse() {
    this.DBfilesMap.forEach(({ formatter, ...paths }) => {
      if (paths.csv) {
        const unformattedJSON = this.readCSV(paths.csv);
        const formattedJSON = formatter(unformattedJSON);
        fs.promises.writeFile(
          paths.json,
          JSON.stringify(formattedJSON, null, 4),
          "utf-8",
        );
      } else if (paths.html) {
        const html = this.readHTML(paths.html);
        const formattedJSON = formatter(html);
        fs.promises.writeFile(
          paths.json,
          JSON.stringify(formattedJSON, null, 4),
          "utf-8",
        );
      }
    });
  }
}
