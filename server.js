var express =  require('express');
var app = express();
var PORT = process.env.PORT || 3000;

app.use(express.urlencoded({ extended: true}));
app.use(express.json());

var htmlRoutes = require('./routing/htmlRoutes')
app.use(htmlRoutes)

var apiRoutes = require('./routing/apiRoutes')
app.use('/api', apiRoutes)

//listen setiu for a request
app.listen(PORT, function() {
    console.log("App listening on PORT " + PORT);
});