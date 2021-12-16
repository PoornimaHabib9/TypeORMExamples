import { EntitySchema } from "typeorm";
import { BaseSchema } from "./baseSchema";

export const membershipSchema = new EntitySchema({
    name:"membership",
    columns:{
        ...BaseSchema
    }
})