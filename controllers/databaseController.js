'use strict'

const Models = require('../models')

const getDatabases = (res) => {
    Models.Database.findAll({})
        .then((data) => {
            res.send({ result: 200, data: data })
        })
        .catch((err) => {
            console.log(err)
            res.send({ result: 500, error: err.message })
        })
}

const createDatabase = (data, res) => {
    Models.Database.create((data))
        .then((data) => {
            res.send({ result: 200, data: data})
        })
        .catch((err) => {
            console.log(err)
            res.send({ result: 500, error: err.message })
        })
}

const updateDatabase = (req, res) => {
    Models.Database.update(req.body, {
        where: { id: req.params.id },
        returning: true
    })
        .then((data) => {
            res.send({ result: 200, data: data })
        })
        .catch((err) => {
            console.log(err)
            res.send({ result: 500, error: err.message })
        })
}

const deleteDatabase = (req, res) => {
    Models.Database.destroy({ where: { id: req.params.id }})
        .then((data) => {
            res.send({ result: 200, data: data })
        })
        .catch((err) => {
            console.log(err)
            res.send({ result: 500, error: err.message })
        })
}

module.exports = {
    getDatabases,
    createDatabase,
    updateDatabase,
    deleteDatabase
}