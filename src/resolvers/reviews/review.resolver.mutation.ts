import { Arg, Authorized, Field, InputType, Mutation, Query, Resolver } from "type-graphql";
import { Int } from "type-graphql";

import { Review } from "../../entities/reviews";
import { RolesTypes } from "../../entities/user";

@InputType()
class ReviewInput {
    @Field()
    name!: string
    @Field()
    quantity!: number
}

@Resolver()
export class ReviewResolverMutation {
    @Authorized()
    @Mutation(() => Review)
    async createReview(
        @Arg("data", () => ReviewInput) data: ReviewInput
    ) {
        const newData = Review.create(data);
        return await newData.save();
    }

    @Authorized()
    @Mutation(() => Review)
    async updateReview(
        @Arg("id", () => Int) id: number,
        @Arg("data", () => ReviewInput) data: ReviewInput
    ) {
        await Review.update({ id }, data);
        const dataUpdated = await Review.findOne(id)
        return dataUpdated;
    }

    @Authorized(RolesTypes.ADMIN)
    @Mutation(() => Boolean)
    async deleteReview(
        @Arg("id", () => Int) id: number
    ) {
        await Review.delete(id);
        return true;
    }

    @Query(() => [Review])
    Reviews() {
        return Review.find()
    }

    @Query(() => [Review])
    ReviewById(
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