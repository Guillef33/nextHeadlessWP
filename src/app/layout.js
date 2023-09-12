"use client";

import "./globals.css";
import Navbar from "./components/Navbar";
import { AuthContextProvider } from "./context/AuthContext";
import { store } from "./store/store";
import { Provider } from "react-redux";

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Provider store={store}>
          <AuthContextProvider>
            <Navbar />
            {children}
          </AuthContextProvider>
        </Provider>
      </body>
    </html>
  );
}
