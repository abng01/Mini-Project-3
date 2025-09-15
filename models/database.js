const { DataTypes, Model } = require('sequelize')

let dbConnect = require('../dbConnect')

const sequelizeInstance = dbConnect.Sequelize

class Database extends Model {}

Database.init(
    {
        id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            autoIncrement: true,
            primaryKey: true
        },
        project_id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            references: {
                model: 'projects',
                key: 'id'
            }
        },
        databases: {
            type: DataTypes.STRING,
            allowNull: true
        }
    },
    {
        sequelize: sequelizeInstance,
        modelName: "databases",
        timestamps: true,
        freezeTableName: true
    }
)

module.exports = Database