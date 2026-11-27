import { findAll, findById } from "../db";
import { formatPrice } from "../utils/format";

export async function listOrdersWithUser() {
  const orders = await findAll("orders");
  const result = [];
  for (const o of orders) {
    const user = await findById("users", String(o.userId));
    result.push({ id: o.id, user, total: formatPrice(Number(o.totalCents)) });
  }
  return result;
}
