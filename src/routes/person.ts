import { Router } from 'express'
import { getMongoManager } from 'typeorm'
import { Job } from '../entity_mongo/job'
import { Person } from '../entity_mongo/person'
import { Profile } from '../entity_mongo/profile'
let person = Router()

person.get("/getPerson", async (req, res) => {
    let repo=getMongoManager("mongoConnection").getMongoRepository(Person)
    let profile=new Profile()
    let result=await repo.find({where:{name:{$eq: "Developer"}}})
    res.send(result)
})

person.post("/insertPerson", async (req, res) => {
    var data = req.body.data;
    let repo = getMongoManager("mongoConnection").getMongoRepository(Person)
    let result = await repo.create(data.user)
    let output = await repo.save(result)
    res.send(output)
})

export default person