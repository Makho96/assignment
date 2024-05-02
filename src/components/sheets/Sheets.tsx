import { useCallback, useEffect, useState } from "react";
import type { Sheets as SheetType, SheetData } from "../../types";
import SheetList from "./sheetList/sheetList";
import SingleShteet from "./singleSheet/singleSheet";

import classnames from './style.module.css';
import ThemeEditor from "../themeEditor";

const Sheets = () => {
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState<SheetData[]>([])
  const [themeModalOpen, setThemeModalOpen] = useState(false);
  const fetchData = useCallback(async () => {
    setLoading(true);
    try {
      const result = await fetch('https://clinch-public-documents.s3.amazonaws.com/clinch-recruitment/spreadsheet.json')
      const data = await result.json();
      const parsedData = JSON.parse(data) as SheetType
      setData(Object.keys(parsedData).map(item => {
        return {
          title: item,
          active: false,
          data: parsedData[item]
        }
      }))
    } catch (error) {

    } finally {
      setLoading(false)
    }
  }, []);

  useEffect(() => {
    fetchData();
  }, [fetchData]);

  const handleSheetClick = useCallback((index: number) => {
    setData((prevState) => {
      return [...prevState.map((item, itemIndex) => {
        return {
          ...item,
          active: index === itemIndex ? !item.active : item.active
        }
      })]
    })
  }, []);

  
  if (loading) {
    return <p>loading...</p>
  }

  return (
    <>
      {
        <div className={classnames['main-container']}>
          <div className={classnames['sidebar-container']}>
            <div className={classnames["sheet-list-container"]}>
              <SheetList
                data={data}
                handleSheetClick={handleSheetClick}
              />
            </div>
            <div className={classnames["theme-button-container"]}>
              <button 
                className={themeModalOpen? classnames['active'] : ''} 
                onClick={() => setThemeModalOpen(true)}
              >
                  change theme
              </button>
            </div>
          </div>
          <div className={classnames['page-container']}>
            {data.filter(item => item.active).map((sheet, index) => {
              return (
                <div
                className={classnames['single-sheet-container']}
                key={`${sheet}_${index}`}
              >
                <SingleShteet data={sheet.data} sheetTitle={sheet.title}/>
              </div>
              )
            })}
          </div>
        </div>
      }
      {themeModalOpen && <ThemeEditor close={() => setThemeModalOpen(false)} />}
    </>
  )
}

export default Sheets;