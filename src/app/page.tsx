"use client";

import Backdrop from "@/components/Backdrop/Backdrop";
import Projects from "@/components/Projects/Projects";
import AboutMe from "@/components/AboutMe/AboutMe";
import Divider from "@/components/Divider/Divider";
import { useTheme } from "@/contexts/ThemeContext";
import Splash from "@/components/Splash/Splash";
import Footer from "@/components/Footer/Footer";

export default function Home() {
  const { theme } = useTheme();

  return (
    <Backdrop>
      <div
        data-theme={theme}
        className="h-full w-full flex flex-col items-center"
      >
        <div className="flex flex-col items-center min-h-full overflow-x-hidden overflow-y-auto w-full md:w-11/12 lg:8/12 max-w-[1600px] scrollbar-hide">
          <Splash />
          <Divider />
          <AboutMe />
          <Divider />
          <Projects />
          <Footer />
        </div>
      </div>
    </Backdrop>
  );
}
