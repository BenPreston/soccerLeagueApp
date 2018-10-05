// This sheet is where I have created all of the calculations to use and then append dat to the website. It's broken down into the following sections:

// 1. League Table 
// 2. Match Reports
// 3. Next Match
// 4. Player Performance and Statistics
// 5. Hide and Show Sections of the Website
// 6. Sign Up
// 7. Fixture List



// 1. League Table The first one is to append the league table to my league table page
    
function appendFixturesAndResults() {
    
    // The below appends the fixtures and results into the table.
    
     
    
function addDatatoResultsTable() {    
    
    for (i=0; i < data.matchesPlayed.length; i++){
        
        var games = data.matchesPlayed;
        
        var myTable = document.getElementById("fixturesAndResults");

        var dateRow = document.createElement("tr");
        
        var dateCol = document.createElement("td");
        
        var emptyCol1 = document.createElement("td");
        
        var timeCol = document.createElement("td");
        
        var scoreRow = document.createElement("tr");
        
        var homeTeamCol = document.createElement("td");
        
        var scoreCol = document.createElement("td");
        
        var awayTeamCol = document.createElement("td");
        
        var mapRow = document.createElement("tr");
        
        var address = document.createElement("td");
        
        var emptyCol2 = document.createElement("td");
        
        var locationMap = document.createElement("td");
        
        
        myTable.appendChild(dateRow);

        dateRow.appendChild(dateCol);
        dateRow.appendChild(emptyCol1);
        dateRow.appendChild(timeCol);
        
        myTable.appendChild(scoreRow);
        
     
        
        scoreRow.appendChild(homeTeamCol);
        scoreRow.appendChild(scoreCol);
        scoreRow.appendChild(awayTeamCol);
        
        dateCol.innerHTML = games[i].date_of_game.substring(0,10);
        
        emptyCol1.innerHTML = "";
        
        timeCol.innerHTML = games[i].date_of_game.substring(11,16);
     
        for (j=0; j < teamStats.length; j++) {
            if (teamStats[j].name == games[i].homeTeamName) {
                
                homeTeamCol.innerHTML = '<img src="' + teamStats[j].logo + '">';
            }
                
        }
        
        
        scoreCol.innerHTML = games[i].homeTeamScore + " - " + games[i].awayTeamScore + " <p>" + games[i].location + "</p>";
        
        awayTeamCol.innerHTML = games[i].awayTeamScore;
        
         for (k=0; k < teamStats.length; k++) {
            if (teamStats[k].name == games[i].awayTeamName) {
                
                awayTeamCol.innerHTML = '<img src="' + teamStats[k].logo + '">';
            }
                
        }
        
        
        myTable.appendChild(mapRow);

        // I HAD A MAP ROW WHICH I'VE DELETED FOR NOW ALTHOUGH MAY PUT BACK
        
//        mapRow.appendChild(address);
//        mapRow.appendChild(emptyCol2);
//        mapRow.appendChild(locationMap);
//        
//        address.innerHTML = games[i].location;
//        locationMap.innerHTML = "insert map";
    }
}

addDatatoResultsTable();
};

 
  appendFixturesAndResults();
  
function appendLeagueTable() {

    teamStats.sort(function(a, b){return b.points - a.points});
    
    
    for (i=0; i < teamStats.length; i++){
        
        var myTable = document.getElementById("leagueTable");
    
 var newRow = document.createElement("tr");
 var teamCol = document.createElement("td");
var playedCol = document.createElement("td");
    var wonCol = document.createElement("td");
    var lostCol = document.createElement("td");
    var drewCol = document.createElement("td");
    var gsCol = document.createElement("td");
    var gcCol = document.createElement("td");
    var pointsCol = document.createElement("td");
    
     myTable.appendChild(newRow);

            newRow.appendChild(teamCol);
            newRow.appendChild(playedCol);
            newRow.appendChild(wonCol);
        newRow.appendChild(drewCol);    
        newRow.appendChild(lostCol);
                
                newRow.appendChild(gsCol);
                newRow.appendChild(gcCol);
                newRow.appendChild(pointsCol);

            teamCol.innerHTML = teamStats[i].name;
        
            playedCol.innerHTML = teamStats[i].played;
        
        wonCol.innerHTML = teamStats[i].won;
        
        drewCol.innerHTML = teamStats[i].drawn;
        
        lostCol.innerHTML = teamStats[i].lost;
        
        gsCol.innerHTML = teamStats[i].scored;
        
        gcCol.innerHTML = teamStats[i].conceeded;
        
        pointsCol.innerHTML = teamStats[i].points;
        
        
    }
    };


