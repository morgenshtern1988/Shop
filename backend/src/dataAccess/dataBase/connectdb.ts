const mongoose = require('mongoose');

export let a = mongoose.connect("http://mongodb://localhost:27017/shopDb")
    .then(() => console.log("goood)"))
    .catch( () => console.log('error'))


  