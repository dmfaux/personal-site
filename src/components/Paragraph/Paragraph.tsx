import { ReactNode } from "react";
import styles from "./Paragraph.module.css";

const Paragraph: React.FC<{
  children: ReactNode;
  options?: {
    cutOff?: number;
  };
}> = ({ children, options }) => {
  const { cutOff } = options || {};

  if (cutOff && !!children && children?.toString()?.length > cutOff) {
    return (
      <p className={styles.paragraph}>
        {children?.toString().substring(0, cutOff)}
        {children?.toString()?.length > cutOff ? "..." : ""}
      </p>
    );
  }
  return <p className={styles.paragraph}> {children} </p>;
};

export default Paragraph;
