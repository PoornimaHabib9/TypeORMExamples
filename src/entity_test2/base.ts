import { Column, CreateDateColumn, DeleteDateColumn, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";
import {v1 as uuid} from 'uuid'

export class Base{
    @PrimaryGeneratedColumn()
    id:uuid

    @Column()
    title:String

    @Column()
    description:String

    @CreateDateColumn()
    createdOn:Date

    @UpdateDateColumn()
    updatedOn:Date

    @DeleteDateColumn()
    deletedOn:Date
}