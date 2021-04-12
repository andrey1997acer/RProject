import {Entity, Column, PrimaryGeneratedColumn,BaseEntity, CreateDateColumn, OneToMany, ManyToOne} from 'typeorm';
import { Field, Int, ObjectType } from "type-graphql";
import { Image } from './images';
import { Product } from './product';
import { User } from './user';

@ObjectType()
@Entity()
export class Review extends BaseEntity{
    @Field()
    @PrimaryGeneratedColumn()
    id:number;

    @Field(()=>Product)
    @ManyToOne(() => Product, product => product.reviews)
    product: Product[];

    @Field(()=>User)
    @ManyToOne(() => User, user => user.reviews)
    user: User[];

    @Field()
    @Column()
    name:string;

    @Field(()=>Int)
    @Column("int",{default:0})
    quantity:number;
    
    @Field(()=> String)
    @CreateDateColumn({type:'timestamp'})
    createdAt:string;
}