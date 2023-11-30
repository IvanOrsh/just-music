"use client";

import { PropsWithChildren, createContext, useMemo, useState } from "react";

export const NavContext = createContext({});

export default function NavContextProvider({ children }: PropsWithChildren) {
  const [isOpen, setIsOpen] = useState(false);

  const value = useMemo(() => ({ isOpen, setIsOpen }), [isOpen]);

  return <NavContext.Provider value={value}>{children}</NavContext.Provider>;
}
