var formattedName = HTMLheaderName.replace("%data%", "Dave Carrillo");

var formattedRole = HTMLheaderRole.replace("%data%", "Front End Developer");

$("#header").prepend(formattedName);
$("#header").prepend(formattedRole);

var bio = {
  "name": "Dave Carrillo",
  "role": "FRONT END DEVELOPER",
  "contacts": {
    "email": "dqcrevive@gmail.com",
    "mobile": "867-5309",
    "email": "ddqcrevive@egmail.com",
    "github": "www.github.com/dqc",
    "twitter": "@daaavec",
    "blog": "dcblogs",
    "location": "Mount Vernon, WA"
  },
  "welcomeMessage": "Hello! I am a front end developer living in beautiful Northwest Washington",
  "skills": [
  "HTML 5", "SEO Optimization", "CSS", "Javascript", "Responsive Design"],
  "bioPic": "images/fry.jpg"
}

var education = {
 "schools": [
 {
    "name": "Juneau-Douglas High",
    "location": "Juneau, AK",
    "studies": "High School Diploma",
    "dates": "1992-1995"
  },
  {
    "name": "Juneau Ministry School",
    "location": "Juneau, AK",
    "studies": "Pastoral Studies",
    "dates": "1996-1998"
  }
 ],
 "onlineCourses": [
 {
  "title": "Front End Nanodegree Course: HTML & CSS",
  "school": "UDACITY",
  "dates": "2014",
  "url": "www.udacity.com/course/ud304-nd"
 },
 {
  "title": "Front End Nanodegree Course: Javascript",
  "school": "UDACITY",
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
    "location": "Bellingham, WA",
    "description": "Bellingham Underwriters is an insurance management firm. We determine whether or not, and on what basis to write insurance policies in the commercial trucking market.",
  },
  {
   "employer": "AAA, Washington",
    "title": "Member Travel Services",
    "dates": "2012-2013",
    "location": "Bellingham, WA",
    "description": "Marketer, Membership (new accounts and renewals), travel agent.",
  },
  {
    "employer": "Center Partners",
    "title": "Team Supervisor",
    "dates": "2011-2012",
    "location": "Post Falls, ID",
    "description": "Managed a team of 15-20 account specialists in a financial services market to meet project standards and goals.",
  }
  ]
}

var projects = {
  "projects": [
  {
    "title": "Portfolio",
    "dates": "2014",
    "description": "This was the first of several projects from Udacity's Front End course. The challenge was to create a portfolio page based on a mockup we were given. It also included a few modals with descriptions.",
    "images": [
      "http://lorempixel.com/400/200/business/1",
    ]
  }
  ]
}


var welcomeMessage = HTMLWelcomeMsg.replace("%data%", bio.welcomeMessage);
$("#header").append(welcomeMessage);


var bioPic = "images/profile2.jpg";
var formattedbioPic = HTMLbioPic.replace("%data%", bioPic);
$("#header").append(formattedbioPic);

var formattedMobile = HTMLmobile.replace("%data%", bio.contacts.mobile);
$("#topContacts").append(formattedMobile);
$("#footerContacts").append(formattedMobile);
var formattedEmail = HTMLemail.replace("%data%", bio.contacts.email);
$("#topContacts").append(formattedEmail);
$("#footerContacts").append(formattedEmail);
var formattedTwitter = HTMLtwitter.replace("%data%", bio.contacts.twitter);
$("#topContacts").append(formattedTwitter);
$("#footerContacts").append(formattedTwitter);
var formattedGithub = HTMLgithub.replace("%data%", bio.contacts.github);
$("#topContacts").append(formattedGithub);
$("#footerContacts").append(formattedGithub);
var formattedBlog = HTMLblog.replace("%data%", bio.contacts.blog);
$("#topContacts").append(formattedBlog);
$("#footerContacts").append(formattedBlog);
var formattedLocation = HTMLlocation.replace("%data%", bio.contacts.location);
$("#footerContacts").append(formattedLocation);

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

education.display = function() {
for (schools in education.schools) {
  $("#education").append(HTMLschoolStart);

  var formattedName = HTMLschoolName.replace("%data%", education.schools[schools].name);
  $(".education-entry:last").append(formattedName);

  var formattedStudies = HTMLschoolStudies.replace("%data%", education.schools[schools].studies);
  $(".education-entry:last").append(formattedStudies);

  var formattedDates = HTMLschoolDates.replace("%data%", education.schools[schools].dates);
  $(".education-entry:last").append(formattedDates);

  var formattedLocation = HTMLschoolLocation.replace("%data%", education.schools[schools].location);
  $(".education-entry:last").append(formattedLocation);
}

for (onlineCourses in education.onlineCourses) {
  $("#education").append(HTMLonlineClasses);
  $("#education").append(HTMLschoolStart);

    var formattedTitle = HTMLonlineTitle.replace("%data%", education.onlineCourses[onlineCourses].title);
    $(".education-entry:last").append(formattedTitle);

    var formattedSchool = HTMLonlineSchool.replace("%data%", education.onlineCourses[onlineCourses].school);
    $(".education-entry:last").prepend(formattedSchool);

    var formattedDates = HTMLonlineDates.replace("%data%", education.onlineCourses[onlineCourses].dates);
    $(".education-entry:last").append(formattedDates);

    var formattedUrl = HTMLonlineURL.replace("%data%", education.onlineCourses[onlineCourses].url);
    $(".education-entry:last").append(formattedUrl);
}
}
education.display();


work.display = function() {
for (job in work.jobs) {
  $("#workExperience").append(HTMLworkStart);

  var formattedEmployer = HTMLworkEmployer.replace("%data%", work.jobs[job].employer);

  var formattedTitle = HTMLworkTitle.replace("%data%", work.jobs[job].title);
  var formattedEmployerTitle = formattedEmployer + formattedTitle;

  $(".work-entry:last").append(formattedEmployerTitle);

var formattedDates = HTMLworkDates.replace("%data%", work.jobs[job].dates);
$(".work-entry:last").append(formattedDates);

var formattedLocation = HTMLworkLocation.replace("%data%", work.jobs[job].location);
$(".work-entry:last").append(formattedLocation);

var formattedDescription = HTMLworkDescription.replace("%data%", work.jobs[job].description);
$(".work-entry:last").append(formattedDescription);
}
}
work.display();

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

var map = {
  display : function() {
    $("#mapDiv").append(googleMap);
  }
}
map.display();






