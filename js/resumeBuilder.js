// $("#main").append("Dave Carrillo");

// [string].replace([old], [new])


/*
var email = "dave@udacity.com";

var newEmail = 
  email.replace("udacity", "gmail");

  console.log(email);
  console.log(newEmail);
  */

/*
var awesomeThoughts = "I am Dave and I am awesome!";


var funThoughts = 
  awesomeThoughts.replace("awesome!","fun");

  $("#main").append(funThoughts);

*/

var formattedName = HTMLheaderName.replace("%data%", "Dave Carrillo");

var formattedRole = HTMLheaderRole.replace("%data%", "Front End Developer");

$("#header").append(formattedName);
$("#header").append(formattedRole);


var bio = {
  "name": "Dave Carrillo",
  "role": "Front End Developer",
  "contacts": {
    "email": "dqcrevive@gmail.com",
    "mobile": "8576309",
    "location": "Northwest Washington"
  },
  "welcomeMessage": "Sed id justo suscipit, venenatis nisi quis, finibus risus. Duis at semper mi, in fermentum lorem.",
  "skills": [
  "photo-bombing", "planking", "under water jump-roping", "hugs", "smiles"],
  "bioPic": "images/fry.jpg"
}

$("#main").append(bio);







