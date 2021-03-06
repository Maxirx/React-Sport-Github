require("dotenv").config();
const cors = require("cors");
const express = require("express");
require("./config/database");
const passport = require("passport");
const Router = require("./routes/routes");
const goodsRouter = require("./routes/goodsRoutes");
const brandRouter = require("./routes/brandRutes");
const path = require('path')
const PORT = process.env.PORT || 4000
const HOST = process.env.HOST || "0.0.0.0"

const app = express();



//Midleware
app.use(cors());
app.use(express.json());
app.use(passport.initialize());
app.use("/api", Router);
app.use("/api", goodsRouter);
app.use("/api", brandRouter);

if (process.env.NODE_ENV === 'production') {
    app.use(express.static('client/build'))
    app.get("*", (req, res) => {
        res.sendFile(path.join(__dirname + '/client/build/index.html'))
    })
}

app.listen(process.env.PORT || 4000, process.env.HOST || '0.0.0.0', () => console.log(`Server ready on ${process.env.PORT || 4000}`))