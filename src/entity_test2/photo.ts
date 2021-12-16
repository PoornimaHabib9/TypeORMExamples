import { Column, Entity, ManyToOne, OneToMany } from "typeorm";
import { Base } from "./base";
import { User } from "./user";

@Entity()
export class Photo extends Base{
    @Column()
    photoUrl:String

    @OneToMany(()=>User,user=>user.photos)
    user:User
}