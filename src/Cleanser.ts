import * as fs from "fs";
import { DBFilesMap } from "@/types/files";
import { CSVToJSON } from "@/CSVToJSON";

export class Cleanser {
  public DBfilesMap: DBFilesMap;

  constructor(DBfilesMap: DBFilesMap) {
    this.DBfilesMap = DBfilesMap;
  }

  readCSV(path: string): string {
    return fs
      .readFileSync(path, { encoding: "utf8" })
      .trim()
      .replace(/^\uFEFF/, "");
    // return fs.readFileSync(path).toString();
  }

  convertToJSON() {}

  format() {}

  cleanse() {
    this.DBfilesMap.forEach(({ formatter, ...paths }) => {
      const csv = this.readCSV(paths.csv);
      const unformattedJSON = CSVToJSON(csv);
      const formattedJSON = formatter(unformattedJSON);
      fs.promises.writeFile(
        paths.json,
        JSON.stringify(formattedJSON, null, 4),
        "utf-8"
      );
      // const unformattedJSON = CSVToJSON(strCSV);
      // const formattedJSON = formatter(unformattedJSON);
      // fs.promises.writeFile(
      //   paths.json,
      //   JSON.stringify(formattedJSON, null, 4),
      //   "utf-8"
      // );
      // CSVToJSON(strCSV).then((unformattedJSON) => {
      //       const csv = `NPC ID 1,NPC ID 2,NPC ID 3,NPC ID (Phase 2),NPC ID (HP),SpEffect ID,SpEffect ID (NG+),Encounter Name,Encounter HP,Runes,Actual Name 1,Name 1,HP,Defense,Standard Negation,Slash Negation,Strike Negation,Pierce Negation,Magic Negation,Fire Negation,Lightning Negation,Holy Negation,Poison,Rot,Blood,Frost,Sleep,Madness,Death Blight,Poise,Actual Name 2,Name 2,HP,Defense,Standard Negation,Slash Negation,Strike Negation,Pierce Negation,Magic Negation,Fire Negation,Lightning Negation,Holy Negation,Poison,Rot,Blood,Frost,Sleep,Madness,Death Blight,Poise,Actual Name 3,Name 3,HP,Defense,Standard Negation,Slash Negation,Strike Negation,Pierce Negation,Magic Negation,Fire Negation,Lightning Negation,Holy Negation,Poison,Rot,Blood,Frost,Sleep,Madness,Death Blight,Poise,Actual Name (Phase 2),HP,Defense,Standard Negation,Slash Negation,Strike Negation,Pierce Negation,Magic Negation,Fire Negation,Lightning Negation,Holy Negation,Poison,Rot,Blood,Frost,Sleep,Madness,Death Blight,Poise,Region,Location,Nearest Grace,Only Spawns at Night
      // 43113906,-,-,-,-,7000,7400,Soldier of Godrick,384,400,Soldier of Godrick,Soldier of Godrick,384,100,0,10,0,-10,0,0,-20,0,168,168,224,224,224,IMMUNE,IMMUNE,15,-,-,-,-,-,-,-,-,-,-,-,-,-,-,-,-,-,-,-,-,-,-,-,-,-,-,-,-,-,-,-,-,-,-,-,-,-,-,-,-,-,-,-,-,-,-,-,-,-,-,-,-,-,-,-,-,-,-,-,Limgrave,Cave of Knowledge,Cave of Knowledge,No`;
      //       const json = CSVToJSON(csv);
      //       console.log(csv, json);
      //       fs.promises.writeFile(paths.json, JSON.stringify(json, null, 4), "utf-8");
    });
  }
}
