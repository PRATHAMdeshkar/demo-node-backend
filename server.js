const express = require("express");
const connectDb = require("./config/dbConnections");
const dotenv = require("dotenv").config()

connectDb();

const app =express();

const port = process.env.PORT || 5000;

app.use(express.json());
app.use("/api/events", require("./routes/eventRoutes"));
app.use("/api/users", require("./routes/usersRoutes"));


app.listen(port, () =>{
    console.log(`Server running on port ${port}`);
});