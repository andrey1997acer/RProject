import {
    Resolver,
    Query,
    UseMiddleware,
    Ctx,
} from "type-graphql";
import { User } from "../../entities/user";


import { isAuthenticated } from "../../middleware/is-authenticated";
import { Context } from "../../interfaces/context.interface";

@Resolver()
export class UserResolverQuery{
    @Query(() => [User])
    async users() {
        return User.find();
    }
    
    @Query(() => String)
    @UseMiddleware(isAuthenticated)
    async Me(@Ctx() { user }: Context) {
        console.log(JSON.stringify(user));
        return `Your user id : ${user!.id}`;
    }
}