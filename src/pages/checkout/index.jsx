import React from "react";
import CheckoutForm from "../../components/CheckoutForm";
import styles from "./styles.module.scss";

function Checkout() {
  console.log("render");
  return (
    <div className={styles.checkoutPage}>
      <CheckoutForm />
    </div>
  );
}

export default Checkout;
