"use client";
import { useState, useEffect } from "react";
import { UserAuth } from "../context/AuthContext";
import { PayPalScriptProvider, PayPalButtons } from "@paypal/react-paypal-js";

function Donar() {
  const { user } = UserAuth();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const checkAuthentication = async () => {
      await new Promise((resolve) => setTimeout(resolve, 50));
      setLoading(false);
    };
    checkAuthentication();
  }, [user]);

  return (
    <div>
      {user ? (
        <p>Welcome, {user.displayName} you are logged in Donar.</p>
      ) : (
        <p>You must be logged to see this page</p>
      )}
    </div>
  );
}

export default Donar;
