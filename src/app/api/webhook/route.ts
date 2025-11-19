import { Webhooks } from "@dodopayments/nextjs";

export const POST = Webhooks({
  webhookKey: process.env.DODO_PAYMENTS_WEBHOOK_KEY!,
  onSubscriptionActive: async (payload) => {
    console.log("Received onSubscriptionActive webhook:");
    console.log(payload);
    // Add your business logic here
  },
  onPaymentSucceeded: async (payload) => {
    console.log("Received onPaymentSucceeded webhook:");
    console.log(payload);
    // Add your business logic here
  },
});
