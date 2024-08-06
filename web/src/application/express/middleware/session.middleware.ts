import { type NextFunction, type Request, type Response } from "express";

export function sessionGenerator(
  req: Request,
  res: Response,
  next: NextFunction,
) {
  if (!req.session) {
  }
}
