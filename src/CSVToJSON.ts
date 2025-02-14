import { parse } from "csv-parse/sync";

type CSVToJSONResult = Record<string, string>[];

export const CSVToJSON = (csvString: string): CSVToJSONResult => {
  const records = parse(csvString, {
    columns: true,
    skip_empty_lines: true,
    trim: true,
  });

  return records as CSVToJSONResult;
};
