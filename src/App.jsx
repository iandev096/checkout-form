import { useState } from "react";
import Checkout from "./pages/checkout";
import Summary from "./pages/summary";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import PaymentProvider from "./context/payment";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Checkout />,
  },
  {
    path: "summary",
    element: <Summary />,
  },
]);

function App() {
  return (
    <PaymentProvider>
      <RouterProvider router={router} />;
    </PaymentProvider>
  );
}

export default App;
