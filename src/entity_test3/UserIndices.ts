import { AfterInsert, AfterLoad, AfterUpdate, BeforeInsert, BeforeUpdate, Column, Entity, Index, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Animal{
    @PrimaryGeneratedColumn()
    id:Number

    @Column()
    @Index({unique:true})
    animalName:String

    @Column()
    @Index()
    animalType:String

    @Column({default:0})
    likes:Number

    @Column()
    comments:String

    @Column({default:0})
    views:Number

    @Column({default:new Date().toDateString()})
    beforeUpdateTime:String

    @Column({default:new Date().toDateString()})
    afterUpdateTime:String

    @AfterLoad()
    updateLikes(){
        if(!this.likes){
            this.likes=+0
        }
    }

    @BeforeInsert()
    updateComments(){
        if(!this.comments){
            this.comments="No comments"
        }
    }

    @AfterInsert()
    updateViews(){
        if(!this.views){
            this.views=0
        }
    }

    @BeforeUpdate()
    updateBeforeTime(){
        console.log(new Date())
        this.beforeUpdateTime=new Date().toDateString()
    }

    @AfterUpdate()
    updateAfterTime(){
        this.afterUpdateTime=new Date().toDateString()
    }

}