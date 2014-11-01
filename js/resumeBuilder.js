
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

var work = {
  "work": [
  {
    "business": "Bellingham Underwriters",
    "position": "Administration",
    "years": 1.3,
    "description": "Bellingham Underwriters is an insurance management firm specializing in commercial transportation. As a team we underwrite and manage the accounts of businesses being insured.",
    "city": "Bellingham"
  },
  {
   "business": "AAA, Washington",
    "position": "Member Travel Services",
    "years": 1,
    "description": "Marketer, Membership (new accounts and renewals), travel agent.",
    "city": "Bellingham" 
  }
  ]
}

var education = {
 "schools": [
 {
    "name": "Juneau-Douglas High",
    "city": "Juneau",
    "years": "1992-1995"
  },
  {
    "name": "Juneau Ministry School",
    "city": "Juneau",
    "studies": "Pastoral Studies",
    "years": "1996-1998"
  }
 ]
}