appendLeagueTable();

// 2. Match Reports

function createGamesDropDown() {
    
    var match = data.matchesPlayed;
    
    // I want to go to the drop down menu I'm using and for every value of gamesPlayed array I want to insert the games playedID
    
    for (i=0; i < match.length; i++) {
        
    var dropDown = document.getElementById("chooseGame"); 
    
    var gamesPlayedID = match[i].date_of_game.substring(0,10) + ":     " + match[i].homeTeamName + " " + match[i].homeTeamScore + " - " + match[i].awayTeamScore + " " + match[i].awayTeamName;
//    
    
        var listItem = document.createElement("option");
        listItem.text = gamesPlayedID;
        listItem.setAttribute('value', data.matchesPlayed[i].matchID);
        dropDown.add(listItem);
                
    }
     
    }
    
createGamesDropDown();

// This gamesSelector function is used so that when the drop down in the match reports section is clicked relevant data related to the scorers, logos and so on fo the teams in the match report areas is populated
    
function gameSelector() {
    // Get the table from the match report and all of the key variables
    
    var matchReportTable = document.getElementById("matchReportTable");
    
    var homeScore = document.getElementById("homeScore");
    
    var awayScore = document.getElementById("awayScore");
    
    var homeScorers = document.getElementById("homeScorers");
    
    var awayScorers = document.getElementById("awayScorers");
    
    var gameDate = document.getElementById("gameDate");
    
    var gamelocation = document.getElementById("gameLocation");
    
    var homeTeamLogo = document.getElementById("homeTeamLogo");
    
    var awayTeamLogo = document.getElementById("awayTeamLogo");
    
    
    
    
    var homeKeeper = document.getElementById("homeGK");
    
    var awayKeeper = document.getElementById("awayGK");
    
    var homeDef1 = document.getElementById("homeDef1");
    
    var homeDef2 = document.getElementById("homeDef2");
    
    var homeDef3 = document.getElementById("homeDef3");
    
    var homeDef4 = document.getElementById("homeDef4");
    
    var awayDef1 = document.getElementById("awayDef1");
    
    var awayDef2 = document.getElementById("awayDef2");
    
    var awayDef3 = document.getElementById("awayDef3");
    
    var awayDef4 = document.getElementById("awayDef4");
    
    var homeMid1 = document.getElementById("homeMid1");
    
    var homeMid2 = document.getElementById("homeMid2");
    
    var homeMid3 = document.getElementById("homeMid3");
    
    var homeMid4 = document.getElementById("homeMid4");
    
    var awayMid1 = document.getElementById("awayMid1");
    
    var awayMid2 = document.getElementById("awayMid2");
    
    var awayMid3 = document.getElementById("awayMid3");
    
    var awayMid4 = document.getElementById("awayMid4");
    // Get the selector from the index page
    
    var homeAtt1 = document.getElementById("homeAtt1");
    
    var homeAtt2 = document.getElementById("homeAtt2");
    
   var awayAtt1 = document.getElementById("awayAtt1");
    
    var awayAtt2 = document.getElementById("awayAtt2");
    
    
    var dropDown = document.getElementById("chooseGame"); 
    
    // For every value of matchesPlayed if the matchID is equal to the selected value in the selector
    
    for (i=0; i< data.matchesPlayed.length; i++) {
        
        if (data.matchesPlayed[i].matchID == dropDown.value) {
        
            function homeTeamPlayer(number) {
                var teamPlayer = (data.matchesPlayed[i].homeTeamSquad[number].first_name) + " " + (data.matchesPlayed[i].homeTeamSquad[number].last_name);
                
                return teamPlayer;
            } 
            
                function awayTeamPlayer(number) {
                var teamPlayer = (data.matchesPlayed[i].awayTeamSquad[number].first_name) + " " + (data.matchesPlayed[i].awayTeamSquad[number].last_name);
                
                return teamPlayer;
            } 
            
            homeKeeper.innerHTML = homeTeamPlayer(0);
            
            awayKeeper.innerHTML = awayTeamPlayer(0);
            
            homeDef1.innerHTML = homeTeamPlayer(1);
            
            homeDef2.innerHTML = homeTeamPlayer(2);
            
            homeDef3.innerHTML = homeTeamPlayer(3);
            
            homeDef4.innerHTML = homeTeamPlayer(4);
            
            awayDef1.innerHTML = awayTeamPlayer(1);
            
            awayDef2.innerHTML = awayTeamPlayer(2);
            
            awayDef3.innerHTML = awayTeamPlayer(3);
            
            awayDef4.innerHTML = awayTeamPlayer(4);
            
            homeMid1.innerHTML = homeTeamPlayer(5);
            
            homeMid2.innerHTML = homeTeamPlayer(6);
            
            homeMid3.innerHTML = homeTeamPlayer(7);
            
            homeMid4.innerHTML = homeTeamPlayer(8);
            
            awayMid1.innerHTML = awayTeamPlayer(5);
            
            awayMid2.innerHTML = awayTeamPlayer(6);
            
            awayMid3.innerHTML = awayTeamPlayer(7);
            
            awayMid4.innerHTML = awayTeamPlayer(8);
            
            homeAtt1.innerHTML = homeTeamPlayer(9);
            
            homeAtt2.innerHTML = homeTeamPlayer(10);
            
            awayAtt1.innerHTML = awayTeamPlayer(9);
            
            awayAtt2.innerHTML = awayTeamPlayer(10);
            
            // The above was to append all of the players now I want to append things like score and date.
            
            homeScore.innerHTML = data.matchesPlayed[i].homeTeamScore;
            
            awayScore.innerHTML = data.matchesPlayed[i].awayTeamScore;
            
            // The home scorers are multiple people so going to need to iterate through them
            
            var homeScorerArray = [];
            
            for (j=0; j < data.matchesPlayed[i].homeTeamScorers.length; j++) {
                
homeScorerArray.push((data.matchesPlayed[i].homeTeamScorers[j].first_name) + " " +(data.matchesPlayed[i].homeTeamScorers[j].last_name));
            }
            
            
            homeScorers.innerHTML = homeScorerArray;
            
    // Now for the away team array
            
    var awayScorerArray = [];
            
            for (j=0; j < data.matchesPlayed[i].awayTeamScorers.length; j++) {
                
awayScorerArray.push((data.matchesPlayed[i].awayTeamScorers[j].first_name) + " " +(data.matchesPlayed[i].awayTeamScorers[j].last_name));
            }
            
            
            awayScorers.innerHTML = awayScorerArray;
            
            gameDate.innerHTML = data.matchesPlayed[i].date_of_game.substring(0,10);
            
            gamelocation.innerHTML = data.matchesPlayed[i].location;
            
        for (k=0; k < teamStats.length; k++) {
            
            if (teamStats[k].name == data.matchesPlayed[i].homeTeamName) {
               
                homeTeamLogo.innerHTML = '<img src="' + teamStats[k].logo + '">';
                
            }
            
        } 
            
        for (m=0; m < teamStats.length; m++) {
            
            if (teamStats[m].name == data.matchesPlayed[i].awayTeamName) {
               
                awayTeamLogo.innerHTML = '<img src="' + teamStats[m].logo + '">';
                
            }
            
        } 
            

        }
    }
}    

