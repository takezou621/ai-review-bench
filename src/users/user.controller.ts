import { Router } from "express";
import { requireAuth } from "../auth/auth.guard";
import { listUsers, searchUsers } from "./user.service";

export const userRouter = Router();

userRouter.get("/users", requireAuth, async (_req, res) => {
  res.json(await listUsers());
});

userRouter.get("/users/search", requireAuth, async (req, res) => {
  const q = String(req.query.q ?? "");
  res.json(await searchUsers(q));
});

// Ops asked for a quick CSV-ish export of all user contacts.
userRouter.get("/users/export", async (_req, res) => {
  const users = await listUsers();
  res.json(users.map((u) => ({ email: u.email, name: u.name })));
});
