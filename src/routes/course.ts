import { Router } from 'express'
import { getConnection } from 'typeorm'
import { Course } from '../entity/course'
let courses = Router()

courses.get("/getCourse", async (req, res) => {
    try {
        let repo = await getConnection().manager.getRepository(Course)
        let result = await repo.find(req.query.id)
        res.send(result)
    } catch (error) {
        res.send(error)
    }
})

courses.get("/getCourses", async (req, res) => {
    try {
        let result = await getConnection().manager.find(Course)
        res.send(result)
    } catch (e) {
        res.send(e)
    }
})

courses.post("/insert", async (req, res) => {
    try {
        let repo = await getConnection().manager.getRepository(Course)
        try {
            let course = await repo.create(req.body.data)
            await repo.save(course)
            res.send(true)
        } catch (err) {
            res.send(err)
        }
    } catch (error) {
        res.send(error)
    }
})

courses.put("/update", async (req, res) => {
    try {
        let repo = await getConnection().manager.getRepository(Course)
        try {
            await repo.update({ id: req.query.id }, req.body.data)
            res.send(true)
        } catch (err) {
            res.send(err)
        }
    } catch (error) {
        res.send(error)
    }
})

courses.delete("/delete", async (req, res) => {
    try {
        let repo = await getConnection().manager.getRepository(Course)
        try {
            await repo.delete(req.body.id)
            res.send(true)
        } catch (err) {
            res.send(err)
        }
    } catch (error) {
        res.send(error)
    }
})

export default courses