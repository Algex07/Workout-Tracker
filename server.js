// create workout model 
// get the view.js working by getting the exercise.html and stats.html (reference class work)
// work on api.js to get api routes working 
// referencing api.js in the PUBLIC folder match your routes in api.js in ROUTES folder to connect those end points
// look up MONGODB aggregate functions

// GET SERVER.JS running first
const express = require("express");
const logger = require("morgan");
const mongoose = require("mongoose");
// const router = require("./routes")

const PORT = process.env.PORT || 3000;

const app = express();

app.use(logger("dev"));
app.use(express.urlencoded({extended:true}));
app.use(express.json());
app.use(express.static("public"));
// app.use(router);

mongoose.connect(
    process.env.MONGODB_URI || "mongodb://localhost/Workout-Trackerdb", {
    useNewUrlParser:true,
    useUnifiedTopology:true,
    useCreateIndex: true,
    useFindAndModify: false
}
);
app.use(require("./routes/api.js"));
app.use(require("./routes/view.js"));

app.listen(PORT, () => {
    console.log(`App listening on port ${PORT}!`)
});