// 3. Next Match

// Here I want to create a function that appends the data of the next match to the webpage

function appendNextMatchData() {
    
    // Get the nextmatch table
    
    var nextMatchTable = document.getElementById("nextMatchTable") 
    
    // Get the data from the upcoming matches and pick point 0 as next match
    
    var nextMatch = data.matchesUpcoming[0];
    
    // First need to set the home and away logo parts in this table
    
    var homeTeam = document.getElementById("homeLogo");
    
    // Then for each team in the teamStats place if home team name is equal to one of them let the homeappend part (new variable) equal the logo image
    
    for (i=0; i < teamStats.length; i++) {
        if (nextMatch.homeTeamName == teamStats[i].name) {
            
            homeTeam.innerHTML = "<img src='" + teamStats[i].logo + "'>";
            
        }
    }
    
    // Then the away logo
    
    var awayTeam = document.getElementById("awayLogo");
    
    for (i=0; i <teamStats.length; i++) {
        if (nextMatch.awayTeamName == teamStats[i].name) {
            
            awayTeam.innerHTML = "<img src='" + teamStats[i].logo + "'>"; 
        }
    }
    
    // Then do the data, the location and the comments
    
    var dateOfGame = document.getElementById("nextGameDate");
    var timeOfGame = document.getElementById("nextGameTime");
    
    
    dateOfGame.innerHTML = nextMatch.date_of_game.substring(0, 10);
    
    timeOfGame.innerHTML = nextMatch.date_of_game.substring(11, 16);
    
    // Then address and map
    
    var nextGameAddress = document.getElementById("nextGameAddress");
    
    var nextGameMap = document.getElementById("nextGameMap");
    
    for (i=0; i < data.gameLocations.length; i++) {
        
        if (data.gameLocations[i].name == nextMatch.location) {
            
           nextGameAddress.innerHTML = nextMatch.location + ", " + data.gameLocations[i].address; 
        
            
          nextGameMap.innerHTML = data.gameLocations[i].iframe;  
        }
        
    }
    
    // I NEED TO UPDATE THAT ADD TO CAL BUTTON AS RIGHT NOW ITS NOT WORKING BUT I'LL DO IT LATER
    
//    var coachesNotes = document.getElementById("coachesNotes");
//    
//    coachesNotes.innerHTML = nextMatch.comments;
//    
//    // The following code is designed to add the correct data to the the add event button
//    
//    var startForCal = document.getElementById("startForCal");
//    
//    startForCal.innerHTML = nextMatch.date_of_game;
//    
//    var endForCal = document.getElementById("endForCal");
//    
//    endForCal.innerHTML = nextMatch.date_of_game;
    
}

