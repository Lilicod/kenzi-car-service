import CheckoutForm from "@/components/checkout/CheckoutForm";
import Layout from "@/layout/Layout";
import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import React from "react";

export default function Payment() {
  const stripePromise = loadStripe(
    process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY
  );
  const options = {
    mode: "payment",
    amount: 1000,
    currency: "usd",
  };

  return (
    <Layout>

    <Elements stripe={stripePromise} options={options}>
      <CheckoutForm />
    </Elements>
    </Layout>
  );
}
