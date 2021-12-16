import { IsEmail, Length, MaxLength, maxLength, MinLength } from "class-validator";
import { Entity,PrimaryGeneratedColumn,Column, CreateDateColumn, UpdateDateColumn } from "typeorm";

@Entity()
export class Note{
    @PrimaryGeneratedColumn()
    id:number;

    @Column()
    @Length(10,20)
    note:String;

    @Column()
    @MinLength(200)
    description:String;

    @Column()
    @IsEmail()
    emailId:String

    @CreateDateColumn()
    createdOn:Date;

    @UpdateDateColumn()
    updatedAt:Date;
}