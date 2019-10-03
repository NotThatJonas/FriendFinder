var express =  require('express');
var router = express.Router();
var path = require('path');

// createing arrays to push object to
var surveyAnswers = [{
    q1:2,
    q2:4
}];

var friendsList = [];


//data routes for api
router.get('/survey', function (req,res){
    res.json(surveyAnswers)
});

//data routes for api
router.get('/friends', function (req,res){
    res.json(friendsList)
});

//creates new friend based on who has filled out form
router.post('/survey', function (req, res){
    var newFriend = req.body;
    surveyAnswers.push(newFriend);
    res.json(newFriend);
})


module.exports = router;