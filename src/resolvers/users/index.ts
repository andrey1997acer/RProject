
import { NonEmptyArray, Resolver } from 'type-graphql';
import { UserResolverMutation } from './user.resolver.mutation';
import { UserResolverQuery } from './user.resolver.query';


export const userResolver :NonEmptyArray<Function>  = [ UserResolverMutation, UserResolverQuery];