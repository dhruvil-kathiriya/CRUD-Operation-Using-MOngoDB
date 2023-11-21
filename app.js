const express = require('express');
// const db = require('./config/mongoose');
const mongoose = require('mongoose');

mongoose.connect(("mongodb+srv://dskathiriya:Dhruvil156@cluster0.q17dt2h.mongodb.net/FirstDB"), {
    useUnifiedTopology: true,
    useNewUrlParser: true
})
    .then(() => console.log('Database Connected'))
    .catch((err) => console.log(err));

const Student = require('./models/Student');
const path = require('path');
const port = 8001;
const app = express();
app.use(express.urlencoded());

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

app.use('/uploads', express.static(path.join(__dirname, "uploads")))


app.use("/", require("./routes/index"))
app.use("/post", require("./routes/post"))

app.listen(port, function (err) {
    if (err) {
        console.log(err);
    }
    console.log(`Server Working on port ${port}`);
})

