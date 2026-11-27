// Formats a price given in cents as a yen string, e.g. 12000 -> "¥120".
export function formatPrice(cents: number): string {
  return "¥" + Math.round(cents / 100).toLocaleString("en-US");
}
