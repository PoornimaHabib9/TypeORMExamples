import { Column, Entity, JoinTable, ManyToMany, PrimaryGeneratedColumn } from "typeorm";
import { Category } from "./Category";

@Entity()
export class Question{
    @PrimaryGeneratedColumn()
    id:Number

    @Column()
    question:String

    @ManyToMany(()=>Category)
    @JoinTable()
    category:Category[]
}