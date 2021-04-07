import { Field, ObjectType } from "type-graphql";
import {Entity, PrimaryGeneratedColumn, Column, ManyToOne} from "typeorm";
import {Product} from "./product";

@ObjectType()
@Entity()
export class Image {

    @PrimaryGeneratedColumn()
    @Field()
    id!: number;

    @Column()
    @Field()
    url!: string;

    @Column()
    @Field()
    name!: string;

    @Column()
    @Field()
    description!: string;

    @Field(()=>Product)
    @ManyToOne(() => Product, product => product.images)
    product!: Product;

}