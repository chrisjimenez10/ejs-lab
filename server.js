const express = require("express")
const app = express();

const morgan = require("morgan");
app.use(morgan("dev"));

const port = 3000;

app.get("/", (req, res)=>{
    res.send("Hello There!");
});

app.listen(port, ()=>{
    console.log(`Listening on Port ${port}`);
})