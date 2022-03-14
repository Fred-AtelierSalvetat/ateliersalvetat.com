import Header from "./Header";
import Footer from "./Footer";
import styles from "./layout.module.scss";

export default function Layout({ children }) {
  return (
    <div className={styles.layout}>
      <Header />
      <div className={styles.main}>{children}</div>
      <Footer />
    </div>
  );
}
