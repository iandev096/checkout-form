import React from "react";
import styles from "./styles.module.scss";

function Button({ children, className = "", ...props }) {
  return (
    <button className={`${styles.button} ${className}`} {...props}>
      {children}
    </button>
  );
}

export default Button;
