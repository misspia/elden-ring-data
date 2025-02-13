/**
 * Taken from
 * https://stackoverflow.com/a/27979069
 */

export const CSVToJSON = (csv: string) => {
  var lines = csv.split("\n");

  var result = [];

  // NOTE: If your columns contain commas in their values, you'll need
  // to deal with those before doing the next step
  // (you might convert them to &&& or something, then covert them back later)
  // jsfiddle showing the issue https://jsfiddle.net/
  var headers = lines[0].split(",");

  for (var i = 1; i < lines.length; i++) {
    const obj: Record<string, string> = {};
    const currentLine = lines[i].split(",");

    for (let j = 0; j < headers.length; j++) {
      const value =
        j === currentLine.length - 1
          ? currentLine[j].replace("\r", "")
          : currentLine[j];
      obj[headers[j]] = value;
    }

    result.push(obj);
  }

  return result; //JavaScript object
};
