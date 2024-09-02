import EmailTemplate from "@/components/email-template";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export default async function handler(req, res) {
  if (req.method === "POST") {
    const {
      serviceType,
      pickUpDate,
      pickUpTime,
      pickUpLocation,
      dropOffLocation,
      passengers,
      luggageCount,
      vehicleType,
      finalPrice,
      passengerFirstame,
      passengerLastname,
      passengerEmail,
      passengerPhone,
    } = req.body;

    try {
      await resend.emails.send({
        from: "delivered@resend.dev", // Replace with your email
        to: "liliabendjeddou9@gmail.com", // Replace with driver's email
        subject: "Ride Quote Request",
        react: EmailTemplate({
          serviceType,
          pickUpDate,
          pickUpTime,
          pickUpLocation,
          dropOffLocation,
          passengers,
          luggageCount,
          vehicleType,
          finalPrice,
          passengerFirstame,
          passengerLastname,
          passengerEmail,
          passengerPhone,
        }),
      });

      res.status(200).json({ message: "Email sent successfully!" });
    } catch (error) {
      console.error("Failed to send email:", error);
      res.status(500).json({ error: "Failed to send email." });
    }
  } else {
    res.setHeader("Allow", ["POST"]);
    res.status(405).end("Method Not Allowed");
  }
}
