"use strict"

const User = require('./user')
const Project = require('./project')
const Language = require('./language')
const Database = require('./database')

User.hasMany(Project, {
    foreignKey: "user_id",
    onDelete: "CASCADE"
})

Project.belongsTo(User, { foreignKey: "user_id" })

Project.hasMany(Language, { foreignKey: "project_id" })
Language.belongsTo(Project, { foreignKey: "project_id" })

Project.hasMany(Database, { foreignKey: "project_id" })
Database.belongsTo(Project, { foreignKey: "project_id" })

async function init() {
    await User.sync()
    await Project.sync()
    await Language.sync()
    await Database.sync()
}

init()

module.exports = {
    User,
    Project,
    Language,
    Database
}