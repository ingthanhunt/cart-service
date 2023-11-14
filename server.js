const express = require("express");
const bodyParser = require("body-parser")

const items = require('./routes/items');

const PORT =  3001;

const app = express();
app.use(express.static("client"));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

app.use("/api/v1/items", items);

const server = app.listen(PORT, console.log('Server running in ', process.env.NODE_ENV, ' mode on port ', PORT));

//Handle unhandled promise rejections
process.on('unhandledRejection', (err, promise)=>{
    console.log(`Error: ${err.message}`);
    //Close sever & exit process
    server.close(()=>process.exit(1));
})