import { Column, Entity, JoinColumn, ManyToOne, OneToMany, OneToOne, PrimaryGeneratedColumn } from "typeorm";
import { Name } from "./name";
import { Photo } from "./photo";
import { Profile } from "./profile";

@Entity()
export class User extends Name{
    @PrimaryGeneratedColumn()
    id:Number;

    @OneToOne(()=>Profile)
    @JoinColumn()
    profile:Profile;

    @ManyToOne(()=>Photo,photo=>photo.user)
    photos:Photo[]
}