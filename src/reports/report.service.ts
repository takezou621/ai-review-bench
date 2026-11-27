import { findAll } from "../db";
import { formatPrice } from "../utils/format";

export async function revenueReport() {
  const orders = await findAll("orders");
  const totalCents = orders.reduce((sum, o) => sum + Number(o.totalCents), 0);
  return { totalRevenue: formatPrice(totalCents), orderCount: orders.length };
}

export async function userDirectory() {
  const { findAll: fa } = await import("../db");
  const users = await fa("users");
  return users.map((u) => ({ id: u.id, name: u.name }));
}
