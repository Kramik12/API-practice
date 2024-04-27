const express = require("express");
const app = express();

const routes = require("./routes");

// route mount
app.use(routes);

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


