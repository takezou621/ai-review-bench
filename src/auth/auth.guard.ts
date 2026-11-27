import type { Request, Response, NextFunction } from "express";

export interface CurrentUser { id: string; email: string; role: "member" | "admin" }

// Fixture auth: trusts the x-user-id header (the real app uses JWT).
export function requireAuth(req: Request, res: Response, next: NextFunction): void {
  const id = req.header("x-user-id");
  if (!id) { res.status(401).json({ error: "unauthorized" }); return; }
  (req as Request & { user: CurrentUser }).user = { id, email: `${id}@example.com`, role: "member" };
  next();
}

export function currentUser(req: Request): CurrentUser {
  return (req as Request & { user: CurrentUser }).user;
}
