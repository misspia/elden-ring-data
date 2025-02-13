export type JSONFormatter<UnformattedJSON, FormattedJSON> = (
  unformattedJSON: UnformattedJSON
) => FormattedJSON;

type FileMapItem<UnformattedJSON = any, FormattedJSON = any> = {
  csv: string;
  json: string;
  formatter: JSONFormatter<UnformattedJSON, FormattedJSON>;
};

export type FilesMap = FileMapItem[];
