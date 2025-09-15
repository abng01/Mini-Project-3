const express = require('express')
const router = express.Router()
const Controllers = require('../controllers')

router.get("/", (req, res) => {
    Controllers.languageController.getLanguages(res)
})

router.post("/create", (req, res) => {
    Controllers.languageController.createLanguages(req.body, res)
})

router.put("/:id", (req, res) => {
    Controllers.languageController.updateLanguages(req, res)
})

router.delete("/:id", (req, res) => {
    Controllers.languageController.deleteLanguages(req, res)
})


module.exports = router