import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { MotionConfig } from "motion/react";
import { CartProvider } from "./context/CartContext";
import "./index.css";
import App from "./App.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <MotionConfig reducedMotion="user">
      <CartProvider>
        <App />
      </CartProvider>
    </MotionConfig>
  </StrictMode>,
);
