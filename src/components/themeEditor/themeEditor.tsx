import useTheme from '../../store/ThemeProvider';
import classnames from './style.module.css';

type Props = {
  close: () => void
}

const ThemeEditor = ({close}: Props) => {
  
  const {
    evenRowColor,
    setEvenRowColor,
    evenRowBackgroundColor,
    setEvenRowBackgroundColor,
    oddRowColor,
    setOddRowColor,
    oddRowBackgroundColor,
    setOddRowBackgroundColor,
    evenCellColor,
    setEvenCellColor,
    evenCellBackgroundColor,
    setEvenCellBackgroundColor,
    oddCellColor,
    setOddCellColor,
    oddCellBackgroundColor,
    setOddCellBackgroundColor
  } = useTheme();
  return (
    <div className={classnames['modal-container']}>
      <div className={classnames['theme-editor-container']}>
        <div className={classnames['theme-editor-header']}>
          <span>change table theme</span>
        </div>
        <div className={classnames['close-button-container']}>
          <button onClick={close}>X</button>
        </div>
        <div className={classnames['theme-editor']}>
          <ul className={classnames['theme-editor-ul']}>
            <li className={classnames['theme-editor-li']}>
              <div className={classnames['theme-editor-item']}>
                <div className={classnames['left-side']}>
                  <span>Even Rows:</span>
                </div>
                <div className={classnames['right-side']}>
                  <div className={classnames['single-setting']}>
                    <span className={classnames['setting-name']}>color</span>
                    <input type="color" value={evenRowColor || "#000000"}  onChange={(e) => setEvenRowColor(e.target.value)}/>
                  </div>
                  <div className={classnames['single-setting']}>
                    <span className={classnames['setting-name']}>background-color</span>
                    <input type="color" value={evenRowBackgroundColor || "#ffffff"} onChange={(e) => setEvenRowBackgroundColor(e.target.value)}/>
                  </div>
                </div>
              </div>
            </li>
            <li className={classnames['theme-editor-li']}>
              <div className={classnames['theme-editor-item']}>
                <div className={classnames['left-side']}>
                  <span>Odd Rows</span>
                </div>
                <div className={classnames['right-side']}>
                  <div className={classnames['single-setting']}>
                    <span className={classnames['setting-name']}>color</span>
                    <input type="color" value={oddRowColor || "#000000"} onChange={(e) => setOddRowColor(e.target.value)}/>
                  </div>
                  <div className={classnames['single-setting']}>
                    <span className={classnames['setting-name']}>background-color</span>
                    <input type="color" value={oddRowBackgroundColor || "#ffffff"} onChange={(e) => setOddRowBackgroundColor(e.target.value)} />
                  </div>
                </div>
              </div>
            </li>
            <li className={classnames['theme-editor-li']}>
              <div className={classnames['theme-editor-item']}>
                <div className={classnames['left-side']}>
                  <span>Even cell rows</span>
                </div>
                <div className={classnames['right-side']}>
                  <div className={classnames['single-setting']}>
                    <span className={classnames['setting-name']}>color</span>
                    <input type="color" value={evenCellColor || "#000000"} onChange={(e) => setEvenCellColor(e.target.value)} />
                  </div>
                  <div className={classnames['single-setting']}>
                    <span className={classnames['setting-name']}>background-color</span>
                    <input type="color" value={evenCellBackgroundColor || "#ffffff"} onChange={(e) => setEvenCellBackgroundColor(e.target.value)}/>
                  </div>
                </div>
              </div>
            </li>
            <li className={classnames['theme-editor-li']}>
              <div className={classnames['theme-editor-item']}>
                <div className={classnames['left-side']}>
                  <span>Odd cel values</span>
                </div>
                <div className={classnames['right-side']}>
                  <div className={classnames['single-setting']}>
                    <span className={classnames['setting-name']}>color</span>
                    <input type="color" value={oddCellColor || "#000000"} onChange={(e) => setOddCellColor(e.target.value)}/>
                  </div>
                  <div className={classnames['single-setting']}>
                    <span className={classnames['setting-name']}>background-color</span>
                    <input type="color" value={oddCellBackgroundColor || "#ffffff"} onChange={(e) => setOddCellBackgroundColor(e.target.value)} />
                  </div>
                </div>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </div>
  )
}

export default ThemeEditor