var mongoose = require('mongoose')
mongoose.connect('mongodb://localhost/test1')
var scp = require("./models/scp").scp


var scp = new scp({
title: "scp-191",
nick: "scp-191"
})


console.log(scp)
scp.save(function(err, scp, affected){
    console.log(scp.title)
})
