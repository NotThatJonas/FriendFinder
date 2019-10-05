var express =  require('express');
var router = express.Router();

// Link in Friends Data
var friendsData = require('../data/friends.js');

//data routes for api
router.get('/survey', function (req,res){
    res.json(friendsData)
});

//data routes for api
router.get('/friends', function (req,res){
    res.json(friendsData)
});


//creates new friend based on who has filled out form
router.post('/friends', function (req, res){
    var newFriend = {
        name: req.body.name,
        photo: req.body.photo,
        scores: []
      };
      
    
    console.log('friends', friendsData);
    var bestMatch = {
        name: "",
        photo: "",
        friendDifference: Infinity
    }
    var totalDifference;

      for (let i = 0; i < friendsData.length - 1; i++) {
        var possibleMatches = friendsData;
        totalDifference = 0;
        var currentFriend = friendsData[i];
        var absoluteDifference = [];
        for (let j = 0; j < currentFriend.scores.length; j++) {
        
           var currentUser = friendsData[friendsData.length - 1];
           var answerDifference = Math.abs(currentFriend.scores[j] - currentUser.scores[j]);
           absoluteDifference.push(answerDifference)
            
        }
        
        var reducedDifference = absoluteDifference.reduce(reduceFunction)
        console.log('red', reducedDifference);
        if (reducedDifference < bestMatch.friendDifference){
            bestMatch.name = friendsData[i].name;
            bestMatch.photo = friendsData[i].photo;
            // bestMatch.friendDifference = absoluteDifference[i];
        }
        
       
          
      }
      

      friendsData.push(newFriend);
  
})

function reduceFunction(total, num) {
    return total + num;
  }


module.exports = router;