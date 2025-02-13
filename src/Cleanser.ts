import * as fs from "fs";
import { FilesMap } from "@/types/files";
import { CSVToJSON } from "@/CSVToJSON";

export class Cleanser {
  public filesMap: FilesMap;

  constructor(filesMap: FilesMap) {
    this.filesMap = filesMap;
  }

  readCSV(path: string): string {
    return fs.readFileSync(path).toString();
  }

  convertToJSON() {}

  format() {}

  cleanse() {
    this.filesMap.forEach(({ formatter, ...paths }) => {
      const strCSV = this.readCSV(paths.csv);
      const unformattedJSON = CSVToJSON(strCSV);
      const formattedJSON = formatter(unformattedJSON);
      fs.promises.writeFile(
        paths.json,
        JSON.stringify(formattedJSON, null, 4),
        "utf-8"
      );
    });
  }
}
