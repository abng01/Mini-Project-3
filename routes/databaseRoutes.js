const express = require('express')
const router = express.Router()
const Controllers = require('../controllers')

router.get("/", (req, res) => {
    Controllers.databaseController.getDatabases(res)
})

router.post("/create", (req, res) => {
    Controllers.databaseController.createDatabase(req.body, res)
})

router.put("/:id", (req, res) => {
    Controllers.databaseController.updateDatabase(req, res)
})

router.delete("/:id", (req, res) => {
    Controllers.databaseController.deleteDatabase(req, res)
})


module.exports = router