import classnames from './style.module.css';
import { SheetData } from '../../../types';
type Props = {
  data: SheetData[];
  handleSheetClick: (index: number) => void;
}

const SheetList = ({data, handleSheetClick}: Props) => {
  return (
    <div className={classnames['sheet-list']}>
      <ul className={classnames['sheet-list-ul']}>
        {data.map((item, index) => {
          return (
            <li
              key={`${item}_${index}`} 
              onClick={() => handleSheetClick(index)}
              className={classnames['sheet-list-li']}
            >
              <div className={`${classnames['sheet-item']} ${item.active ? classnames['active'] : ''}`}>
                {item.title}
              </div>
            </li>
          )
        })}
      </ul>
    </div>
  )
}

export default SheetList;