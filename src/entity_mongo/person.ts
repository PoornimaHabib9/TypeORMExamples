import { Column, Entity, ObjectID, ObjectIdColumn } from "typeorm";
import { Job } from "./job";
import { Profile } from "./profile";

@Entity()
export class Person{
    @ObjectIdColumn()
    id:ObjectID

    @Column()
    name:String

    @Column()
    gender:String

    @Column(type=>Profile)
    profile:Profile

    @Column(type=>Job)
    job:Job[]
}