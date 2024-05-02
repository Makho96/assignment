import { PropsWithChildren, createContext, useContext, useState } from "react";

type ThemeType = {
  evenRowColor: string | undefined;
  setEvenRowColor: (value: string) => void;
  evenRowBackgroundColor: string | undefined;
  setEvenRowBackgroundColor: (value: string) => void;
  oddRowColor: string | undefined;
  setOddRowColor: (value: string) => void;
  oddRowBackgroundColor: string | undefined;
  setOddRowBackgroundColor: (value: string) => void;
  evenCellBackgroundColor: string | undefined;
  setEvenCellBackgroundColor: (value: string) => void;
  evenCellColor: string | undefined;
  setEvenCellColor: (value: string) => void;
  oddCellColor: string | undefined;
  setOddCellColor: (value: string) => void;
  oddCellBackgroundColor: string | undefined;
  setOddCellBackgroundColor: (value: string) => void;
}

const ThemeContext = createContext<ThemeType | null>(null);

export const ThemeProvider = ({children}: PropsWithChildren) => {
  const [evenRowColor, setEvenRowColor] = useState<string | undefined>(undefined)
  const [evenRowBackgroundColor, setEvenRowBackgroundColor] = useState<string | undefined>(undefined)
  const [oddRowColor, setOddRowColor] = useState<string | undefined>(undefined)
  const [oddRowBackgroundColor, setOddRowBackgroundColor] = useState<string | undefined>(undefined)
  const [evenCellColor, setEvenCellColor] = useState<string | undefined>(undefined)
  const [evenCellBackgroundColor, setEvenCellBackgroundColor] = useState<string | undefined>(undefined)
  const [oddCellColor, setOddCellColor] = useState<string | undefined>(undefined)
  const [oddCellBackgroundColor, setOddCellBackgroundColor] = useState<string | undefined>(undefined)
  return (
    <ThemeContext.Provider value={{
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
    }}>
      {children}
    </ThemeContext.Provider>
  )
}

const useTheme = () => useContext(ThemeContext) as ThemeType;

export default useTheme;