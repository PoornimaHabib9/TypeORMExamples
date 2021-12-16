import { Column, Entity } from "typeorm";
import { Base } from "./base";

@Entity()
export class Note extends Base{
    @Column()
    CreatedBy:String

    @Column()
    newCol:String
}