import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Profile{
    @PrimaryGeneratedColumn()
    id:Number;

    @Column()
    gender:String

    @Column()
    photo:String
}