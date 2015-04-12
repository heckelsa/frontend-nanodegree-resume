//=============================================
//############## DECLARATION ##################
//=============================================

// BIO
var bio = {
	"name" : "Saskia Heckele",
	"role" : "Web Developer",
	"contacts" : {
		"mobile" : "089 99 89 999",
		"email" : "saskia.heckele@pentasys.de",
		"github" : "@heckelsa",
		"twitter" : "heckelsa",
		"location" : "Munich, Germany"
	},
	"welcomeMessage" : "Welcome to my Resume!",
	"skills" : ["awesome", "more awesome", "hungry", "more hungry"],
	"biopic" : "images/fry.jpg",
	"display" : "FUNCTION"
}


// EDUCATION
var education = {
	"schools" : [{
				"name" : "Furtwangen University",
				"location" : "Furtwangen, Germany",
				"degree" : "Bachelor of Science",
				"majors" : "Computer Science in Media",
				"dates" : "08/15/2009 - 08/15/2013",
				"url" : "www.hs-furtwangen.de"
			}, 
			{
				"name" : "Kaufmännische Schule Hechingen",
				"location" : "Hechingen, Germany",
				"degree" : "Higher Education Entrance Qualification",
				"majors" : "Business Informatics",
				"dates" : "08/15/2007 - 08/14/2009",
				"url" : "www.ks-hechingen.de"
			}],
	"onlineCourses" : [
		["title", "Front-End Web Developer Nanodegree"],
		["school", "Udacity"],
		["date", "February 2015"],
		["url", "https://www.udacity.com/"]
	],
	"display" : "FUNCTION"
};


// WORK
var work = {
	"jobs" : [{
				"employer" : "Pentasys",
				"title" : "Bachelor's Degree Candidate",
				"location" : "Munich, Germany",
				"date" : "01/01/2013 - 06/30/2013",
				"description" : "Writing of the bachelor thesis."
			},
			{
				"employer" : "Squadhouse Media",
				"title" : "Trainee",
				"location" : "Tuttlingen, Germany",
				"date" : "08/01/2010 - 02/28/2011",
				"description" : "Agency for Media"
			}],
	"display" : "FUNCTION"
};


// PROJECTS
var projects = {
	"projects" : [{
			"title" : "Horse Photography",
			"dates" : "06/06/2013",
			"description" : "Takeing Pictures of a Horse",
			"images" : "images/fry.jpg"
		}],
	"display" : "FUNCTION"
};


//=============================================
//############## FUNCTIONS ##################
//=============================================

bio.display = function(){
	var formattedBioName = HTMLheaderName.replace("%data%", bio.name);
	var formattedBioRole = HTMLheaderRole.replace("%data%", bio.role);

	var formattedBioHeadline = formattedBioName + formattedBioRole;
	$("#header").prepend(formattedBioHeadline);

	$("#topContacts").append(HTMLmobile.replace("%data%", bio.contacts.mobile));
	$("#topContacts").append(HTMLemail.replace("%data%", bio.contacts.email));
	$("#topContacts").append(HTMLtwitter.replace("%data%", bio.contacts.twitter));
	$("#topContacts").append(HTMLgithub.replace("%data%", bio.contacts.github));
	$("#topContacts").append(HTMLlocation.replace("%data%", bio.contacts.location));

	$("#header").append(HTMLwelcomeMsg.replace("%data%", bio.welcomeMessage));
	$("#header").append(HTMLbioPic.replace("%data%", bio.biopic));

	$("#header").append(HTMLskillsStart);
	for(skill in bio.skills){
		$("#skills").append(HTMLskills.replace("%data%", bio.skills[skill]));
	}	
}



work.display = function(){	
	for(job in work.jobs){
		$("#workExperience").append(HTMLworkStart);
		$(".work-entry").append(HTMLworkEmployer.replace("%data%", work.jobs[job].employer));
		$(".work-entry").append(HTMLworkTitle.replace("%data%", work.jobs[job].title));
		$(".work-entry").append(HTMLworkLocation.replace("%data%", work.jobs[job].location));
		$(".work-entry").append(HTMLworkDates.replace("%data%", work.jobs[job].date));
		$(".work-entry").append(HTMLworkDescription.replace("%data%", work.jobs[job].description));
	}
}



projects.display = function(){
	var projectClassName = ".project-entry";
	for(project in projects.projects){
		$("#projects").append(HTMLprojectStart);
		$(projectClassName).append(HTMLprojectTitle.replace("%data%", projects.projects[project].title));
		$(projectClassName).append(HTMLprojectDates.replace("%data%", projects.projects[project].dates));
		$(projectClassName).append(HTMLprojectDescription.replace("%data%", projects.projects[project].description));
		$(projectClassName).append(HTMLprojectImage.replace("%data%", projects.projects[project].images));
	}		
}


education.display = function(){
	for(school in education.schools){
		$("#education").append(HTMLschoolStart);
		$(".education-entry").append(HTMLschoolName.replace("%data%", education.schools[school].name));
		$(".education-entry").append(HTMLschoolDegree.replace("%data%", education.schools[school].degree));
		$(".education-entry").append(HTMLschoolDates.replace("%data%", education.schools[school].dates));
		$(".education-entry").append(HTMLschoolLocation.replace("%data%", education.schools[school].location));
		$(".education-entry").append(HTMLschoolMajor.replace("%data%", education.schools[school].majors));
	}
}

var displayGoogleMaps = function(){
	$("#mapDiv").append(googleMap);	
}

var displayResume = function(){
	bio.display();
	work.display();
	projects.display();
	education.display();
	displayGoogleMaps();	
}

displayResume();







