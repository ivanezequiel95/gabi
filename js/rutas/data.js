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

