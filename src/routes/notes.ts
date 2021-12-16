import { validate } from 'class-validator'
import { Router } from 'express'
import { getConnection } from 'typeorm'
import { Note } from '../entity/notes'
const notes = Router()

notes.get('/notes', async (req, res) => {
    let notes = await getConnection().manager.find(Note)
    res.send(notes)
})

notes.post('/insert', async (req, res) => {
    console.log(req.body.Data)
    let repo = await getConnection().manager.getRepository(Note)
    let note = await repo.create(req.body.Data)
    const errors = await validate(note);
    if (errors.length > 0) {
        res.send(errors)
    } else {
        let result = await repo.save(note)
        res.send(result)
    }
})

notes.get('/getNoteById', async (req, res) => {
    let id = (req.query.id)
    let repo = await getConnection().manager.getRepository(Note)
    let note = await repo.findOne(id)
    res.send(note)
})

export default notes;