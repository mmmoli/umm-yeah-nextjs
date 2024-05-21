import Stripe from "stripe";
import Cors from "micro-cors";
import { NextResponse, NextRequest } from "next/server";
import { getStripe } from "~shared/services/payments";
import { billingRoute } from "~shared/config/routes";

const cors = Cors({
  allowMethods: ["POST", "HEAD"],
});

const webhookHandler = async (request: NextRequest) => {
  try {
    // you can implement some basic check here like, is user valid or not
    const data = await request.json();
    const priceId = data.priceId;

    const stripe = await getStripe();
    if (!stripe) {
      return new NextResponse("Stripe is not available", { status: 500 });
    }

    const redirectUrl = billingRoute();

    // const checkoutSession: Stripe.Checkout.Session =
    //   await stripe.checkout.sessions.create({
    //     payment_method_types: ["card"],
    //     line_items: [
    //       {
    //         price: priceId,
    //         quantity: 1,
    //       },
    //     ],
    //     mode: "payment",
    //     success_url: redirectUrl,
    //     cancel_url: redirectUrl,
    //     metadata: {
    //       userId: loggedUser.id,
    //       priceId,
    //     },
    //   });
    return NextResponse.json({
      // result: checkoutSession,
      ok: true,
    });
  } catch (error) {
    console.log(error);
    return new NextResponse("Internal Server", { status: 500 });
  }
};

export const handler = cors(webhookHandler as any);
