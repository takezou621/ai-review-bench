import { findAll, findById } from "../db";
import { formatPrice } from "../utils/format";

export async function listOrdersWithUser() {
  const orders = await findAll("orders");
  const userIds = [...new Set(orders.map((o) => String(o.userId)))];
  const users = new Map<string, unknown>();
  for (const id of userIds) users.set(id, await findById("users", id));
  return orders.map((o) => ({
    id: o.id,
    user: users.get(String(o.userId)),
    total: formatPrice(Number(o.totalCents) / 100),
  }));
}
