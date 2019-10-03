var express =  require('express');
var app = express();

app.get('/', function (req,res){
    res.send('this is the home page')
});

app.get('/survey', function (req,res){
    res.send('this is the survey page')
});

app.get('/api/survey', function (req,res){
    res.send('this is the survey data')
});

app.listen(3000, function (){
    console.log('server running on port 3000');
    
})

app.post('/api/survey', function (req, res){
    res.send('this is api for surveys post route')
})