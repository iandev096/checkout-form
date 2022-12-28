import React, { useReducer } from "react";
import { useNavigate } from "react-router-dom";
import usePayment from "../../context/payment/hooks/usePayment";
import Button from "../Button";
import TextField from "../TextField";
import styles from "./styles.module.scss";

const initialState = {
  cardNumber: "",
  cardHolder: "",
  expDate: "",
  cvv: "",
};

function reducer(state, action) {
  switch (action.type) {
    case "SET":
      const { field, value } = action.payload;
      return { ...state, [field]: value };

    default:
      return state;
  }
}

function Form() {
  const [state, dispatch] = useReducer(reducer, initialState);
  const { cardNumber, cardHolder, expDate, cvv } = state;
  const enabled = cardNumber && cardHolder && expDate && cvv;
  const [_, setPaymentDetails] = usePayment();
  const navigate = useNavigate();

  const handleChange = (field, value) => {
    dispatch({ type: "SET", payload: { value, field } });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setPaymentDetails(state);
    navigate("/summary");
  };

  return (
    <form className={styles.form} onSubmit={handleSubmit}>
      <TextField
        label="Card Number"
        value={cardNumber}
        onChange={(e) => handleChange("cardNumber", e.target.value)}
      />
      <TextField
        label="Card Holder"
        value={cardHolder}
        onChange={(e) => handleChange("cardHolder", e.target.value)}
      />
      <div className={styles.form__horizontalGroup}>
        <TextField
          label="Expiration Date"
          value={expDate}
          onChange={(e) => handleChange("expDate", e.target.value)}
        />
        <TextField
          label="CVV"
          value={cvv}
          onChange={(e) => handleChange("cvv", e.target.value)}
        />
      </div>
      <Button disabled={!enabled} className={styles.form__submit} type="submit">
        SUBMIT
      </Button>
    </form>
  );
}

export default Form;
