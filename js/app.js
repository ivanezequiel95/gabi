const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const router = express.Router();

router.use(bodyParser.urlencoded({extended : false}));
router.use(bodyParser.json());

router.route("/funca")
    .get((req, res) => {
        res.send("es un get")
    })
    .post((req, res) => {
        res.send(req.body);
    });

app.use(router);
app.listen(3000);