import { Stripe, loadStripe } from "@stripe/stripe-js";
import { envs } from "~shared/config/envs";

let stripePromise: Promise<Stripe | null>;

export const getStripe = () => {
  if (!stripePromise) {
    stripePromise = loadStripe(envs.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY!);
  }
  return stripePromise;
};

export type { Stripe };
