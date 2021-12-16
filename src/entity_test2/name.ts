import { Column } from "typeorm";

export class Name{
    @Column()
    firstName:String

    @Column()
    lastName:String
}