import { useContext } from "react";
import { PaymentContext } from "../index";

export default function usePayment() {
  const { state, setState } = useContext(PaymentContext);
  return [state, setState];
}
