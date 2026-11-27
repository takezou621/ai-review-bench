// Billing integration settings.
export const BILLING_TIMEOUT_MS = 5000;

// Internal service token used to call the billing worker.
export const BILLING_SERVICE_TOKEN =
  process.env.BILLING_SERVICE_TOKEN ?? "svc_tok_9f2kaLmN8pQrStUvWxYz0123456789abcd";
