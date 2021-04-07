
import { NonEmptyArray, Resolver } from 'type-graphql';
import {ProductResolverMutation} from './product.resolver.mutation'
import {ProductResolverQuery} from './product.resolver.query'

export const productResolver :NonEmptyArray<Function>  = [ ProductResolverMutation, ProductResolverQuery];