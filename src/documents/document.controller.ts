import { Router } from "express";
import { requireAuth } from "../auth/auth.guard";
import { getDocument } from "./document.service";

export const documentRouter = Router();

documentRouter.get("/documents/:id", requireAuth, async (req, res) => {
  const doc = await getDocument(req.params.id);
  if (!doc) { res.status(404).json({ error: "not found" }); return; }
  res.json(doc);
});
