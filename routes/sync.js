/**
 * Created by Ankush on 1/3/17.
 */
var express = require('express');
var fs = require('fs');
var fse = require('fs-extra');
var router = express.Router();

router.get('/',function (req,res,next) {
    //res.send("Inside Sync Route");
    fs.watch('/Users/Ankush/projects/test', {encoding: 'string',recursive:true}, (eventType, filename) => {
        if (filename)
        fse.copy('/Users/Ankush/projects/test','/Users/Ankush/projects/target',function (err) {
        if(err){
            return  console.error(err)
        }
        console.log("Done")
    });
    // Prints: <Buffer ...>
    });

    res.send("Process Started");
})

module.exports = router;
