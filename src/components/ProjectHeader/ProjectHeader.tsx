import { Source_Code_Pro } from "next/font/google";

import styles from "./ProjectHeader.module.css";
import { classes } from "@/tools";

const SourceCodePro = Source_Code_Pro({ weight: "300", subsets: ["latin"] });

const ProjectHeader: React.FC<{ title: string }> = ({ title }) => {
  return (
    <div className={styles.container}>
      <div className={styles.bar}>
        <div className={classes(styles["bar-button"], styles.red)}></div>
        <div className={classes(styles["bar-button"], styles.yellow)}></div>
        <div className={classes(styles["bar-button"], styles.green)}></div>
      </div>

      <div className={styles["header-container"]}>
        <h3
          className={classes(styles["project-title"], SourceCodePro.className)}
        >
          cd ~/Code/projects/{title.split(" ").join("_")}
        </h3>
      </div>
    </div>
  );
};

export default ProjectHeader;
