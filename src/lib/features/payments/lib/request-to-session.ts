import { getStripe, Stripe } from "~shared/services/payments";
import { headers } from "next/headers";
import { NextRequest } from "next/server";

const requestToSession = async (req: NextRequest) => {
  const body = await req.text();
  const signature = headers().get("Stripe-Signature") as string;

  let event: Stripe.Event;
  const stripe = await getStripe();

  if (!stripe) throw new Error("Stripe is not available");

  try {
    event = stripe.webhooks.constructEvent(
      body,
      signature,
      env.STRIPE_WEBHOOK_SECRET,
    );
  } catch (error) {
    return new Response(`Webhook Error: ${error.message}`, { status: 400 });
  }

  const session = event.data.object as Stripe.Checkout.Session;
};
