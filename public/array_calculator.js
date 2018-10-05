// In my JSON nysl_data_made_by_ben.js I have built a list of 300 random parents, 400 random children, 18 old matches and 18 future matches. This data is randomised as if this was a local geographic area.

// To make this data useful I have built a function which assigns each of my squads with a full squad of 17 players. It then works out the goalscorers in every previous match randomly assigning players based on the score.

// This is a separate js sheet as in reality in a real application this functionality would really be a waste of time as the data would be real....however I needed it to have data to use

    var nyslSquads = [
    // All six squads called
]

function workoutOldData() {


    
function getFullSquads(squad) {

// So first up I want to build a squad generator. This will create a squad of 2 keepers, 6 defenders, 6 midfielders and 4 attackers for each team
    
// First set up a squad variable

var thisSquad = [];


// Go through the main data and split them into relevant squads arrays

for (i=0; i < data.children.length; i++) {
    if (data.children[i].team == squad ) {
        thisSquad.push(data.children[i]) 
    }
}    
    

// Then for each squad go through and push the first two keepers to a new team array

var finalSquad = [];    
    
var GK = 2;
var DF = 6;
var MF = 6;
var AT = 3;
    
for (i=0; i < thisSquad.length; i++) {

    // for each position if it's corresponding variable is > 0 push the element to the final squad array and minus 1 from the corresponding variabel.
    
    // first do the keepers
    
    if ((thisSquad[i].position == "goalkeeper") && (GK > 0 )) {
       
       thisSquad[i].position_num = 1; finalSquad.push(thisSquad[i]);
        GK -= 1;
    } 
    
    // Then push six defenders
    
    else if ((thisSquad[i].position == "defence") && (DF > 0 )) {
       
       thisSquad[i].position_num = 2; finalSquad.push(thisSquad[i]);
        DF -= 1;
    } 
    
    // Then do midfield

   else if ((thisSquad[i].position == "midfield") && (MF > 0 )) {
       
       thisSquad[i].position_num = 3;
    finalSquad.push(thisSquad[i]);
        MF -= 1;
    } 

    // Then do attack

    else if ((thisSquad[i].position == "attack") && (AT > 0 )) {
       
       thisSquad[i].position_num = 4; finalSquad.push(thisSquad[i]);
        AT -= 1;
    } 
    
    var finalSquad = finalSquad.sort(function (a, b) {
        return a.position_num - b.position_num
    })
    
}    
  
nyslSquads.push({name: squad, players: finalSquad});

    }

getFullSquads("U1");
getFullSquads("U2");
getFullSquads("U3");
getFullSquads("U4");
getFullSquads("U5");
getFullSquads("U6");


function makeOldGameData() {
    // Go through every record in old games
    
 for (i=0; i < data.matchesPlayed.length; i++) {

     var homeTeam = [];
     var awayTeam = [];
        
 
         var keeper = Math.floor(Math.random() * 2);
     
     var defence1 = Math.floor(Math.random() * 3) + 2;
     
     var defence2 = Math.floor(Math.random() * 3) + 5;
   
     var midfield1 = Math.floor(Math.random() * 3) + 8;
     
     var midfield2 = Math.floor(Math.random() * 3) + 11;
   
    var attack = Math.floor(Math.random() * 3) + 14;
     
     // Then I loop through all of the teams to find the right squad
    
for (j=0; j < nyslSquads.length; j++){
    if (nyslSquads[j].name == data.matchesPlayed[i].homeTeamName) {
               
    // Go through that squad and copy everything except the variables named above
        
        for (k=0; k <  nyslSquads[j].players.length; k++)
          
    {
          if (k != keeper && k != defence1 && k != defence2 && k != midfield1 && k != midfield2 && k != attack)
          { data.matchesPlayed[i].homeTeamSquad.push(nyslSquads[j].players[k]);
               }        
    }       
 }    
}
     
for (j=0; j < nyslSquads.length; j++){
    if (nyslSquads[j].name == data.matchesPlayed[i].awayTeamName) {
               
    // Go through that squad and copy everything except the variables named above
        
        for (k=0; k <  nyslSquads[j].players.length; k++)
          
    {
          if (k != keeper && k != defence1 && k != defence2 && k != midfield1 && k != midfield2 && k != attack)
          { data.matchesPlayed[i].awayTeamSquad.push(nyslSquads[j].players[k]);
               }        
    }       
 }    
}     
     
  // Here I want to set the scorers   
     
// So whilst home team scorer is not eqaul to 0 pick a random number push the player from the home team squad at that number index to  homeTeamScorers
     
     var homeScorersToCalculate = data.matchesPlayed[i].homeTeamScore;
     
     while (homeScorersToCalculate > 0) {
         
         var goalscorer = Math.floor(Math.random() * 10) + 1;
         data.matchesPlayed[i].homeTeamScorers.push(data.matchesPlayed[i].homeTeamSquad[goalscorer]);
         
         homeScorersToCalculate -= 1;
     }
     
          var awayScorersToCalculate = data.matchesPlayed[i].awayTeamScore;
     
     while (awayScorersToCalculate > 0) {
         
         var goalscorer = Math.floor(Math.random() * 10) + 1;
         data.matchesPlayed[i].awayTeamScorers.push(data.matchesPlayed[i].awayTeamSquad[goalscorer]);
         
         awayScorersToCalculate -= 1;
     }
     
}
}
makeOldGameData();

}
workoutOldData();

// For my main screen I want to calculate the first match and next match by ordering my randomised (or otherwise) data

