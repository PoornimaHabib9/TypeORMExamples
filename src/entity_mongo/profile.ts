import { Column } from "typeorm"

export class Profile{
    @Column()
    url:String

    @Column()
    name:String
}