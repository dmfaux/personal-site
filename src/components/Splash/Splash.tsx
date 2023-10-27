import Image from "next/image";
import { Source_Code_Pro } from "next/font/google";
import { FaLinkedin, FaGithub } from "react-icons/fa";

import { useTheme } from "@/contexts/ThemeContext";
import styles from "./Splash.module.css";
import { classes } from "@/tools";

const SourceCodePro = Source_Code_Pro({ weight: "400", subsets: ["latin"] });

const Splash: React.FC = () => {
  const { theme } = useTheme();

  return (
    <section id="home">
      <div className={classes(styles["splash-container"], styles[theme])}>
        <h1 className={classes(styles.heading, SourceCodePro.className)}>
          Hi, I am a Software Development Manager &amp; Full Stack Developer
          from Johannesburg South Africa 🇿🇦
        </h1>
        <p className={styles.contact}>
          You can contact me on{" "}
          <a
            className={classes(styles.link, styles["link-blue"])}
            href="https://www.linkedin.com/in/dfaux"
            target="_blank"
          >
            LinkedIn <FaLinkedin className={styles.icon} />
          </a>{" "}
          or follow me on{" "}
          <a
            className={classes(styles.link, styles["link-purple"])}
            href="https://github.com/dmfaux"
            target="_blank"
          >
            Github <FaGithub className={styles.icon} />
          </a>
        </p>
      </div>

      <Image
        src={"/assets/me.png"}
        width={613}
        height={800}
        className={styles["splash-image"]}
        alt="David Faux"
        priority={true}
        quality={95}
      />
    </section>
  );
};

export default Splash;
