import { Arg, Query, Resolver } from "type-graphql";
import { Int } from "type-graphql";

import { Image } from "../../entities/images";



@Resolver()
export class ImageResolverQuery {
    @Query(() => [Image])
    images() {
        return Image.find()
    }

    @Query(() => [Image])
    imagesById(
        @Arg("id", () => Int) id: number
    ) {
        return Image.findOne(
            {
                where: {
                    id
                }
            }
        );
    }
}