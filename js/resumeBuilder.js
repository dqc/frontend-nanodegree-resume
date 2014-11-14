var formattedName = HTMLheaderName.replace("%data%", "Dave Carrillo");

var formattedRole = HTMLheaderRole.replace("%data%", "Front End Developer");

$("#header").prepend(formattedName);
$("#header").prepend(formattedRole);

var bio = {
  "name": "Dave Carrillo",
  "role": "Front End Developer",
  "contacts": {
    "email": "dqcrevive@gmail.com",
    "mobile": "857-6309",
    "email": "dave@example.com",
    "github": "johndoe",
    "twitter": "@johndoe",
    "blog": "dcblogs",
    "location": "Mount Vernon, WA"
  },
  "welcomeMessage": "Sed id justo suscipit, venenatis nisi quis, finibus risus. Duis at semper mi, in fermentum lorem.",
  "skills": [
  "HTML 5", "SEO Optimization", "CSS", "Javascript", "Responsive Design"],
  "bioPic": "images/fry.jpg"
}

var education = {
 "schools": [
 {
    "name": "Juneau-Douglas High",
    "location": "Juneau",
    "dates": "1992-1995"
  },
  {
    "name": "Juneau Ministry School",
    "location": "Juneau",
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
  "jobs": [
  {
    "employer": "Bellingham Underwriters",
    "title": "Administration",
    "dates": "2013-present",
    "description": "Sed faucibus ipsum vitae massa volutpat, et pretium nisl consectetur. Aenean eu ipsum facilisis, consectetur mauris a, laoreet dui. Sed tempor arcu venenatis, euismod metus quis, viverra urna. Mauris ut rutrum purus, et vehicula sapien.",
  },
  {
   "employer": "AAA, Washington",
    "title": "Member Travel Services",
    "dates": "2012-2013",
    "description": "Marketer, Membership (new accounts and renewals), travel agent.",
  },
  {
    "employer": "Center Partners",
    "title": "Team Supervisor",
    "dates": "2011-2012",
    "description": "Managed a team of 15-20 account specialists in a financial services market to meet project standards and goals.",
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


var bioPic = "images/profile2.jpg";
var formattedbioPic = HTMLbioPic.replace("%data%", bioPic);
$("#header").append(formattedbioPic);

var formattedMobile = HTMLmobile.replace("%data%", bio.contacts.mobile);
$("#topContacts").append(formattedMobile);
var formattedEmail = HTMLemail.replace("%data%", bio.contacts.email);
$("#topContacts").append(formattedEmail);
var formattedTwitter = HTMLtwitter.replace("%data%", bio.contacts.twitter);
$("#topContacts").append(formattedTwitter);
var formattedGithub = HTMLgithub.replace("%data%", bio.contacts.github);
$("#topContacts").append(formattedGithub);
var formattedBlog = HTMLblog.replace("%data%", bio.contacts.blog);
$("#topContacts").append(formattedBlog);
var formattedLocation = HTMLlocation.replace("%data%", bio.contacts.location);
$("#topContacts").append(formattedLocation);


if(bio.skills.length > 0) {
  $("#header").append(HTMLskillsStart);

  var formattedSkill = HTMLskills.replace("%data%", bio.skills[0]);
  $("#skills").append(formattedSkill);
  formattedSkill = HTMLskills.replace("%data%",bio.skills[1]);
  $("#skills").append(formattedSkill);
  formattedSkill = HTMLskills.replace("%data%",bio.skills[2]);
  $("#skills").append(formattedSkill);
  formattedSkill = HTMLskills.replace("%data%",bio.skills[3]);
  $("#skills").append(formattedSkill);
  formattedSkill = HTMLskills.replace("%data%",bio.skills[4]);
  $("#skills").append(formattedSkill);
}

function displayEducation() {
for (schools in education.schools) {
  $("#education").append(HTMLschoolStart);

  var formattedName = HTMLschoolName.replace("%data%", education.schools[school].name);
  $(".education-entry:last").append(formattedName);

  var formattedStudies = HTMLschoolStudies.replace("%data%", education.schools[school].studies);
  $(".education-entry:last").append(formattedStudies);

  var formattedDates = HTMLschoolDates.replace("%data%", education.schools[school].dates);
  $(".education-entry:last").append(formattedDates);

  var formattedLocation = HTMLschoolLocation.replace("%data%", education.schools[school].location);
  $(".education-entry:last").append(formattedLocation);
}
}
displayEducation()


function displayWork() {
for (job in work.jobs) {
  $("#workExperience").append(HTMLworkStart);

  var formattedEmployer = HTMLworkEmployer.replace("%data%", work.jobs[job].employer);

  var formattedTitle = HTMLworkTitle.replace("%data%", work.jobs[job].title);
  var formattedEmployerTitle = formattedEmployer + formattedTitle;

  $(".work-entry:last").append(formattedEmployerTitle);

var formattedDates = HTMLworkDates.replace("%data%", work.jobs[job].dates);
$(".work-entry:last").append(formattedDates);

var formattedDescription = HTMLworkDescription.replace("%data%", work.jobs[job].description);
$(".work-entry:last").append(formattedDescription);
}
}
displayWork();

projects.display = function() {
  for (project in projects.projects) {
    $("#projects").append(HTMLprojectStart);

    var formattedTitle = HTMLprojectTitle.replace("%data%", projects.projects[project].title);
    $(".project-entry:last").append(formattedTitle);

    var formattedDates = HTMLprojectDates.replace("%data%", projects.projects[project].dates);
    $(".project-entry:last").append(formattedDates);

    var formattedDescription = HTMLprojectDescription.replace("%data%", projects.projects[project].description);
    $(".project-entry:last").append(formattedDescription);

    if (projects.projects[project].images.length > 0) {
      for (image in projects.projects[project].images) {
        var formattedImage = HTMLprojectImage.replace("%data%", projects.projects[project].images[image]);
        $(".project-entry:last").append(formattedImage);
      }
    }
  }
}
projects.display();

function inName(name) {
  name = name.trim().split(" ");
    console.log(name);
    name[1] = name[1].toUpperCase();
    name[0] = name[0].slice(0,1).toUpperCase() + 
      name[0].slice(1).toLowerCase();

    return name[0] +" "+name[1];
  }

  $("#main").append(internationalizeButton);

  $("#mapDiv").append(googleMap);




