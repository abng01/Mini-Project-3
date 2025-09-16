"use strict";
const axios = require('axios');
const Models = require('../models');
const { Op } = require("sequelize");

// const storeData = async (table, body, res) => {
const storeUsers = async () => {
    let response = await axios.get(`http://localhost:3000/user/`);
    try {
        const array = response.data;
        console.log(array)

        for (let i of array) {
            console.log(i.createdAt, i.updatedAt)
            //Format this according to your table
            const formatObj = {
                name: i.name,
                email: i.email,
                dob: i.dob
            };

            //change Table to the name of your table
            let [newi, created ] = await Models.User.findOrCreate({
                where: {id: i.id},
                defaults: i
            })
        }

    // res.send({message:'Data import complete.'})
    }
    catch (err) {
        // res.send(err.message)
    }
}

const storeProjects = async () => {
    let response = await axios.get(`http://localhost:3000/project/`);
    try {
        const array = response.data;
        console.log(array)

        for (let i of array) {
            console.log(i.createdAt, i.updatedAt)
            //Format this according to your table
            const formatObj = {
                name: i.name,
                email: i.email,
                dob: i.dob
            };

            //change Table to the name of your table
            let [newi, created ] = await Models.Project.findOrCreate({
                where: {id: i.id},
                defaults: i
            })
        }

    // res.send({message:'Data import complete.'})
    }
    catch (err) {
        // res.send(err.message)
    }
}

const storeLanguages = async () => {
    let response = await axios.get(`http://localhost:3000/language/`);
    try {
        const array = response.data;
        console.log(array)

        for (let i of array) {
            console.log(i.createdAt, i.updatedAt)
            //Format this according to your table
            const formatObj = {
                name: i.name,
                email: i.email,
                dob: i.dob
            };

            //change Table to the name of your table
            let [newi, created ] = await Models.Language.findOrCreate({
                where: {id: i.id},
                defaults: i
            })
        }

    // res.send({message:'Data import complete.'})
    }
    catch (err) {
        // res.send(err.message)
    }
}

const storeDatabases = async () => {
    let response = await axios.get(`http://localhost:3000/database/`);
    try {
        const array = response.data;
        console.log(array)

        for (let i of array) {
            console.log(i.createdAt, i.updatedAt)
            //Format this according to your table
            const formatObj = {
                name: i.name,
                email: i.email,
                dob: i.dob
            };

            //change Table to the name of your table
            let [newi, created ] = await Models.Database.findOrCreate({
                where: {id: i.id},
                defaults: i
            })
        }

    // res.send({message:'Data import complete.'})
    }
    catch (err) {
        // res.send(err.message)
    }
}

module.exports = {
    storeUsers,
    storeProjects,
    storeLanguages,
    storeDatabases
}