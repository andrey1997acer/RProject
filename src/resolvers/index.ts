import { NonEmptyArray } from "type-graphql";
import { productResolver } from "./products";
import { userResolver } from "./users";
import {imageResolver} from './Images'
export const  RESOLVERS :NonEmptyArray<Function>  = [...userResolver, ...productResolver, ...imageResolver];