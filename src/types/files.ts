export type JSONFormatter<UnformattedJSON, FormattedJSON> = (
  unformattedJSON: UnformattedJSON,
) => FormattedJSON;

type DBFileMapItem<UnformattedJSON = any, FormattedJSON = any> = {
  csv: string;
  json: string;
  formatter: JSONFormatter<UnformattedJSON, FormattedJSON>;
};

export type DBFilesMap = DBFileMapItem[];
