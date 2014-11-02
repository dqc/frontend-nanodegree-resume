
var formattedName = HTMLheaderName.replace("%data%", "Dave Carrillo");

var formattedRole = HTMLheaderRole.replace("%data%", "Front End Developer");

$("#header").append(formattedName);
$("#header").append(formattedRole);

var bio = {
  "name": "Dave Carrillo",
  "role": "Front End Developer",
  "contacts": {
    "email": "dqcrevive@gmail.com",
    "mobile": "857-6309",
    "location": "Mount Vernon"
  },
  "welcomeMessage": "Sed id justo suscipit, venenatis nisi quis, finibus risus. Duis at semper mi, in fermentum lorem.",
  "skills": [
  "photo-bombing", "planking", "under water jump-roping", "hugs", "smiles"],
  "bioPic": "images/fry.jpg"
}

var education = {
 "schools": [
 {
    "name": "Juneau-Douglas High",
    "city": "Juneau",
    "dates": "1992-1995"
  },
  {
    "name": "Juneau Ministry School",
    "city": "Juneau",
    "studies": "Pastoral Studies",
    "dates": "1996-1998"
  }
 ],
 "onlineCourses": [
 {
  "title": "Javascript Crash Course",
  "school": "Udacity",
  "dates": 2014,
  "url": "www.udacity.com/courses/ud804"
 }
 ]
}

var work = {
  "work": [
  {
    "business": "Bellingham Underwriters",
    "position": "Administration",
    "dates": "2013-present",
    "description": "Sed faucibus ipsum vitae massa volutpat, et pretium nisl consectetur. Aenean eu ipsum facilisis, consectetur mauris a, laoreet dui. Sed tempor arcu venenatis, euismod metus quis, viverra urna. Mauris ut rutrum purus, et vehicula sapien.",
    "city": "Bellingham"
  },
  {
   "business": "AAA, Washington",
    "position": "Member Travel Services",
    "dates": "2012-2013",
    "description": "Marketer, Membership (new accounts and renewals), travel agent.",
    "city": "Bellingham" 
  },
  {
    "business": "Center Partners",
    "position": "Team Supervisor",
    "dates": "2011-2012",
    "description": "Managed a team of 15-20 account specialists in a financial services market to meet project standards and goals.",
    "city": "Liberty Lake"
  }
  ]
}

var projects = {
  "projects": [
  {
    "title": "Sample Project 1",
    "dates": "2014",
    "description": "Sed hendrerit nibh rutrum turpis convallis, sed pulvinar ipsum varius. Ut porttitor mollis pretium. Morbi viverra orci maximus, vehicula urna sit amet, euismod eros. Nulla velit magna, ultricies non consectetur rutrum, pharetra sed dui.",
    "images": [
      "http://lorempixel.com/400/200/business/1",
      "http://lorempixel.com/400/200/business/8"
    ]
  }
  ]
}


