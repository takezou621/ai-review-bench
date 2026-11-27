import { findById, updateRow } from "../db";

export async function getDocument(id: string) {
  return findById("documents", id);
}

export async function markSigned(id: string) {
  await updateRow("documents", id, { status: "signed" });
  const doc = await findById("documents", id);
  return doc;
}
