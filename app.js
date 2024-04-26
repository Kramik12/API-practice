const express = require("express");
const app = express();

app.get("/", (req, res) => {
    res.json({
        result: "Data",
        status: true,
        msg: "Home page"
    });
})

app.get("/about", (req, res) => {
    res.json({
        result: "About us content",
        status: true,
        msg: "About us page"
    });
})

app.get("/login", (req, res) => {
    res.json({
        result: "Login contents",
        status: true,
        msg: "Login page"
    });
})

app.get("/register", (req, res) => {
    res.json({
        result: "Register contents",
        status: true,
        msg: "Register page"
    });
})

//Error handeling
app.use((req, res) => {

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


