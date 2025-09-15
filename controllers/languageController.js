'use strict'

const Models = require('../models')

const getLanguages = (res) => {
    Models.Language.findAll({})
        .then((data) => {
            res.send({ result: 200, data: data })
        })
        .catch((err) => {
            console.log(err)
            res.send({ result: 500, error: err.message })
        })
}

const createLanguages = (data, res) => {
    Models.Language.create(data)
        .then((data) => {
            res.send({ result: 200, data: data})
        })
        .catch((err) => {
            console.log(err)
            res.send({ result: 500, error: err.message})
        })
} 

const updateLanguages = (req, res) => {
    Models.Language.update(req.body, {
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

const deleteLanguages = (req, res) => {
    Models.Language.destroy({ where: { id: req.params.id }})
        .then((data) => {
            res.send({ result: 200, data: data })
        })
        .catch((err) => {
            console.log(err)
            res.send({ result: 500, error: err.message })
        })
}

module.exports = {
    getLanguages,
    createLanguages,
    updateLanguages,
    deleteLanguages
}