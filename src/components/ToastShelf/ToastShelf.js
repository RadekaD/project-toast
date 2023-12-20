import React from "react";

import Toast from "../Toast";
import styles from "./ToastShelf.module.css";

import { ToastContext } from "../ToastProvider/ToastProvider";

function ToastShelf({ toastArr }) {
  const { setToastArr } = React.useContext(ToastContext);

  React.useEffect(() => {
    function handleKeyDown(event) {
      if (event.key === "Escape") {
        toastArr.forEach((_, index) => {
          setToastArr([]);
        });
      }
    }

    window.addEventListener("keydown", handleKeyDown);

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [toastArr]);

  return (
    <ol className={styles.wrapper}>
      {toastArr.map((toast, index) => {
        return (
          <li key={toast.id} className={styles.toastWrapper}>
            <Toast variant={toast.variant} index={index}>
              {toast.message}
            </Toast>
          </li>
        );
      })}
    </ol>
  );
}

export default ToastShelf;
