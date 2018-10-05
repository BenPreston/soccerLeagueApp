// This code calculates the names

[
  {
    'repeat(5)': {
      parentID: '{{index()}}',
      date_of_sign_up: '{{moment(this.date(new Date(2014, 0, 1), new Date())).format("LLLL")}}',
        first_name: '{{firstName()}}',
        last_name: '{{surname()}}',
        company: '{{company().toUpperCase()}}',
      email(tags) {
        return `${this.first_name}.${this.last_name}@${this.company}${tags.domainZone()}`.toLowerCase();},
      password: 'password'
    }
  }
  
    
 ]


// This bit makes the children

[
  {
    'repeat(20)': {
      childID: '{{index()}}',
      parentID: '{{integer(0, 10)}}',
      date_of_sign_up: '{{moment(this.date(new Date(2014, 0, 1), new Date())).format("LLLL")}}',
      first_name: '{{firstName()}}',
      last_name: '{{surname()}}',
      position: '{{random("defence", "midfield", "goalkeeper", "attack")}}',
    "position_num": "",
      date_of_birth: '{{moment(this.date(new Date(2005, 0, 1), new Date(2006, 0, 1))).format("LLLL")}}',
	photo: '', 	
      team: '{{random("U1", "U2", "U3", "U4", "U5", "U6")}}'
    }
  }
  
    
 ]
         
// This bit for the teams - although the team name changer doesn't work

[
  {
    'repeat(6)': {
      teamID: '{{index()}}',
      teamName: 'U1',
      logo: 'U',
    }
  }
  

// GAMES PLAYED
    
[
  {
    'repeat(19)': {
      matchID: '{{index(1)}}',
      homeTeamScore: '{{integer(0, 5)}}',
      awayTeamScore: '{{integer(0, 5)}}',
      homeTeamName: '{{random("U1", "U2", "U3", "U4", "U5", "U6")}}',
      homeTeamSquad: [],
      homeTeamScorers: [],
      awayTeamName: '{{random("U1", "U2", "U3", "U4", "U5", "U6")}}',
      awayTeamSquad: [],
      awayTeamScorers: [],
      location: '{{random("AJ Katzenmaier", "Howard A Yeager", "Marjorie P Hart", "North", "South", "Greenbay")}}',
      date_of_game: '{{moment(this.date(new Date(2018, 1, 1), new Date(2018, 7, 1))).format("")}}',
     comments: "Curabitizzle et diam quizzle nisi its fo rizzle cool. Hizzle fo. Morbi crazy. Phat neque. We gonna chung orci. Crizzle maurizzle pimpin', boofron, feugizzle phat amet, break yo neck, yall in, fo. Pellentesque you son of a bizzle. Vestibulum i'm in the shizzle mi, check out this in, yippiyo sizzle, crunk mammasay mammasa mamma oo sa, velit. Crizzle in ipsizzle. Gangsta volutpat felis cool you son of a bizzle. Crizzle gizzle justo in purizzle shizzlin dizzle ornare. Yo venenatizzle justo bizzle lacus. Nunc sure. Suspendisse venenatizzle placerat lacus. Curabitizzle eu ante. Nunc pharetra, leo eu tellivizzle check out this, fo shizzle mah nizzle fo rizzle, mah home g-dizzle felis elementizzle sizzle, shizzle my nizzle crocodizzle shizzle my nizzle crocodizzle magna dope crazy pede. Phat a rizzle. Ma nizzle fizzle taciti cool izzle litora torquent we gonna chung conubia the bizzle, per inceptos hymenaeos. Aliquizzle interdizzle, stuff nizzle fo shizzle mah nizzle fo rizzle, mah home g-dizzle nonummy, pimpin' orci my shizz leo, in bizzle risus arcu sizzle sizzle.",
    }
  }
  
    
 ]  
    
// GAMES TO COME

[
  {
    'repeat(19)': {
      matchID: '{{index(20)}}',
      homeTeamScore: '',
      awayTeamScore: '',
      homeTeamScorers: [],
        awayTeamScorers: [],
      homeTeamName: '{{random("U1", "U2", "U3", "U4", "U5", "U6")}}',
      awayTeamName: '{{random("U1", "U2", "U3", "U4", "U5", "U6")}}',
      location: '{{random("AJ Katzenmaier", "Howard A Yeager", "Marjorie P Hart", "North", "South", "Greenbay")}}',
      date_of_game: '{{moment(this.date(new Date(2018, 8, 1), new Date(2018, 12, 1))).format("")}}',
        comments: 'Shiznit ipsizzle dolor yo mamma amet, tellivizzle rizzle elit. Nullam uhuh ... yih! gangster, black volutpat, suscipizzle quizzle, gravida vizzle, tellivizzle. Pellentesque eget ma nizzle. Boofron erizzle. Fusce shiz gizzle dapibizzle mammasay mammasa mamma oo sa tempizzle tellivizzle. Dope go to hizzle fo shizzle izzle turpizzle. Vestibulum izzle tortizzle. Pellentesque dawg rhoncizzle nisi. In crazy habitasse platea things. Dope dapibizzle. Curabitizzle tellizzle urna, pretium dawg, mattizzle ac, eleifend vitae, nunc. Doggy suscipizzle. Integer semper velit sed shizzlin dizzle.',
     
    }
  }
  
    
 ]
    
    // Make the game locations
    
    [
  {
    'repeat(10)': {
      locationID: '{{objectId()}}',
      index: '{{index(1)}}',
      address: '',
      name: '{{random("AJ Katzenmaier", "Howard A Yeager", "Marjorie P Hart", "North", "South", "Greenbay")}}',
      latitude: '{{floating(-90.000001, 90)}}',
      longitude: '{{floating(-180.000001, 180)}}',
      comments: 'Remember no parking',
      address: '{{integer(100, 999)}} {{street()}}, {{city()}}, {{state()}}, {{integer(100, 10000)}}',
    }
  }
]
      