import React from "react";
import { FiCheck } from "react-icons/fi";
import { SiDgraph } from "react-icons/si";
import styles from "./styles.module.scss";

function Info() {
  return (
    <div className={styles.Info}>
      <div className={styles.Info__logo}>
        <SiDgraph size={72} color="#457B9D" />
      </div>
      <h2 className={styles.Info__title}>Premium Package</h2>
      <p className={styles.Info__price}>
        <span className={styles.Info__currency}>GHS</span>
        <span className={styles.Info__value}>59.99</span>
        <span className={styles.Info__rate}>/mo</span>
      </p>
      <ul className={styles.Info__features}>
        <li className={styles.Info__feature}>
          <FiCheck />
          <span>10 maximum users Allowed</span>
        </li>
        <li className={styles.Info__feature}>
          <FiCheck />
          <span>10000 searches Allowed</span>
        </li>
        <li className={styles.Info__feature}>
          <FiCheck />
          <span>200 iterations Allowed</span>
        </li>
      </ul>
    </div>
  );
}

export default Info;
