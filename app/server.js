var express =  require('express');
var app = express();
var PORT = process.env.PORT || 3000;

app.use(express.urlencoded({ extended: true}));
app.use(express.json());

var surveyAnswers = [{
    q1:2,
    q2:4
}];

var friendsList = [];

app.get('/', function (req,res){
    res.send('this is the home page')
});

app.get('/survey', function (req,res){
    res.send('this is the survey page')
});

app.get('/api/survey', function (req,res){
    res.json(surveyAnswers)
});

app.get('/api/friends', function (req,res){
    res.json(friendsList)
});

app.post('/api/survey', function (req, res){
    var newFriend = req.body;
    surveyAnswers.push(newFriend);
    res.json(newFriend);
})

app.listen(3000, function (){
    console.log('server running on port 3000');
    
})