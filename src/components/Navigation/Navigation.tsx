import ThemePicker from "../ThemePicker/ThemePicker";
import { useTheme } from "@/contexts/ThemeContext";
import { Source_Code_Pro } from "next/font/google";
import styles from "./Navigation.module.css";
import { classes } from "@/tools";
import Link from "next/link";

const SourceCodePro = Source_Code_Pro({ weight: "400", subsets: ["latin"] });

export const links = [
  {
    name: "home",
    route: "/",
  },
  {
    name: "aboutMe",
    route: "/about-me",
  },
  {
    name: "projects",
    route: "/projects",
  },
  {
    name: "blog",
    route: "/blog",
  },
] as const;

const Navigation: React.FC = () => {
  const { theme } = useTheme();

  return (
    <div
      className={`flex fixed items-center bg-white/90 p-2 flex-col w-full md:flex-row md:mt-4 md:shadow-md md:rounded-xl md:px-4 md:max-w-4xl backdrop-blur-sm z-50 ${styles[theme]}`}
    >
      <nav className={`flex items-center gap-6 justify-start w-full`}>
        {links.map((link) => (
          <Link
            key={link.name}
            href={link.route}
            className={classes(styles.link, SourceCodePro.className)}
          >
            {link.name}
          </Link>
        ))}
      </nav>
      <ThemePicker />
    </div>
  );
};

export default Navigation;
