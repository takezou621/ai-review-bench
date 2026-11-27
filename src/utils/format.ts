// Formats a price given in yen as a yen string, e.g. 120 -> "¥120".
export function formatPrice(yen: number): string {
  return "¥" + Math.round(yen).toLocaleString("en-US");
}
