const express = require('express');
// const {
//     response
// } = require('express');
const server = express();
const hbs = require('express-handlebars');



server.engine(
    'hbs',
    hbs({
        extname: 'hbs',
        defaultLayout: 'layout',
        layoutsDir: __dirname + '/views/layouts',
        partialsDir: __dirname + '/views/partials'
    })
);

server.set('view engine','hbs');

server.use(express.static(__dirname + "/public"));

let context = {name : 'amy'}

server.get("/", (req, res) => {
    res.status(200).render('index',context)

});

server.listen(3000, () => {
    console.log("this server is running in port 3000");
});