import { Column, Entity } from "typeorm";

export class Job{
    @Column()
    jobTitle:String

    @Column()
    jobDescription:String

    @Column()
    companyName:String
}