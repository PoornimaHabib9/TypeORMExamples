import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";
import {v1 as uuid} from 'uuid'
import { Name } from "./name";

@Entity()
export class Employee{

    @PrimaryGeneratedColumn()
    employeeId:uuid

    @Column(()=>Name)
    employee:String;

    @Column()
    employeeType:String

    @Column()
    jobDescription:String
}