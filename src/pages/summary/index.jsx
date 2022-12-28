import React from "react";
import { FcOk } from "react-icons/fc";
import usePayment from "../../context/payment/hooks/usePayment";
import styles from "./styles.module.scss";

function Summary() {
  const [paymentDetails] = usePayment();
  const { cardNumber, cardHolder, expDate, cvv } = paymentDetails;

  return (
    <div className={styles.container}>
      <div className={styles.summary}>
        <div className={styles.summary__logo}>
          <FcOk size={80} />
        </div>
        <h1 className={styles.summary__text}>
          We have received your payment details
        </h1>
        <div className={styles.summary__details}>
          <div className={styles.summary__detailItem}>
            <p className={styles.summary__detailItemLabel}>Card Number:</p>
            <p className={styles.summary__detailItemValue}>{cardNumber}</p>
          </div>
          <div className={styles.summary__detailItem}>
            <p className={styles.summary__detailItemLabel}>Card Holder:</p>
            <p className={styles.summary__detailItemValue}>{cardHolder}</p>
          </div>
          <div className={styles.summary__detailItem}>
            <p className={styles.summary__detailItemLabel}>Expiration Date:</p>
            <p className={styles.summary__detailItemValue}>{expDate}</p>
          </div>
          <div className={styles.summary__detailItem}>
            <p className={styles.summary__detailItemLabel}>CVV:</p>
            <p className={styles.summary__detailItemValue}>{cvv}</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Summary;
