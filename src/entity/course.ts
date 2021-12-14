import { Column, CreateDateColumn, DeleteDateColumn, Entity, PrimaryGeneratedColumn, Timestamp, UpdateDateColumn } from "typeorm";

@Entity()
export class Course {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    courseName: String;

    @Column()
    courseDescription: String;

    @Column()
    courseDate: Date;

    @Column({type:"timestamp"})
    courseTime: Date;

    @CreateDateColumn()
    createdOn: Date;

    @UpdateDateColumn()
    updatedOn: Date;

    @DeleteDateColumn()
    deletedOn: Date;
}