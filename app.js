//connecting installed module through the require command
let express = require('express');
//creating new object экземпляр класса express
let app = express();

let port = 3000;

app.listen(3000, function(){
    console.log(`node express working on ${port}`);
});

//Next, to launch the first app
//get - метод  обращения

app.get('/', function(request, response){
    response.end('<h1>Hello</h1> my first indie website');
});

app.get('/categories', function(request, response){
    response.end('<h1>Categories</h1>');
});