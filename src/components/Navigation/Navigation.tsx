import ThemePicker from "../ThemePicker/ThemePicker";
import { useTheme } from "@/contexts/ThemeContext";
import { Source_Code_Pro } from "next/font/google";
import styles from "./Navigation.module.css";
import { classes } from "@/tools";

const SourceCodePro = Source_Code_Pro({ weight: "400", subsets: ["latin"] });

export const links = [
  {
    name: "home",
    hash: "home",
    route: null,
  },
  {
    name: "aboutMe",
    hash: "aboutMe",
    route: null,
  },
  {
    name: "projects",
    hash: "projects",
    route: null,
  },
  {
    name: "blog",
    hash: "blog",
    route: "/blog",
  },
] as const;

const handleClickScroll = (id: string) => {
  const element = document.getElementById(id);
  if (element) {
    element.scrollIntoView({ behavior: "smooth" });
  }
};

const Navigation: React.FC = () => {
  const { theme } = useTheme();

  return (
    <div
      className={`flex fixed items-center bg-white/90 p-2 flex-col w-full md:flex-row md:mt-4 md:shadow-md md:rounded-xl md:px-4 md:max-w-4xl backdrop-blur-sm z-50 ${styles[theme]}`}
    >
      <nav className={`flex items-center gap-6 justify-start w-full`}>
        {links.map((link) => (
          <a
            key={link.hash}
            className={classes(styles.link, SourceCodePro.className)}
            onClick={() => handleClickScroll(link.hash)}
          >
            {link.name}
          </a>
        ))}
      </nav>
      <ThemePicker />
    </div>
  );
};

export default Navigation;
