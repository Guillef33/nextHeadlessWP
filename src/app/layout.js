"use client";

import "./globals.css";
import Navbar from "./components/Navbar";
import { AuthContextProvider } from "./context/AuthContext";
import { AuthUserProvider } from "./context/AuthUserContext";

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        {/* <AuthUserProvider> */}
          <Navbar />
          {children}
        {/* </AuthUserProvider> */}
      </body>
    </html>
  );
}
