const express = require('express');
const bodyParser = require('body-parser');
const router = express.Router({
    caseSensitive: false,
    mergeParams: true,
});
const apiPersonas = require('../db/personas');

router.use(bodyParser.urlencoded({extended : false}));
router.use(bodyParser.json());
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
        apiPersonas.getAllPersonas()
           .then((data) => {
                res.render('personas', { personas: JSON.parse(data) });
           })
           .catch((err) => {
                res.render("ERROR: " + err)
           });
    })

