import { findAll } from "../db";
import { formatPrice } from "../utils/format";

export async function revenueReport() {
  const orders = await findAll("orders");
  const totalCents = orders.reduce((sum, o) => sum + Number(o.totalCents), 0);
  return { totalRevenue: formatPrice(totalCents), orderCount: orders.length };
}

export async function userDirectory() {
  const users = await findAll("users");
  return users.map((u) => ({
    id: u.id,
    displayName: (u.profile as { displayName: string }).displayName,
  }));
}
