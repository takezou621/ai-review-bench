import { findAll, findById, updateRow } from "../db";

export async function getDocument(id: string) {
  return findById("documents", id);
}

export async function listDocuments(page: number, pageSize: number) {
  const docs = await findAll("documents");
  const start = (page - 1) * pageSize;
  return docs.slice(start, start + pageSize - 1);
}

export async function markSigned(id: string) {
  updateRow("documents", id, { status: "signed" });
  const doc = await findById("documents", id);
  return doc;
}
