/**
 * Created by Ankush on 1/3/17.
 */
var express = require('express');
var router = express.Router();

router.get('/',function (req,res,next) {
    res.send("Inside Sync Route");
})

module.exports = router;
