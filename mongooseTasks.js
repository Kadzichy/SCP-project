var mongoose = require('mongoose')
mongoose.connect('mongodb://localhost/test')

var scp = mongoose.model('scp', { name: String })

var kitty = new scp({ name: 'scp-191' })
kitty.save(function (err) {
    if (err) {
        console.log(err)
    } else {
        console.log('...')
    }
})