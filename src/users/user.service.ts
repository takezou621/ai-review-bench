import { findAll, findById, query } from "../db";

export async function listUsers() {
  return findAll("users");
}

export async function getUser(id: string) {
  return findById("users", id);
}

export async function searchUsers(name: string) {
  return query(`SELECT * FROM users WHERE name = '${name}'`);
}
