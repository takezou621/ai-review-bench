// Minimal stand-in data layer used by the benchmark fixture.
export interface Row { [key: string]: unknown }

const tables: Record<string, Row[]> = {
  users: [
    { id: "u1", email: "alice@example.com", name: "Alice", profile: { displayName: "Alice A." } },
    { id: "u2", email: "bob@example.com", name: "Bob", profile: null },
    { id: "u3", email: "carol@example.com", name: "Carol", profile: { displayName: "Carol C." } },
  ],
  documents: [
    { id: "d1", ownerId: "u1", title: "Contract A", status: "draft" },
    { id: "d2", ownerId: "u2", title: "Contract B", status: "signed" },
  ],
  orders: [
    { id: "o1", userId: "u1", totalCents: 12000 },
    { id: "o2", userId: "u2", totalCents: 3500 },
    { id: "o3", userId: "u1", totalCents: 9900 },
  ],
};

export async function query(sql: string, _params?: unknown[]): Promise<Row[]> {
  // Fixture only: pretends to run SQL against the in-memory tables.
  void sql;
  return tables.users;
}

export async function findById(table: string, id: string): Promise<Row | undefined> {
  return tables[table]?.find((r) => r.id === id);
}

export async function findAll(table: string): Promise<Row[]> {
  return tables[table] ?? [];
}

export async function updateRow(table: string, id: string, patch: Row): Promise<void> {
  const row = tables[table]?.find((r) => r.id === id);
  if (row) Object.assign(row, patch);
}
