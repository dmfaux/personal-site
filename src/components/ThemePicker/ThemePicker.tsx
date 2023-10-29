import { Theme, useTheme } from "@/contexts/ThemeContext";
import {
  WiSunrise,
  WiSunset,
  WiDaySunny,
  WiNightAltCloudy,
} from "react-icons/wi";

import styles from "./ThemePicker.module.css";

const ThemePicker: React.FC = () => {
  const { theme, changeTheme } = useTheme();

  const handleThemeChange = (theme: Theme) => {
    changeTheme(theme);
  };

  return (
    <div className="hidden md:flex">
      <button
        className={styles["theme-icon-btn"]}
        onClick={() => handleThemeChange("sunrise")}
      >
        <WiSunrise />
      </button>
      <button
        className={styles["theme-icon-btn"]}
        onClick={() => handleThemeChange("midday")}
      >
        <WiDaySunny />
      </button>
      <button
        className={styles["theme-icon-btn"]}
        onClick={() => handleThemeChange("sunset")}
      >
        <WiSunset />
      </button>
      <button
        className={styles["theme-icon-btn"]}
        onClick={() => handleThemeChange("midnight")}
      >
        <WiNightAltCloudy />
      </button>
    </div>
  );
};

export default ThemePicker;
