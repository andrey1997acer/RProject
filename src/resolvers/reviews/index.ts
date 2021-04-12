
import { NonEmptyArray, Resolver } from 'type-graphql';
// import {} from './review.resolver.mutation'
import {ReviewResolverQuery} from './review.resolver.query'

export const productResolver :NonEmptyArray<Function>  = [  ReviewResolverQuery, ReviewResolverQuery];