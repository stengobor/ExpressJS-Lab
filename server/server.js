const express = require("express");
const path = require("path");
let app = express();

app.use((req, res, next) => {
    console.log(req.originalUrl);
    next();
});

app.get("/", (req, res) => {
    res.send('Hello from the web server side...');
});

app.use(express.static(path.join(__dirname, "../public")));



app.listen(3000);


// app.use("/order/:name", (req, res) => {
//   let name = req.params.name;
//   let email = req.query.email;
//   res.send(`Your name is ${name} and your email is ${email}`);
// });

// app.get('/', (req, res) => {
//     res.sendFile(path.join(__dirname, '../public/index.html'));
// });

// app.get('/css/style.css', (req, res) => {
//     res.sendFile(path.join(__dirname, '../public/css/style.css'));
// });
