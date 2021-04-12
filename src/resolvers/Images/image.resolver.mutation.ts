import { Arg, Authorized, Field, InputType, Mutation, Query, Resolver } from "type-graphql";


import { Image } from "../../entities/images";
import { Product } from "../../entities/product";

@InputType()
class ImageInput {
    @Field()
    name!:string
    @Field()
    description: string
    @Field()
    productId!: number
    @Field()
    url!: string
}

@Resolver()
export class ImageResolverMutation {
    @Authorized()
    @Mutation(() => Image)
    async createImage(
        @Arg("data", () => ImageInput) data: ImageInput
    ) {
        const newData = Image.create(data);
        return await newData.save();
    }

    // @Authorized()
    // @Mutation(() => Image)
    // async updateImage(
    //     @Arg("id", () => Int) id: number,
    //     @Arg("data", () => ImageInput) data: ImageInput
    // ) {
    //     await Image.update({ id }, data);
    //     const dataUpdated = await Image.findOne(id)
    //     return dataUpdated;
    // }

    // @Authorized(RolesTypes.ADMIN)
    // @Mutation(() => Boolean)
    // async deleteImage(
    //     @Arg("id", () => Int) id: number
    // ) {
    //     await Image.delete(id);
    //     return true;
    // }

    // @Query(() => [Image])
    // Images() {
    //     return Image.find()
    // }

    // @Query(() => [Image])
    // ImageById(
    //     @Arg("id", () => Int) id: number
    // ) {
    //     return Image.findOne(
    //         {
    //             where: {
    //                 id
    //             }
    //         }
    //     );
    // }
}