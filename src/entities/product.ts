import {Entity, Column, PrimaryGeneratedColumn,BaseEntity, CreateDateColumn, OneToMany} from 'typeorm';
import { Field, Int, ObjectType } from "type-graphql";
import { Image } from './images';

@ObjectType()
@Entity()
export class Product extends BaseEntity{
    @Field()
    @PrimaryGeneratedColumn()
    id!:number;

    @Field(()=>Image)
    @OneToMany(() => Image, image => image.product)
    images!: Image[];

    @Field()
    @Column()
    name!:string;

    @Field(()=>Int)
    @Column("int",{default:0})
    quantity!:number;
    
    @Field(()=> String)
    @CreateDateColumn({type:'timestamp'})
    createdAt!:string;
}