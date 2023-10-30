"use client";

import { useTheme } from "@/contexts/ThemeContext";
import Navigation from "./Navigation/Navigation";
import Backdrop from "./Backdrop/Backdrop";
import Footer from "./Footer/Footer";
import Splash from "./Splash/Splash";

type LayoutProps = {
  children: React.ReactNode;
};

const Template = ({ children }: LayoutProps) => {
  const { theme } = useTheme();
  return (
    <Backdrop>
      <div
        data-theme={theme}
        className="flex flex-col items-center max-w-7xl h-full overflow-y-auto scrollbar-hide"
      >
        <Navigation />
        <div className="mt-32 flex-grow">{children}</div>
        <Footer />
        <Splash />
      </div>
    </Backdrop>
  );
};

export default Template;