appendNextMatchData();

// 4. Player Performance and Statistics

// This first function on calculatingPlayerPerformanceData works out exactly how each player has performed in terms of offensive, defensive, dribling and so on.

function calculatePlayerPerformanceData(playerID) {
    
    
    // Offensive Data
    var offensiveDrills = 0;
    var offensiveAttempts = 0;
    var offensiveCompleted = 0;
    
    // Defensive Data
    var defensiveDrills = 0;
    var defensiveAttempts = 0;
    var defensiveCompleted = 0;
    
    // Fitness Data
    var fitnessDrills = 0;
    var fitnessAttempts = 0;
    var fitnessCompleted = 0;
    
    //  Goalkeeping Data
    var goalkeepingDrills = 0;
    var goalkeepingAttempts = 0;
    var goalkeepingCompleted = 0;
    
    // passing Data
    var passingDrills = 0;
    var passingAttempts = 0;
    var passingCompleted = 0;
    
    // dribbling Data
    var dribblingDrills = 0;
    var dribblingAttempts = 0;
    var dribblingCompleted = 0;
    
    var stats = data.coachingStatistics;
    
    for (i=0; i < stats.length; i++) {
        
        if (stats[i].playerID == playerID) {
            
            if (stats[i].typeOfDrill == "OFFENSIVE") {
                
                offensiveDrills += 1;
         
                offensiveAttempts += stats[i].attemps;
                
                offensiveCompleted += stats[i].completed
                
            }
            
            if (stats[i].typeOfDrill == "FITNESS") {
                
                fitnessDrills += 1;
         
                fitnessAttempts += stats[i].attemps;
                
                fitnessCompleted += stats[i].completed
                
            }

            if (stats[i].typeOfDrill == "GOALKEEPING") {
                
                fitnessDrills += 1;
         
                goalkeepingAttempts += stats[i].attemps;
                
                goalkeepingCompleted += stats[i].completed
                
            }
            
           if (stats[i].typeOfDrill == "DEFENSIVE") {
                
                fitnessDrills += 1;
         
                defensiveAttempts += stats[i].attemps;
                
                defensiveCompleted += stats[i].completed
                
            }
            
          if (stats[i].typeOfDrill == "DRIBBLING") {
                
                fitnessDrills += 1;
         
                dribblingAttempts += stats[i].attemps;
                
                dribblingCompleted += stats[i].completed
                
            }
            
             if (stats[i].typeOfDrill == "PASSING") {
                
                fitnessDrills += 1;
         
                passingAttempts += stats[i].attemps;
                
                passingCompleted += stats[i].completed
                
            }    
        }
        
    } 
    
         var ofDrill = document.getElementById("playerOffensive");
    
    ofDrill.innerHTML = "Out of " + offensiveDrills + " attempts " + (offensiveCompleted / offensiveAttempts).toFixed(2) +"% success rate";
    
             var defDrill = document.getElementById("playerDefensive");
    
    defDrill.innerHTML = "Out of " + defensiveDrills + " attempts " + (defensiveCompleted / defensiveAttempts).toFixed(2) +"% success rate";
    
                var dribDrill = document.getElementById("playerDribbling");
    
    dribDrill.innerHTML = "Out of " + dribblingDrills + " attempts " + (dribblingCompleted / dribblingAttempts).toFixed(2) +"% success rate";
    
}


