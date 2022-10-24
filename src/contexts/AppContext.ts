import { createContext } from "react";

export interface AppContextProps {
  track: number;
  prev: Function;
  next: Function;
  musicTime: number;
}

export const AppContext = createContext<AppContextProps>({
  track: 0,
  prev: () => {},
  next: () => {},
  musicTime: 0,
});
