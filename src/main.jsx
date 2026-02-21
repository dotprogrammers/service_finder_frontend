import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";

// Keep CSS in index.html as template does, to preserve exact ordering.
// If you prefer, you can import css here later.

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
