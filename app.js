const express = require("express");
const app = express();

const routes = require("./routes");

//Middleware
/*
a. Application Level middleware
b. Routing Level Middleware
c. Custom Middleware
d. Builtin Middleware
e. Error Handeling Middleware
f. Thirdparty Middleware
*/ 

app.use('/assets', express.static(process.cwd()+"/uploads"));
app.set('view engine', 'pug');
app.set('views', process.cwd()+"/views");



//convert the incoming json data to request body data
app.use(express.json());
app.use(express.urlencoded({
    extended: false
}));

app.get("/", (req, res, next) => {
    let name= "Kramik";
    res.render('index', {name: name});
})

app.use("/api/v1", routes);

let router = express.Router();

router.get("/contact", (req, res, next) => {

})

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

app.listen(3001, "localhost", (err) => {
    if(err){
        console.log("Server connection error");
    } else {
        console.log("Server is listening to port: 3001")
        console.log("Press CTRL+C to end server connection")
    }

});


