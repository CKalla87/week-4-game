
$(document).ready(function(){
    
    //Setting randomg number type//
    var randomNumber= Math.floor(Math.random()*101)+19;
    //Setting Crystal Variable//
    var blueCrystal= Math.floor(Math.random()*11)+1;
    var purpleCrystal= Math.floor(Math.random()*11)+1;
    var redCrystal= Math.floor(Math.random()*11)+1;
    var whiteCrystal= Math.floor(Math.random()*11)+1;
    //Setting Score Variables//
    var Wins= 0;
    var Losses= 0;
    var totalScore= 0;
    
    //Appending Radom Number Variable//
    $("#totalToWin").html(randomNumber);

    //Appending Wins & Losses//
    $("#wins").html("Wins: " + Wins);
    $("#losses").html("Losses: " + Losses);
    $("#scoreNumber").html(totalScore);
    
    //Reset function//
    function reset() {
        randomNumber= Math.floor(Math.random()*101)+19;
        $('#totalToWin').html(randomNumber);
        
        totalScore= 0;
        $("#scoreNumber").html(totalScore);
        
        blueCrystal= Math.floor(Math.random()*11)+1;
        $("#blueCrystal").html(blueCrystal);
        
        purpleCrystal= Math.floor(Math.random()*12)+1;
        $("#purpleCrystal").html(purpleCrystal);
        
        redCrystal= Math.floor(Math.random()*12)+1;
        $("#redCrystal").html(redCrystal);
        
        whiteCrystal= Math.floor(Math.random()*12)+1;
        $("#whiteCrystal").html(whiteCrystal);

        //Game Over Condition, Resets The Game
        if (Wins === 10) {
            Wins= 0;
            Losses=0;
            $("#wins").html("Wins: " + Wins);
            $("#losses").html("Losses:" + Losses);
            alert("Game Over! The Force Is Strong With You!")
        } else if (Losses === 10) {
            Wins= 0;
            Losses=0;
            $("#wins").html("Wins: " + Wins);
            $("#losses").html("Losses:" + Losses);
            alert("Game Over! You Could Do Better Next Time!")
        }
    };
    
    //Tally function for wins and losses//
    function Winner() {
        alert("Look At You Go! You Won!");
        Wins++;
        $("#wins").html("Wins: " + Wins);
        reset();
    }

    function Loser() {
        alert("Bummer, Sorry You Lost!");
        Losses++;
        $("#losses").html("Losses: " + Losses);
        reset();
    }

   
    //Crystal Click Function//
    $("#blueCrystal").on('click', function() {
        totalScore = totalScore + blueCrystal;
        console.log("NewTotalScore: " + totalScore);
        $("#scoreNumber").html(totalScore);
        if (totalScore === randomNumber){
            Winner();
        } else if ( totalScore > randomNumber) {
            Loser();
        }
    });    
    
    $("#purpleCrystal").on('click', function() {
        totalScore = totalScore + purpleCrystal;
        console.log("NewTotalScore: " + totalScore);
        $("#scoreNumber").html(totalScore);
        if (totalScore === randomNumber){
            Winner();
        } else if ( totalScore > randomNumber) {
            Loser();
        }
    });    

    $("#redCrystal").on('click', function() {
        totalScore = totalScore + redCrystal;
        console.log("NewTotalScore: " + totalScore);
        $("#scoreNumber").html(totalScore);
        if (totalScore === randomNumber){
            Winner();
        } else if ( totalScore > randomNumber) {
            Loser();
        }
    });    
        
    $("#whiteCrystal").on('click', function() {
        totalScore = totalScore + whiteCrystal;
        console.log("NewTotalScore: " + totalScore);
        $("#scoreNumber").html(totalScore);
        if (totalScore === randomNumber){
            Winner();
        } else if ( totalScore > randomNumber) {
            Loser();
        }
    });
});