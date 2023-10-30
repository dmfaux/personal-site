"use client";

import ThemeContextProvider, { useTheme } from "@/contexts/ThemeContext";
import Navigation from "./Navigation/Navigation";
import Backdrop from "./Backdrop/Backdrop";

type LayoutProps = {
  children: React.ReactNode;
};

const Template = ({ children }: LayoutProps) => {
  const { theme } = useTheme();
  return (
    <Backdrop>
      <div data-theme={theme} className="flex flex-col items-center">
        <Navigation />
        {children}
      </div>
    </Backdrop>
  );
};

export default Template;
