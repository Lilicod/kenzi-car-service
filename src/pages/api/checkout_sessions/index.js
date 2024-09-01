import Stripe from "stripe";

export default async function handler(req, res) {
  const stripe = new Stripe(process.env.STRIPE_SECRET_KEY);
  const { amount } = req.body;

  try {
    const paymentIntent = await stripe.paymentIntents.create({
      amount: Number(amount) * 100, // Convert to cents
      currency: "usd",
      automatic_payment_methods: { enabled: true },
    });

    res.status(200).json({ client_secret: paymentIntent.client_secret }); // Return the client_secret
  } catch (error) {
    res.status(400).json({ statusCode: 400, message: error.message });
  }
}
