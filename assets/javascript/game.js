
$(document).ready(function(){
    
    //Setting randomg number type//
    var randomNumber= Math.floor(Math.random()*100+19);
    //Setting Crystal Variable//
    var blueCrystal= Math.floor(Math.random()*11+1);
    var purpleCrystal= Math.floor(Math.random()*11+1);
    var redCrystal= Math.floor(Math.random()*11+1);
    var whiteCrystal= Math.floor(Math.random()*11+1);
    //Setting Score Variables//
    var Wins= 0;
    var Losses= 0;
    var totalScore= 0;

    //Appending Radom Number Variable//
    $("#totalToWin").text(randomNumber);

    //Appending Wins & Losses//
    $("#wins").text("Wins: " + Wins);
    $("#losses").text("Losses: " + Losses);
    $("#scoreNumber").text(totalScore);
    
    //Reset function//
    function reset() {
        randomNumber= Math.floor(Math.random()*100+19);
        console.log(randomNumber);
        ('#totalToWin').text(randomNumber);
        blueCrystal= Math.floor(Math.random()*11+1);
        purpleCrystal= Math.floor(Math.random()*11+1);
        redCrystal= Math.floor(Math.random()*11+1);
        whiteCrystal= Math.floor(Math.random()*11+1);
        totalScore= 0;
        $('#scoreNumber').text(totalScore);
    }
    
    //Tally function for wins and losses//
    function Winner() {
        alert("You Won!");
        Wins++;
        $("#wins").text("Wins: " + Wins);
        reset();
    }

    function Loser() {
        alert("You Lose!");
        Losses++;
        $("#losses").text("Losses: " + Losses);
        reset();
    }

   
    //Crystal Click Function//
    $("#blueCrystal").on('click', function() {
        totalScore = totalScore + blueCrystal;
        console.log("NewTotalScore: " + totalScore);
        $("#scoreNumber").text(totalScore);
        if (totalScore === randomNumber){
            Winner();
        } else if ( totalScore > randomNumber) {
            Loser();
            randomNumber= Math.floor(Math.random()*100+19);
            ("#totalToWin").text(randomNumber);
        }
    });    
    
    $("#purpleCrystal").on('click', function() {
        totalScore = totalScore + blueCrystal;
        console.log("NewTotalScore: " + totalScore);
        $("#scoreNumber").text(totalScore);
        if (totalScore === randomNumber){
            Winner();
        } else if ( totalScore > randomNumber) {
            Loser();
        }
    });    

    $("#redCrystal").on('click', function() {
        totalScore = totalScore + blueCrystal;
        console.log("NewTotalScore: " + totalScore);
        $("#scoreNumber").text(totalScore);
        if (totalScore === randomNumber){
            Winner();
        } else if ( totalScore > randomNumber) {
            Loser();
        }
    });    
        
    $("#whiteCrystal").on('click', function() {
        totalScore = totalScore + blueCrystal;
        console.log("NewTotalScore: " + totalScore);
        $("#scoreNumber").text(totalScore);
        if (totalScore === randomNumber){
            Winner();
        } else if ( totalScore > randomNumber) {
            Loser();
        }
    });
});