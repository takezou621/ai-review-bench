import express from "express";
import { userRouter } from "./users/user.controller";
import { documentRouter } from "./documents/document.controller";

export const app = express();
app.use(express.json());
app.use(userRouter);
app.use(documentRouter);
app.get("/health", (_req, res) => res.json({ ok: true }));

app.get("/health/detail", async (_req, res) => {
  res.json({ ok: true, uptimeSec: Math.round(process.uptime()) });
});
