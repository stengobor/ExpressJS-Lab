const express = require("express");
const path = require("path");
const fs = require("fs");
// const usersPath = path.join(__dirname, "login-info.json");
let app = express();


app.use(express.json());
app.use(express.urlencoded({encoded: true}));

app.use((req, res, next) => {
    console.log(req.url);
    next();
});

app.post("/user-info", (req, res) => {
    console.log(req.body);
    
    fs.writeFile('loginfo.json', JSON.stringify(req.body), (err) => console.log(err));

    res.send('Thanks for logging in!');
});


app.use(express.static(path.join(__dirname, "../public")));
    
    
app.listen(3000, () => console.log('hello from the web server...'));



// app.get('/', (req, res) => {
//     res.sendFile(path.join(__dirname, '../public/index.html'));
// });

// app.get('/css/style.css', (req, res) => {
//     res.sendFile(path.join(__dirname, '../public/css/style.css'));
// });
