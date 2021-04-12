import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  BaseEntity,
  CreateDateColumn,
  OneToMany,
  RelationId,
} from "typeorm";
import { Field, Int, ObjectType } from "type-graphql";
import { Image } from "./images";
import { Review } from "./reviews";
import { TypeormLoader } from "type-graphql-dataloader";
@ObjectType()
@Entity()
export class Product extends BaseEntity {
  @Field()
  @PrimaryGeneratedColumn()
  id: number;

  @Field(() => Image)
  @OneToMany(() => Image, (image) => image.product)
  @TypeormLoader(() => Image, (image: Image) => image.productId, {
    selfKey: true,
  })
  images: Image[];

  @Field(() => Review)
  @OneToMany(() => Review, (review) => review.product)
  reviews: Review[];

  @RelationId((user: Product) => user.images)
  imageIds: number[];

  @Field()
  @Column()
  name: string;

  @Field(() => Int)
  @Column("int", { default: 0 })
  quantity: number;

  @Field(() => String)
  @CreateDateColumn({ type: "timestamp" })
  createdAt: string;
}
