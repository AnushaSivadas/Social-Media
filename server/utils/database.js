const mongoose = require('mongoose');


mongoose.connect('mongodb+srv://anushasivadas37:xnmvOT1uyW3LRmnr@cluster0.2ckgmzy.mongodb.net/test')
.then(()=>{
    console.log("CONNECTION OPEN!!!")
})
.catch(err=>{
    console.log("OH NO ERROR!!!!")
    console.log(err)
})

