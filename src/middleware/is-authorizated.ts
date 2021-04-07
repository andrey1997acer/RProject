
import { AuthChecker } from "type-graphql"
import { Context } from "../interfaces/context.interface";
import { verify } from "jsonwebtoken";
import { User } from "../entities/user";
import { jwtSecretKey } from "../config/enviroments.config";
export const isAuthorizated: AuthChecker<Context> = ({ context }, roles) => {

    const authorization = context.req.headers["authorization"];
    const BEARER = "Bearer ";
    if (!authorization) {
        throw new Error("Not authenticated");
    }
    if (authorization.indexOf(BEARER, 0) < 0) {
        throw new Error("Not authenticated");
    }
    try {
        const token = authorization.replace(BEARER, "");
        const payload = verify(token, jwtSecretKey ?? '');
        context.user = (payload as Context).user;
    } catch (err) {
        throw new Error("Not authenticated");
    }

    const user = context.user;
    if (!user) {
        return false;
    }
    
    if (roles.length === 0 || roles.includes(user.role)) {
        return true;
    }
    return false;
};