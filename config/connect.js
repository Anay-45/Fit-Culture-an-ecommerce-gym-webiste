const mongoose = require('mongoose');
const url ='mongodb+srv://anay:IioR24l1Qnu6ZvZa@cluster0.okabj47.mongodb.net/?retryWrites=true&w=majority'
const connectionParams={
    useNewUrlParser: true,
    useUnifiedTopology: true 
}
module.exports= mongoose.connect(url,connectionParams)
    .then( () => {
        console.log('Connected to database ')
    })
    .catch( (err) => {
        console.error(`Error connecting to the database. \n${err}`);
    })

/*
module.exports = connect = () =>{
    const db = mongoose.connection;
    db.on('connected',() => {
        console.log("connected")
    });
    db.on('error', (err)=> {
        console.log("error" + err)
    });
};
*/