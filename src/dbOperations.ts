import { getConnection } from "typeorm";

const dbOperation = {
    getAll: async (database, entity) => {
        try {
            let repo = await getConnection(database).manager.getRepository(entity)
            try {
                return await repo.find()
            } catch (error) {
                return error
            }
        } catch (error) {
            return error
        }
    },
    getById: async (database, entity, id) => {
        try {
            let repo = await getConnection(database).manager.getRepository(entity)
            try {
                return await repo.findOne(id)
            } catch (error) {
                return error
            }
        } catch (error) {
            return error
        }
    },
    getByValue: async (database, entity, value) => {
        try {
            let repo = await getConnection(database).manager.getRepository(entity)
            try {
                return await repo.find(value)
            } catch (error) {
                return error
            }
        } catch (error) {
            return error
        }
    },
    insert: async (database, entity, value) => {
        try {
            let repo = await getConnection(database).manager.getRepository(entity)
            try {
                let entityValue = repo.create(value)
                return await repo.save(entityValue)
            } catch (error) {
                console.log(error)
                return error
            }
        } catch (error) {
            console.log(error)
            return error
        }
    },
    update: async (database, entity, id, value) => {
        try {
            let repo = await getConnection(database).manager.getRepository(entity)
            try {
                return await repo.update(id, value)
            } catch (error) {
                return error
            }
        } catch (error) {
            return error
        }
    },
    removeById: async (database, entity, id) => {
        try {
            let repo = await getConnection(database).manager.getRepository(entity)
            try {
                return await repo.remove(id)
            } catch (error) {
                return error
            }
        } catch (error) {
            return error
        }
    }
}

export default dbOperation;
// async function getAll(entity) {
//     try {
//         let repo = await getConnection().manager.getRepository(entity)
//         try {
//             return await repo.find()
//         } catch (error) {
//             return error
//         }
//     } catch (error) {
//         return error
//     }
// }

// async function getById(entity, id) {
//     try {
//         let repo = await getConnection().manager.getRepository(entity)
//         try {
//             return await repo.findOne(id)
//         } catch (error) {
//             return error
//         }
//     } catch (error) {
//         return error
//     }
// }

// async function getByValue(entity, value) {
//     try {
//         let repo = await getConnection().manager.getRepository(entity)
//         try {
//             return await repo.find(value)
//         } catch (error) {
//             return error
//         }
//     } catch (error) {
//         return error
//     }
// }

// async function insert(entity, value) {
//     try {
//         let repo = await getConnection().manager.getRepository(entity)
//         try {
//             let entityValue = repo.create(value)
//             return await repo.save(entityValue)
//         } catch (error) {
//             return error
//         }
//     } catch (error) {
//         return error
//     }
// }

// async function update(entity, id, value) {
//     try {
//         let repo = await getConnection().manager.getRepository(entity)
//         try {
//             return await repo.update(id, value)
//         } catch (error) {
//             return error
//         }
//     } catch (error) {
//         return error
//     }
// }

// async function removeById(entity, id) {
//     try {
//         let repo = await getConnection().manager.getRepository(entity)
//         try {
//             return await repo.remove(id)
//         } catch (error) {
//             return error
//         }
//     } catch (error) {
//         return error
//     }
// }

