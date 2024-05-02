import { singleSheetData } from "../../../types";
import classnames from './style.module.css';
import useTheme from "../../../store/ThemeProvider";
import { CSSProperties } from "react";

const columnNames = 'abcdefghijklmnopqrstuvwxyz'.split('').map((c) => c.toUpperCase())

type Props = {
  data: singleSheetData,
  sheetTitle: string,
}

const SingleShteet = ({data, sheetTitle}: Props) => {
  const {
    oddRowColor,
    oddRowBackgroundColor,
    evenRowColor,
    evenRowBackgroundColor,
    oddCellColor,
    oddCellBackgroundColor,
    evenCellColor,
    evenCellBackgroundColor
  } = useTheme();
  const columnNumber = Math.max(...data.map(item => item.length))
  return (
    <div className={classnames["single-sheet"]}>
      <div className={classnames["sheet-title"]}>
        {sheetTitle}
      </div>
      <div className={classnames['header']}>
        <ul className={classnames['header-ul']}>
          {Array.from(new Array(columnNumber)).map((_, index) => {
            return <li key={columnNames[index]}><div>{columnNames[index]}</div></li>
          })}
          <li><div>sum</div></li>
        </ul>
      </div>
      <div className={classnames['sheet-body']}>
        <ul className={classnames['sheet-body-ul']}>
          {data.map((row, rowIndex) => {
            const sum = row.reduce((a, b) => a + b, 0)
            return (
              <li key={`row_${rowIndex}`}>
                <div className={classnames['row-items']}>
                  {row.map((value, index) => {
                    return (
                      <div 
                        className={classnames['row-item']}
                        key={`${value}_${index}`}
                        style={{
                          color: value % 2 === 1 ? oddCellColor : evenCellColor,
                          backgroundColor: value % 2 === 1 ? oddCellBackgroundColor: evenCellBackgroundColor,
                          "--rowColor": (rowIndex + 1) % 2 === 1 ? oddRowColor : evenRowColor,
                          "--rowBackgroundColor": (rowIndex + 1) % 2 === 1 ? oddRowBackgroundColor: evenRowBackgroundColor
                        } as CSSProperties}
                      >
                        {value}
                      </div>
                    )
                  })}
                  <div className={classnames['row-item']}>{sum}</div>
                </div>
              </li>
            ) 
          })}
        </ul>
      </div>
    </div>
  )
}

export default SingleShteet;