import "reflect-metadata";
import express from 'express'
import notes from './routes/notes'
import { createConnection, createConnections } from "typeorm";
import cors from 'cors'
import bodyParser from 'body-parser'
import courses from "./routes/course";
import users from "./routes/users";
import employee from "./routes/employee";
import person from "./routes/person";

const PORT = "3000"

const options:cors.CorsOptions={
    origin:['http://localhost:3002']
}

createConnections().then(connection => {
    let app = express()
    app.use(bodyParser.urlencoded({ extended: false }))
    app.use(bodyParser.json())
    app.use(cors(options))

    app.use('/notes', notes)
    app.use('/course',courses)
    app.use('/employee',employee)
    app.use('/user',users)
    app.use('/person',person)

    app.listen(PORT, () => {
        console.log(`listen in port ${PORT}`)
    })
})

// createConnection().then(async connection => {

//     // console.log("Inserting a new user into the database...");
//     // const user = new User();
//     // user.firstName = "Timber";
//     // user.lastName = "Saw";
//     // user.age = 25;
//     // await connection.manager.save(user);
//     // console.log("Saved a new user with id: " + user.id);

//     // console.log("Loading users from the database...");
//     // const users = await connection.manager.find(User);
//     // console.log("Loaded users: ", users);

//     // console.log("Here you can setup and run express/koa/any other framework.");

// }).catch(error => console.log(error));
