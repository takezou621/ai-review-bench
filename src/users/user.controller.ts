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
