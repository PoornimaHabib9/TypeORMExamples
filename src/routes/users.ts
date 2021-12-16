import { Router } from 'express'
import { getConnection } from 'typeorm';
import dbOperation from '../dbOperations';
import { Photo } from '../entity_test2/photo';
import { User } from '../entity_test2/user';
import { Animal } from '../entity_test3/UserIndices';
let users = Router()

users.get('/getRelations', async (req, res) => {
    let userRepo = await getConnection("connection2").getRepository(User)
    let result = await userRepo.find({ relations: ["profile", "photos"] })
    res.send(result)
})

users.post('/insertUserAndPhoto', async (req, res) => {
    let repo = await getConnection("connection2").getRepository(User)
    let repoPhoto = await getConnection("connection2").getRepository(Photo)
    let data = req.body.data
    let user = await repo.create(data.User)

    let result = await repo.save(user)
    try {
        let photo = await repoPhoto.create(data.Photo)
        console.log(photo)
        await repoPhoto.save(photo)
        res.send(true)
    } catch (error) {
        res.send(error)
    }
})

users.post('/insertAnimal', async (req, res) => {
    try {
        let result = await dbOperation.insert("connection3", Animal, req.body.animal)
        res.send(result)
    } catch (error) {
        res.send(error)
    }
})

export default users;