const express = require('express');
const bodyParser = require('body-parser');
const router = express.Router({
    caseSensitive: false,
    mergeParams: true,
});
const apiPersonas = require('../db/personas');

router.use('/static', express.static("./static"))

module.exports = router;

router.route("/")
    .get((req, res) => {
        res.send("holaasdsad")
    })
    .post((req, res) => {
        res.json(req.body);
    });

router.route("/listado")
    .get((req, res) => {
        //buscar data y devolverla
        apiPersonas.getAllPersonas(req.db)
            .then((data) => {
                res.render('personas', { personas: data });
            })
            .catch((err) => {
                res.render("ERROR: " + err)
            });
    })

router.route("/personas/save")
    .post((req, res) => {
        //buscar data y devolverla
        console.log("BODY", req.body)
        apiPersonas.insert(req.db, req.body.nombre)
            .then((data) => {
                console.log(data)
                res.send(data);
            })
            .catch((err) => {
                console.log(err)
                res.send("ERROR: " + err)
            });
    })
router.route("/personas/save/:nombre")
    .get((req, res) => {
        //buscar data y devolverla
        console.log("params", req.params)
        apiPersonas.insert(req.db, req.params.nombre)
            .then((data) => {
                console.log(data)
                res.send(data);
            })
            .catch((err) => {
                console.log(err)
                res.send("ERROR: " + err)
            });
    });

