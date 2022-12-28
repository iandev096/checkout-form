import React from "react";
import styles from "./styles.module.scss";

function TextField({ label, ...props }) {
  return (
    <div className={styles.textField}>
      <label className={styles.textField__label} htmlFor={label}>
        {label}
      </label>
      <input className={styles.textField__input} id={label} {...props} />
    </div>
  );
}

export default TextField;
