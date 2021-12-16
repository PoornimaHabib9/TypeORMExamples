import {Router} from 'express'
import { getConnection, getManager } from 'typeorm'
import { Course } from '../entity/course'
import { User } from '../entity_test2/user'
let employee=Router()

employee.get('/getEmployee',async (req,res)=>{
    let repo=await getConnection("default").getRepository(Course)
    let result=await repo.createQueryBuilder("course").where("course.id=:id",{id:req.query.id}).getOne()
    let result1=await repo.createQueryBuilder("course").where("course.courseName=:name",{id:req.query.id,name:req.query.name}).getOne()
    res.send([result,result1])
})

employee.get('/getEmployees',async (req,res)=>{
    let repo=await getConnection("default").getRepository(Course)
    let result=await repo.createQueryBuilder("course").groupBy("course.id").addGroupBy("course.courseName").orderBy("course.createdOn","DESC").getMany()
    res.send(result)
})

employee.post('/insertEmployee',async (req,res)=>{
    await getManager("connection2").transaction(async transactionalEntityManager=>{
        let repo=await transactionalEntityManager.getRepository(User)
        let result=await repo.save(req.body.user)
        res.send(result)
    })
})

employee.put('/updateEmployee',async (req,res)=>{

})

employee.delete('/removeEmployee', async (req,res)=>{
    
})

export default employee