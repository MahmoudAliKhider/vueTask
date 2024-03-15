const express = require("express");
require("dotenv").config();
const cors = require("cors");
const session = require("express-session");
const passport = require("passport");

const dbConfig = require("./DB/database");

dbConfig();

const app = express();
app.use(express.json());
app.use(cors());

app.use(session({
    secret: process.env.SESSION_SECRET,
    resave: true,
    saveUninitialized: true,
}));


app.use(passport.initialize());
app.use(passport.session());


app.use("/api/v1/auth", require("./Routes/authRoutes"));

const port = process.env.PORT || 5001;
app.listen(port, () => {
    console.log(`Server listening on port ${port}`);
});
