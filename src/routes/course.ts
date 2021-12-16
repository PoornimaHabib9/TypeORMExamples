import { Router } from 'express'
import { Course } from '../entity/course'
import dbOperations from '../dbOperations'

let courses = Router()

courses.get("/getCourse", async (req, res) => {
    try {
        let result = await dbOperations.getById("default",Course, req.query.id)
        res.send(result)
    } catch (error) {
        res.send(error)
    }
})

courses.get("/getCourses", async (req, res) => {
    try {
        let result = await dbOperations.getAll("default",Course)
        res.send(result)
    } catch (e) {
        res.send(e)
    }
})

courses.post("/insert", async (req, res) => {
    try {
        await dbOperations.insert("default",Course, req.body.data)
        res.send(true)
    } catch (error) {
        res.send(error)
    }
})

courses.put("/update", async (req, res) => {
    try {
        await dbOperations.update("default",Course, req.query.id, req.body.data)
        res.send(true)
    } catch (error) {
        res.send(error)
    }
})

courses.delete("/delete", async (req, res) => {
    try {
        await dbOperations.removeById("default",Course, req.query.id)
        res.send(true)
    } catch (error) {
        res.send(error)
    }
})

export default courses