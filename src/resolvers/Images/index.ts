
import { NonEmptyArray, Resolver } from 'type-graphql';
import {ImageResolverMutation} from './image.resolver.mutation'
import {ImageResolverQuery} from './image.resolver.query'

export const imageResolver :NonEmptyArray<Function>  = [ ImageResolverQuery, ImageResolverMutation];