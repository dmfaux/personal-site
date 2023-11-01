"use client";

import { type } from "os";
import React, { useEffect, useState, createContext, useContext } from "react";

const themes = ["sunrise", "sunset", "midnight", "midday"] as const;

export type Theme = (typeof themes)[number];

type ThemeContextProviderProps = {
  children: React.ReactNode;
};

type ThemeContextType = {
  theme: Theme;
  changeTheme: (theme: Theme) => void;
};

const ThemeContext = createContext<ThemeContextType | null>(null);

let storedTheme: Theme | null = null;

if (typeof window !== "undefined") {
  storedTheme = window?.localStorage
    ? (window.localStorage?.getItem("theme") as Theme | null)
    : null;
}

export default function ThemeContextProvider({
  children,
}: ThemeContextProviderProps) {
  if (!themes.includes(storedTheme as Theme)) storedTheme = null;

  const [theme, setTheme] = useState<Theme>(storedTheme || "sunrise");

  const changeTheme = (theme: Theme) => {
    if (themes.includes(theme)) {
      window.localStorage.setItem("theme", theme);
      setTheme(theme);
    }
  };

  useEffect(() => {
    if (typeof window === "undefined") return;

    const localTheme = window.localStorage.getItem("theme") as Theme | null;

    if (localTheme) {
      setTheme(localTheme);
    } else if (window.matchMedia("(prefers-color-scheme: dark)").matches) {
      setTheme("midnight");
    }
  }, []);

  return (
    <ThemeContext.Provider
      value={{
        theme,
        changeTheme,
      }}
    >
      {children}
    </ThemeContext.Provider>
  );
}

export function useTheme(): ThemeContextType {
  const context = useContext(ThemeContext);

  if (context === null) {
    throw new Error("useTheme to be used within the ThemeContextProvider");
  }

  return context;
}
