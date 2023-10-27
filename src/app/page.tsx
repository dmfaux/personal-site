"use client";

import Navigation from "@/components/Navigation/Navigation";
import Backdrop from "@/components/Backdrop/Backdrop";
import Projects from "@/components/Projects/Projects";
import AboutMe from "@/components/AboutMe/AboutMe";
import Divider from "@/components/Divider/Divider";
import { useTheme } from "@/contexts/ThemeContext";
import Splash from "@/components/Splash/Splash";
import styles from "./page.module.css";

export default function Home() {
  const { theme } = useTheme();

  return (
    <Backdrop>
      <div data-theme={theme} className="flex">
        <div className={styles["site-container"]}>
          hello
          {/* <Navigation />
          <Splash />
          <Divider />
          <AboutMe />
          <Divider />
          <Projects />
          <Divider /> */}
        </div>
      </div>
    </Backdrop>
  );
}
