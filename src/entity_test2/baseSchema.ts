import { EntitySchema, EntitySchemaColumnOptions } from "typeorm";

export const BaseSchema = {
    id: {
        type: "int",
        generated: true,
        primary: true
    } as EntitySchemaColumnOptions,
    title: {
        type: "nvarchar",
    } as EntitySchemaColumnOptions,
    description: {
        type: "nvarchar"
    } as EntitySchemaColumnOptions,
    createdOn: {
        type: "datetime",
    } as EntitySchemaColumnOptions,
    updatedOn: {
        type: "datetime",
    } as EntitySchemaColumnOptions,
    deletedOn: {
        type: "datetime",
    } as EntitySchemaColumnOptions
}