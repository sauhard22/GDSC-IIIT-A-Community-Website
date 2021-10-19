const express       =require('express'),
      bodyParser    = require('body-parser'),
      mongoose      = require('mongoose'),     
      Event        = require("./models/event");

const eventRoutes = require("./routes/events");


const app = express();
require('dotenv').config();

app.use(bodyParser.json({limit: "30mb",extended:true}))
app.use(bodyParser.urlencoded({limit:"30mb",extended:true}))

const url = process.env.MONGODB_URI || 3000;

/*mongoose.connect(url, {
    useNewUrlParser: true,
    useCreateIndex: true,
    useFindAndModify: false,
    useUnifiedTopology: true
}, () => {
    console.log("Connected to database.");
});*/

mongoose.connect(url, {
    useNewUrlParser: true,
    useUnifiedTopology: true})   
.then(() => console.log("Connected to database."))
.catch(err => console.log(err));


app.use("/events",eventRoutes);

const port = process.env.PORT || 3000;

app.listen(port, process.env.IP, () => {
    console.log("showing on port 3000.");
});

