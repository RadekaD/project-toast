import React from "react";

//components
import Button from "../Button";
import Toast from "../Toast";
import ToastShelf from "../ToastShelf/ToastShelf";

import styles from "./ToastPlayground.module.css";

import { v4 as uuidv4 } from "uuid";

const VARIANT_OPTIONS = ["notice", "warning", "success", "error"];

function ToastPlayground() {
  const [toastVariant, setToastVariant] = React.useState("notice");
  const [message, setMessage] = React.useState("");
  const [isToastVisible, setIsToastVisible] = React.useState(false);
  const [toastArr, setToastArr] = React.useState([]);

  const removeToast = (index) => {
    setToastArr(toastArr.filter((_, toastIndex) => toastIndex !== index))
  }

  return (
    <div className={styles.wrapper}>
      <header>
        <img alt="Cute toast mascot" src="/toast.png" />
        <h1>Toast Playground</h1>
      </header>

      {isToastVisible && <ToastShelf toastArr={toastArr} removeToast={removeToast} />}

      <form
        onSubmit={(event) => {
          event.preventDefault();
          setIsToastVisible(true);
          setToastArr([
            ...toastArr,
            { id: uuidv4(), variant: toastVariant, message },
          ]);
          setMessage("");
          setToastVariant("notice");
        }}
      >
        <div className={styles.controlsWrapper}>
          <div className={styles.row}>
            <label
              htmlFor="message"
              className={styles.label}
              style={{ alignSelf: "baseline" }}
            >
              Message
            </label>
            <div className={styles.inputWrapper}>
              <textarea
                id="message"
                className={styles.messageInput}
                value={message}
                onChange={(event) => {
                  setMessage(event.target.value);
                }}
              />
            </div>
          </div>

          <div className={styles.row}>
            <div className={styles.label}>Variant</div>
            <div className={`${styles.inputWrapper} ${styles.radioWrapper}`}>
              {VARIANT_OPTIONS.map((variant) => {
                return (
                  <label key={variant} htmlFor={`variant-${variant}`}>
                    <input
                      id={`variant-${variant}`}
                      type="radio"
                      name="variant"
                      value={variant}
                      checked={toastVariant === variant}
                      onChange={() => setToastVariant(variant)}
                    />
                    {variant}
                  </label>
                );
              })}
            </div>
          </div>

          <div className={styles.row}>
            <div className={styles.label} />
            <div className={`${styles.inputWrapper} ${styles.radioWrapper}`}>
              <Button>Pop Toast!</Button>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
}

export default ToastPlayground;
