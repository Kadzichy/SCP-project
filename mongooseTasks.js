var mongoose = require('mongoose')
mongoose.connect('mongodb://localhost/test')

var schema = mongoose.Schema({ name: String })
schema.methods.meow = function(){
    console.log(this.get("name") + ": ...")
}

var scp = mongoose.model('scp', schema)

var kitty = new scp({ name: 'Kratos' })
kitty.save(function (err) {
    kitty.meow()
})
