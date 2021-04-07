import { NonEmptyArray } from "type-graphql";
import { ProductResolver } from "./product.resolver";
import { UserResolver } from './user.resolver';
export const  RESOLVERS :NonEmptyArray<Function>  = [ ProductResolver, UserResolver];