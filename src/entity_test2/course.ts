import { Column, Entity } from "typeorm";
import { Base } from "./base";

@Entity()
export class Course extends Base{
    @Column()
    courseBy:String
}