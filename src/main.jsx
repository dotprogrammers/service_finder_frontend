import React from "react";
import ReactDOM from "react-dom/client";
import { RouterProvider } from "react-router-dom";
import { router } from "./routes/router";
import "./index.css";
import { ConfigProvider } from "antd";
import { Provider } from "react-redux";
import { persistor, store } from "./redux/store";
import { PersistGate } from "redux-persist/integration/react";

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
          Button: {
            colorPrimary: "#6AB33E",
          },
        },
      }}
    >
      <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
          <RouterProvider router={router} />
        </PersistGate>
      </Provider>
    </ConfigProvider>
  </React.StrictMode>
);
