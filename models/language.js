const { DataTypes, Model } = require("sequelize")

let dbConnect = require("../dbConnect")

const sequelizeInstance = dbConnect.Sequelize

class Language extends Model {}

Language.init(
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
        languages: {
            type: DataTypes.STRING,
            allowNull: false
        }
    },
    {
        sequelize: sequelizeInstance,
        modelName: "languages",
        timestamps: true,
        freezeTableName: true
    }
)

module.exports = Language