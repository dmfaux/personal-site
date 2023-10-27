import { ReactNode } from "react";
import styles from "./Paragraph.module.css";

const Paragraph: React.FC<{ children: ReactNode }> = ({ children }) => {
  return <p className={styles.paragraph}> {children} </p>;
};

export default Paragraph;
