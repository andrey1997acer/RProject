import { Arg, Query, Resolver } from "type-graphql";
import { Int } from "type-graphql";

import { Review } from "../../entities/reviews";



@Resolver()
export class ReviewResolverQuery {
    @Query(() => [Review])
    reviews() {
        return Review.find()
    }

    @Query(() => [Review])
    reviewsById(
        @Arg("id", () => Int) id: number
    ) {
        return Review.findOne(
            {
                where: {
                    id
                }
            }
        );
    }
}