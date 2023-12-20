import React from "react";
import Toast from "../Toast/Toast";

export const ToastContext = React.createContext();

function ToastProvider({ children }) {
  const [toastVariant, setToastVariant] = React.useState("notice");
  const [message, setMessage] = React.useState("");
  const [isToastVisible, setIsToastVisible] = React.useState(false);
  const [toastArr, setToastArr] = React.useState([]);

  const removeToast = (index) => {
    setToastArr(toastArr.filter((_, toastIndex) => toastIndex !== index));
  };

  return (
    <ToastContext.Provider
      value={{
        toastVariant,
        setToastVariant,
        message,
        setMessage,
        isToastVisible,
        setIsToastVisible,
        toastArr,
        setToastArr,
        removeToast,
      }}
    >
      {children}
    </ToastContext.Provider>
  );
}

export default ToastProvider;
