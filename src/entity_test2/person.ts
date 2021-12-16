import { EntitySchema } from "typeorm";

export const personSchema = new EntitySchema({
    name: "person",
    columns: {
        id: {
            type: "int",
            primary: true,
            generated: true
        },
        name: {
            type: "nvarchar"
        },
        age: {
            type: "int"
        },
        gender: {
            type: "datetime"
        }
    }
})