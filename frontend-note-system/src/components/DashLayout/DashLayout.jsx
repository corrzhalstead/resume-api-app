import { Outlet } from "react-router-dom";
import styles from "./DashLayout.module.css";

export function DashLayout() {
  return (
    <>
      <div className={styles["dash-container"]}>
        <Outlet />
      </div>
    </>
  );
}
