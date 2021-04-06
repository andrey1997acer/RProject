import { NonEmptyArray } from "type-graphql";
import { PingResolver } from "./ping.resolver";
import { ProductResolver } from "./product.resolver";
import { UserResolver } from './user.resolver';
export const  RESOLVERS :NonEmptyArray<Function>  = [PingResolver, ProductResolver, UserResolver];