import React from "react";
import styles from "./styles.module.scss";
import Info from "./Info";
import Form from "./Form";

function CheckoutForm() {
  return (
    <div className={styles.checkoutForm}>
      <Info />
      <Form />
    </div>
  );
}

export default CheckoutForm;
