const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const router = express.Router();

router.use(bodyParser.urlencoded({extended : false}));
router.use(bodyParser.json());
router.use('/estatico', express.static("./app"))

router.route("/funca")
    .get((req, res) => {
        res.json("es un get")
    })
    .post((req, res) => {
        res.json(req.body);
    });

app.use(router);
app.listen(3000);