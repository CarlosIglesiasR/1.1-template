const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/database01', {
    useUnifiedTopology : true,
    useNewUrlParser : true,
    useFindAndModify : false
})
.then (db => console.log('DB is connected'))
.catch(err => console.log(err))