function calculateNextAndLastMatch(playedOrUpcomingGames) {
  
     var orderedMatches = [
    // Call old and coming matches
]
    
    // Go through the previous match data. Reorder by date oldest to newest. Take the value at [-1] and this is the last match
    
//     orderedMatches = data[playedOrUpcomingGames].sort(function (a, b) {
//        return b.matchID - a.matchID;
//    })   
    function compare(a,b) {
  if (a.date_of_game< b.date_of_game)
    return -1;
  if (a.date_of_game > b.date_of_game)
    return 1;
  return 0;
}

data[playedOrUpcomingGames].sort(compare);

}
                                                       
calculateNextAndLastMatch("matchesUpcoming");
calculateNextAndLastMatch("matchesPlayed");

// Then I want to calculate the league table. To do this I want to set each team to write a function where the relevant team has games played, won, drew, lost, goals scored, goals against and then work out points based on this

var teamStats = []

function calculateTeamLeagueTableStatistics(team) {
    //set variables for each of the key stats
    
    var played = 0;
    var won = 0;
    var drawn = 0;
    var lost = 0;
    var scored = 0;
    var conceeded = 0;
    var points = 0;
    var logo = "team_logo_"+ team +".png";
    
function homeResultsCalculator() {
        
    for (i=0; i < data.matchesPlayed.length; i++) {
    if (team == data.matchesPlayed[i].homeTeamName) {
        played += 1;
        scored += data.matchesPlayed[i].homeTeamScore;
        conceeded += data.matchesPlayed[i].awayTeamScore;
        
        if (data.matchesPlayed[i].homeTeamScore > data.matchesPlayed[i].awayTeamScore) {
            won += 1;
            points += 3;
        }
        else if  (data.matchesPlayed[i].homeTeamScore == data.matchesPlayed[i].awayTeamScore) {
            drawn += 1;
            points += 1;
        }
         else if  (data.matchesPlayed[i].homeTeamScore < data.matchesPlayed[i].awayTeamScore) {
            lost += 1;
        }
    }
}   
    
}
    homeResultsCalculator();

function awayResultsCalculator() {
        
    for (i=0; i < data.matchesPlayed.length; i++) {
    if (team == data.matchesPlayed[i].awayTeamName) {
        played += 1;
        scored += data.matchesPlayed[i].awayTeamScore;
        conceeded += data.matchesPlayed[i].homeTeamScore;
        
        if (data.matchesPlayed[i].awayTeamScore > data.matchesPlayed[i].homeTeamScore) {
            won += 1;
            points += 3;
        }
        else if  (data.matchesPlayed[i].awayTeamScore == data.matchesPlayed[i].homeTeamScore) {
            drawn += 1;
            points += 1;
        }
         else if  (data.matchesPlayed[i].awayTeamScore < data.matchesPlayed[i].homeTeamScore) {
            lost += 1;
        }
    }
}   
    
}
    awayResultsCalculator();
    
    teamStats.push({name: team, played: played, won: won, drawn: drawn, lost: lost, scored: scored, conceeded: conceeded, points: points, logo: logo});
    
}

// Then run the data for the six teams

function calculateSpecificLeagueTableStats() {
    
calculateTeamLeagueTableStatistics("U1");
calculateTeamLeagueTableStatistics("U2");
calculateTeamLeagueTableStatistics("U3");
calculateTeamLeagueTableStatistics("U4");
calculateTeamLeagueTableStatistics("U5");
calculateTeamLeagueTableStatistics("U6");

}
calculateSpecificLeagueTableStats();

// Then I want to calculate which parents are relevnt for login purposes. By this I mean I want to create an array with the following data:
//
//var liveparents = {parentCode: 0, parentName: "", children: [], teams: [], email: "", password: ""}

// I've not really done this yet as I'm not sure how it works

function determineCurrentParents() {
    // first make a currentChildren array to make life easier
    
    var currentChildren = ["0"];
    
    // go through the list of children in each squad, and for each child push the parents names to a unique currentParents array
    
    // Then with this currentParents array that should only include unique parent numbers go back through the currentChildren array and if the parent code for each child matches to the current parent code push that child to the relevant parents array
    
    // Then match relevant emails, names and passwords to this new currentParent array so all of the useful data is in one place
    
}

// This is a function to work out a given teams next match

function nextMatch(team) {
    // Go through the list of matches and if home team or away team is equal the team name inserted then select that team
    
    var futureMatches = [];
    
   for (i=0; i < data.matchesUpcoming.length; i++) {
        if (([team] == data.matchesUpcoming[i].awayTeamName) || ([team] == data.matchesUpcoming[i].homeTeamName)) {
           futureMatches.push(data.matchesUpcoming[i]);
        }
    }
    
    var nextMatch = futureMatches[0];  
    
}

// I've then called this below but in reality I'm not going to want to do this as it's going to be on click or similar.

nextMatch("U1");

function lastMatch(team) {
    // Go through the list of matches and if home team or away team is equal the team name inserted then select that team
    
    var pastMatches = [];
    
   for (i=0; i < data.matchesPlayed.length; i++) {
        if (([team] == data.matchesPlayed[i].awayTeamName) || ([team] == data.matchesPlayed[i].homeTeamName)) {
           pastMatches.push(data.matchesPlayed[i]);
        }
    }
    
    var lastMatch = pastMatches.reverse()[0];  
    
}

// I've then called this below but in reality I'm not going to want to do this as it's going to be on click or similar.

lastMatch("U1");

