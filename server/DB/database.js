const mongoose = require("mongoose");

const connectToDb = async () => {
    mongoose
        .connect(process.env.DB_CONNECTION, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        })
        .then(() => {
            console.log("Connected to DataBase");
        })
        .catch((err) => {
            console.log(err);
        });
};



module.exports = connectToDb;
