"use client";

import {
  PropsWithChildren,
  createContext,
  useMemo,
  useState,
  useContext,
} from "react";
import { boolean } from "zod";

interface NavContext {
  isOpen: boolean;
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

export const NavContext = createContext<NavContext>({
  isOpen: false,
  setIsOpen: () => {},
});

export default function NavContextProvider({ children }: PropsWithChildren) {
  const [isOpen, setIsOpen] = useState(false);

  const value = useMemo(() => ({ isOpen, setIsOpen }), [isOpen]);

  return <NavContext.Provider value={value}>{children}</NavContext.Provider>;
}

export const useNavContext = () => {
  return useContext(NavContext);
};
