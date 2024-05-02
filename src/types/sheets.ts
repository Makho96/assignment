export type singleSheetData = number[][];

export type Sheets = {
  [key: string]: singleSheetData
}

export type SheetData = {
  title: string,
  active: boolean,
  data: singleSheetData,
}