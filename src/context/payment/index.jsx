import { createContext, useState } from "react";

const initialState = {
  cardNumber: "",
  cardHolder: "",
  expDate: "",
  cvv: "",
};

const paymentCtxState = {
  state: initialState,
  setState: (values) => {},
};

export const PaymentContext = createContext(paymentCtxState);

export default function PaymentProvider({ children }) {
  const [state, setState] = useState(initialState);

  return (
    <PaymentContext.Provider value={{ state, setState }}>
      {children}
    </PaymentContext.Provider>
  );
}
