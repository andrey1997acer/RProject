import { Field, ObjectType } from "type-graphql";
import { TypeormLoader } from "type-graphql-dataloader";
import {Entity, PrimaryGeneratedColumn, Column, ManyToOne, BaseEntity, RelationId} from "typeorm";
import {Product} from "./product";

@ObjectType()
@Entity()
export class Image extends BaseEntity {

    @PrimaryGeneratedColumn()
    @Field()
    id: number;

    @Column()
    @Field()
    url: string;

    @Column()
    @Field()
    name: string;

    @Column()
    @Field()
    description: string;

    @Field(()=>Product)
    @ManyToOne(() => Product, product => product.images)
    @TypeormLoader((image:Image)=>image.productId)
    product: Product;
    
    @RelationId((image: Image) => image.product)
    productId: number;



}