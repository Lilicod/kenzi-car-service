import {
    PaymentElement,
    useElements,
    useStripe,
  } from "@stripe/react-stripe-js";
  import React, { useEffect, useState } from "react";
  import { useRouter } from "next/router";
  
  export default function CheckoutForm() {
    const stripe = useStripe();
    const elements = useElements();
    const router = useRouter();
    const [clientSecret, setClientSecret] = useState("");
  
    useEffect(() => {
      if (router.query.amount) {
        fetch("/api/checkout_sessions", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            amount: router.query.amount, // Use the amount passed in the query parameters
          }),
        })
          .then((res) => res.json())
          .then((data) => setClientSecret(data.client_secret));
      }
    }, [router.query.amount]);
  
    const handleSubmit = async (event) => {
      event.preventDefault();
  
      if (!stripe || !elements) {
        return;
      }
  
      const { error: submitError } = await elements.submit();
  
      if (submitError) {
        console.log(submitError.message);
        return;
      }
  
      if (!clientSecret) {
        console.error("Client secret is missing");
        return;
      }
  
      const { error } = await stripe.confirmPayment({
        elements,
        confirmParams: {
          return_url: "http://localhost:3000/success",
        },
        clientSecret, // Use the fetched client secret
      });
  
      if (error) {
        console.log(error.message);
      }
    };
  
    return (
      <div className="h-screen flex flex-col justify-center items-center w-full">
        <form className="max-w-md mx-auto" onSubmit={handleSubmit}>
          <PaymentElement />
          <button
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded w-full mt-4"
            type="submit"
            disabled={!stripe}
          >
            Pay
          </button>
        </form>
      </div>
    );
  }
  