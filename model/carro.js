import database from "../config/database.js";

class carro {
    constructor() {
        this.model = database.db.define("usuarios", {
            id: {
                type: database.db.Sequelize.INTEGER,
                primaryKey: true,
                autoIncrement: true
            },
            email: {
                type: database.db.Sequelize.STRING,
                unique: true,
            },
            senha: {
                type: database.db.Sequelize.INTEGER,
            }
        })
    }
}

export default new carro().model