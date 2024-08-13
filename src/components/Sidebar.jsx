import { Outlet } from "react-router-dom";
import AppNav from "./AppNav";
import Logo from "./Logo";

import styles from "./Sidebar.Module.css";

function Sidebar() {
  return (
    <div className={styles.sidebar}>
      <Logo />
      <AppNav />

      <Outlet />

      <footer className={styles.footer}>
        <p className={styles.copyright}>
          &copy; Copyright {new Date().getFullYear()}by WorldWise!
        </p>
      </footer>
    </div>
  );
}

export default Sidebar;
