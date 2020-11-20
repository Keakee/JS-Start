//connecting installed module through the require command
let express = require('express');
//creating new object экземпляр класса express
let app = express();

const port = 3000;
const framework = 'express';
app.use(express.static('public'));

// Launch Templator
app.set('view engine', 'pug');

app.listen(3000, function(){
    console.log(`node express working on ${port}`);
});

//Next, to launch the first app
//get - метод  обращения

app.get('/', function(request, response){
    // response.end('<h1>Hello</h1> my first indie website');
    response.render('main', {
        port: port,
        year: 2020,
        framework: framework
    });
});

// app.get('/categories', function(request, response){
//     response.end('<h1>Categories</h1>');
// });