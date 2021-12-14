import { Entity,PrimaryGeneratedColumn,Column } from "typeorm";

@Entity()
export class Note{
    @PrimaryGeneratedColumn()
    id:number;

    @Column()
    note:String;

    @Column()
    description:String;

    @Column()
    createdOn:Date;

    @Column()
    updatedAt:Date;
}