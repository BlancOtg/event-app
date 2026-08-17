import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import Root from "./Root.jsx";
import { ToastContainer, Bounce } from "react-toastify";
import { AuthProvider } from "./providers/AuthProvider.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <ToastContainer
      position="top-right"
      autoClose={5000}
      hideProgressBar={false}
      newestOnTop={false}
      closeOnClick={false}
      rtl={false}
      pauseOnFocusLoss
      draggable
      pauseOnHover
      theme="light"
      transition={Bounce}
    />
    <AuthProvider>
      <Root />
    </AuthProvider>
  </StrictMode>,
);
