const express = require("express");
const app = express();
require('./config/mpngo.config');
const routes = require("./routes");


app.use('/assets', express.static(process.cwd()+"/uploads"));
app.set('view engine', 'pug');
app.set('views', process.cwd()+"/views");



//convert the incoming json data to request body data
app.use(express.json());
app.use(express.urlencoded({
    extended: false
}));

app.use("/api/v1", routes);

let router = express.Router();


app.use(router);

//Error handeling
app.use((req, res, next) => {

    //404
    
    //render()
    //sendStatus()
    //json()
    //download()
    //send()
    //sendFile()
    //end()

    res.status(404).json({
        result: null,
        status: false,
        msg: "Not found"
    });
});

app.use((err, req, res, next) => {
    let status_code = err?.status || 500;
    let msg = err?.msg || "Error";

    res.status(status_code).json({
        result: null,
        status: false,
        msg: msg 
    })
})

app.set("PORT", 3001)

app.listen(app.get('PORT'), "localhost", (err) => {
    if(err){
        console.log("Server connection error");
    } else {
        console.log("Server is listening to port: 3001")
        console.log("Press CTRL+C to end server connection")
    }

});


