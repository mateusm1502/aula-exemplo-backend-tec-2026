import { Sequelize } from "sequelize";

class Database {
    constructor() {
        this.init()
    }
    init() {
        this.db = new Sequelize({
            database: "exemplo",
            host: "localhost",
            username: "root",
            dialect: "mysql",
        })
    }
}

export default new Database()