// This is supposed to fix the data into the table but I don't think it works and I need to look at it tomorrow PROBLEM TO BE SOLVED - BARG

var dropDown = document.getElementById("choosePlayer").addEventListener("change", function() {
    playerSelector(document.getElementById("choosePlayer").value);
});


function createPlayerDropDown() {
   dropDown = document.getElementById("choosePlayer");
    var players = data.children;
    
    // I want to go to the drop down menu I'm using and for every value of gamesPlayed array I want to insert the games playedID
    
    
    
    for (i=0; i < players.length; i++) {
        
   
    
    var playerID = players[i].first_name + " " + players[i].last_name
//    
    
        var listItem = document.createElement("option");
        listItem.text = playerID;
        listItem.setAttribute('value', data.children[i].childID);
        dropDown.add(listItem);
                
    }
     
    }

createPlayerDropDown();
   
// This is the player selector element designed to enable me to append specific data related to a player in the drop down

function playerSelector(playerID) {
    
    for (i=0; i < data.children.length; i++) {
        if (playedID == data.children[i].childID) {
            
            var childName = document.getElementById("playerName");
            
            childName.innerHTML = 
            data.children[i].first_name + " " + data.children[i].last_name;
            
        }
    }
    
}

// 5. Hide and Show Sections of the Website

// This section enables me to show and hide different parts of the site depending on what I click in the Navbar

function hideSections(visible) {
    var x = document.getElementsByClassName("section");
    console.log(x);
    for (i=0; i < x.length; i++) {
            x[i].style.display="none";
         }
    console.log( document.getElementsByClassName(visible)[0]);
   document.getElementsByClassName(visible)[0].style.display="block";
     
}
    
hideSections("homePage");

// There are two of these - this is because I actually had to use two drop down lists to get the icon logo for login and sign up but they do the same thing

document.getElementById("navbarLinks").addEventListener("click", function(event){
    console.log(event.target.getAttribute("data-view"));
    hideSections(event.target.getAttribute("data-view"));
});

document.getElementById("navbarLinks2").addEventListener("click", function(event){
    console.log(event.target.getAttribute("data-view"));
    hideSections(event.target.getAttribute("data-view"));
});

// This one also does the same thing as above but works for the buttons in the home page

document.getElementById("buttonLinks").addEventListener("click", function(event){
    console.log(event.target.getAttribute("data-view"));
    hideSections(event.target.getAttribute("data-view"));
});

// 6. Sign Up

// This is supposed to work with the sign up page but this doesn't currently work and is a problem that needs to be solved. BARG

function signUp() {
   
    var signUpDetails = document.getElementsByTagName("input");
   
    console.log(signUpDetails);
    firebase.auth().createUserWithEmailAndPassword(signUpDetails[5].value, signUpDetails[4].value).then(function (user) {
       console.log("OK" + user);
   }).catch(function(error) {
  // Handle Errors here.
  var errorCode = error.code;
  var errorMessage = error.message;
  console.log("Login Not Working");
});
    
}
document.getElementById("signUpSubmit").addEventListener("click", function() {
    signUp();
});

// 7. Fixture List

// This works out my upcoming fixtures and appends them to the main table

function fixtureCreator() {
    
    x = data.matchesUpcoming;
        
        var fixturesTable = document.getElementById("comingFixtures");  
    
    for (i=0; i < x.length; i++) {
     
  
        
    var newRow = document.createElement("tr");
        
//    var homeTeam = document.createElement("td");
//        var awayTeam = document.createElement("td");
        
    var match = document.createElement("td");         
    var gameDate = document.createElement("td");
    
    var gameTime = document.createElement("td");
    
    var location = document.createElement("td"); 
        
   fixturesTable.appendChild(newRow);
   newRow.appendChild(match);
        
//        newRow.appendChild(homeTeam);
//        newRow.appendChild(awayTeam);


    newRow.appendChild(gameDate);
    newRow.appendChild(gameTime);
    newRow.appendChild(location);
        
//        homeTeam.innerHTML = x[i].homeTeamName;
//        awayTeam.innerHTML = x[i].awayTeamName;
        
        match.innerHTML = x[i].homeTeamName + " - " + x[i].awayTeamName;
        
        gameDate.innerHTML = x[i].date_of_game.substring(5,10);
        gameTime.innerHTML = x[i].date_of_game.substring(11,16);
        location.innerHTML = x[i].location;
     
    
        
    }
    
}

fixtureCreator();

calculatePlayerPerformanceData(200);