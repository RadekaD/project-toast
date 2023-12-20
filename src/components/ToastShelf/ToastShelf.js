import React from "react";

import Toast from "../Toast";
import styles from "./ToastShelf.module.css";

//context
import { ToastContext } from "../ToastProvider/ToastProvider";

//hooks
import useEscapeKey from "../../hooks/useEscapeKey";

function ToastShelf({ toastArr }) {
  const { setToastArr } = React.useContext(ToastContext);

  useEscapeKey(() => {
    setToastArr([]);
  })

  return (
    <ol
      role="region"
      aria-live="polite"
      aria-label="Notification"
      className={styles.wrapper}
    >
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
