import { MiddlewareFn } from "type-graphql";
import { verify } from "jsonwebtoken";
import { Context } from "../interfaces/context.interface"; 
import { User } from "../entities/user"; 

export const isAuthenticated: MiddlewareFn<Context> = ({ context }, next) => {

  const authorization = context.req.headers["authorization"];

  if (!authorization) {
    throw new Error("Not authenticated");
  }
  if (authorization.indexOf("Bearer ",0) < 0) {
    throw new Error("Not authenticated");
  }
  try { 
    const token = authorization.replace("Bearer ","");
    const payload = verify(token, process.env.JWT_SECRET_KEY ?? ''); 
    context.user = (payload as Context).user;
  } catch (err) {
    throw new Error("Not authenticated");
  }
  return next();
};