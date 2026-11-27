import { Router } from "express";
import { requireAuth, currentUser } from "../auth/auth.guard";
import { getDocument } from "./document.service";

export const documentRouter = Router();

// Only the owner may read a document.
documentRouter.get("/documents/:id", requireAuth, async (req, res) => {
  const doc = await getDocument(req.params.id);
  if (!doc) { res.status(404).json({ error: "not found" }); return; }
  if (doc.ownerId !== currentUser(req).id) { res.status(403).json({ error: "forbidden" }); return; }
  res.json(doc);
});
