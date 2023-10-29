import styles from "./Footer.module.css";
const Footer = () => {
  return (
    <div className={styles.footer}>
      &copy; {new Date().getFullYear()} davidfaux.com
    </div>
  );
};

export default Footer;
