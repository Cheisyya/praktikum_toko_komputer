//Import Library
const express = require("express")
const bodyParser = require("body-parser")
const md5 = require("md5")

//Implementasi
const app = express()
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended: true}))

//Import Model
const model = require('../models/index')
const req = require("express/lib/request")
const res = require("express/lib/response")
const admin = model.admin

//Endpoint menampilkan semua data Admin, METHOD : GET, Function : FINDALL()
app.get("/",(req, res) =>{
    admin.findAll()
        .then(admin => {
            res.json(admin)
        })
        .catch(error => {
            res.json({
                mesaage: error.mesaage
            })
        }) 
    })

//Endpoint menambahkan data baru, METHOD : POST
        app.post("/", (req,res) => {
            let data = {
                name : req.body.name,
                username : req.body.username,
                password : md5 (req.body.password)
            }
        
        
        admin.create(data)
            .then(result => {
                res.json ({
                    message : "Data has been inserted"
                })
            })
            .catch(error => {
                res.json ({
                    message : "error.message"
                })
            })
    })

    //Endpoint meng-Update data Admin, METHOD : PUT, function : update
    app.put("/:id", (req, res) => {
        let param = {
            admin_id : req.params.id
        }
        let data = {
            name : req.body.name,
            username : req.body.username,
            password : md5(req.body.password)
        }
        admin.update(data, {where : param})
            .then(result => {
                res.json ({
                    message : "Data has been updated"
                })
            })
            .catch(error => {
                res.json({
                    message : error.message
                })
            })
    })

//Endpoint menghapus data Admin, METHOD : DELETE, function : DESTROY
app.delete ("/:id", (req, res) => {
    let param = {
        admin_id : req.params.id
    }
    admin.destroy({where : param})
        .then(result => {
            res.json ({
                message : "Data has been deleted"
            })
        })
            .catch(error => {
                res.json({
                    message : error.message
                })
            })
        })


module.exports = app