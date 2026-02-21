import React from "react";
import ReactDOM from "react-dom/client";
import { RouterProvider } from "react-router-dom";
import { router } from "./routes/router";
import "./index.css";
import { ConfigProvider } from "antd";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <ConfigProvider
      theme={{
        token: {
          colorPrimary: "#6AB33E",
        },

        components: {
          Table: {
            headerBg: "#6AB33E",
            headerColor: "#fff",
            cellFontSize: 14,
          },
          Input: {
            activeBorderColor: "#6AB33E",
            hoverBorderColor: "#6AB33E",
          },
        },
      }}
    >
      <RouterProvider router={router} />
    </ConfigProvider>
  </React.StrictMode>
);
