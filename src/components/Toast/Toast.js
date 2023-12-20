import React from "react";
import {
  AlertOctagon,
  AlertTriangle,
  CheckCircle,
  Info,
  X,
} from "react-feather";

import VisuallyHidden from "../VisuallyHidden";

import styles from "./Toast.module.css";

//context
import { ToastContext } from "../ToastProvider/ToastProvider";

const ICONS_BY_VARIANT = {
  notice: Info,
  warning: AlertTriangle,
  success: CheckCircle,
  error: AlertOctagon,
};

const Icon = ({ variant }) => {
  const IconComponent = ICONS_BY_VARIANT[variant];
  return <IconComponent />;
};

function Toast({ variant, children, index }) {
  const { removeToast } = React.useContext(ToastContext);

  return (
    <div className={`${styles.toast} ${styles[variant]}`}>
      <div className={styles.iconContainer}>
        <Icon variant={variant} />
      </div>
      <p className={styles.content}>
        <VisuallyHidden>{variant}-</VisuallyHidden>
        {children}
      </p>
      <button
        aria-label="Dismiss message"
        aria-live="off"
        className={styles.closeButton}
        onClick={() => {
          removeToast(index);
        }}
      >
        <X size={24} />
      </button>
    </div>
  );
}

export default Toast;
