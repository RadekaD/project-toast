import React from "react";

import { ToastContext } from "../components/ToastProvider/ToastProvider";

export default function useEscapeKey(callback) {
  React.useEffect(() => {
    function handleEsc(event) {
      if (event.key === "Escape") {
        callback();
      }
    }

    window.addEventListener("keydown", handleEsc);

    return () => {
      window.removeEventListener("keydown", handleEsc);
    };
  }, [callback]);
}
