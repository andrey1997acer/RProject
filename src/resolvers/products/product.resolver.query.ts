import { Arg, Query, Resolver } from "type-graphql";
import { Int } from "type-graphql";

import { Product } from "../../entities/product";



@Resolver()
export class ProductResolverQuery {
    @Query(() => [Product])
    products() {
        return Product.find()
    }

    @Query(() => [Product])
    productById(
        @Arg("id", () => Int) id: number
    ) {
        return Product.findOne(
            {
                where: {
                    id
                }
            }
        );
    }
}