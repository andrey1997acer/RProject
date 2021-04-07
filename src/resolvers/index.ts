import { NonEmptyArray } from "type-graphql";
import { productResolver } from "./products";
import { userResolver } from "./users";
export const  RESOLVERS :NonEmptyArray<Function>  = [...userResolver, ...productResolver];