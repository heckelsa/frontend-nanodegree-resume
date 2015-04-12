//=============================================
//############## DECLARATION ##################
//=============================================

var replaceIdentifier = "%data%";
var loremIpsum = "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.";

// BIO
var bio = {
	"name" : "Saskia Heckele",
	"role" : "Web Developer",
	"contacts" : {
		"mobile" : "+49 (0) 15774339156",
		"email" : "saskia.heckele@pentasys.de",
		"github" : "@heckelsa",
		"twitter" : "heckelsa",
		"location" : "Munich, Germany"
	},
	"welcomeMessage" : "Welcome to my Resume! I want to show you what I've done in my live!",
	"skills" : ["HTML/CSS", "JavaScript", "jQuery", "Photography", "Testing"],
	"biopic" : "images/biopic.jpg"
}


// EDUCATION
var education = {
	"schools" : [{
				"name" : "Furtwangen University",
				"location" : "Furtwangen, Germany",
				"degree" : "Bachelor of Science",
				"majors" : "Computer Science in Media",
				"dates" : "2009 - 2013 ",
				"url" : "www.hs-furtwangen.de"
			}, 
			{
				"name" : "Concordia University",
				"location" : "Montreal, Canada",
				"degree" : "Semester Abroad",
				"majors" : "Computer Science in Media",
				"dates" : "2012",
				"url" : "www.concordia.ca"
			},
			{
				"name" : "Kaufmännische Schule Hechingen",
				"location" : "Hechingen, Germany",
				"degree" : "Higher Education Entrance Qualification",
				"majors" : "Business Informatics",
				"dates" : "2007 - 2009 ",
				"url" : "www.ks-hechingen.de"
			}],
	"onlineCourses" : [
		["title", "Front-End Web Developer Nanodegree"],
		["school", "Udacity"],
		["date", "February 2015"],
		["url", "https://www.udacity.com/"]
	]
};


// WORK
var work = {
	"jobs" : [{
				"employer" : "Pentasys",
				"title" : "Tester & Web Developer",
				"location" : "Munich, Germany",
				"date" : "since 2013",
				"description" : loremIpsum
			},
			{
				"employer" : "Pentasys",
				"title" : "Bachelor's Degree Candidate",
				"location" : "Munich, Germany",
				"date" : "2013",
				"description" : loremIpsum
			},
			{
				"employer" : "Squadhouse Media",
				"title" : "Trainee",
				"location" : "Tuttlingen, Germany",
				"date" : "2010 - 2011",
				"description" : loremIpsum
			}]
};


// PROJECTS
var projects = {
	"projects" : [{
			"title" : "Austria Dog Photographer Meeting",
			"dates" : "03/14/2015",
			"description" : loremIpsum,
			"images" : "images/832A8407_1.jpg"
		},
		{
			"title" : "South German Horse Photographer Meeting",
			"dates" : "02/11/2014",
			"description" : loremIpsum,
			"images" : "images/IMG_2026-2.jpg"
		}]
};


//=============================================
//############## FUNCTIONS ##################
//=============================================

bio.display = function(){
	var bioIdName = "#header";
	var bioClassTopContactsName = "#topContacts";

	var formattedBioName = HTMLheaderName.replace(replaceIdentifier, bio.name);
	var formattedBioRole = HTMLheaderRole.replace(replaceIdentifier, bio.role);

	var formattedBioHeadline = formattedBioName + formattedBioRole;
	$(bioIdName).prepend(formattedBioHeadline);

	$(bioClassTopContactsName).append(HTMLmobile.replace(replaceIdentifier, bio.contacts.mobile));
	$(bioClassTopContactsName).append(HTMLemail.replace(replaceIdentifier, bio.contacts.email));
	$(bioClassTopContactsName).append(HTMLtwitter.replace(replaceIdentifier, bio.contacts.twitter));
	$(bioClassTopContactsName).append(HTMLgithub.replace(replaceIdentifier, bio.contacts.github));
	$(bioClassTopContactsName).append(HTMLlocation.replace(replaceIdentifier, bio.contacts.location));

	$(bioIdName).append(HTMLwelcomeMsg.replace(replaceIdentifier, bio.welcomeMessage));
	$(bioIdName).append(HTMLbioPic.replace(replaceIdentifier, bio.biopic));

	$(bioIdName).append(HTMLskillsStart);
	for(skill in bio.skills){
		$("#skills").append(HTMLskills.replace(replaceIdentifier, bio.skills[skill]));
	}	
}



work.display = function(){	
	var workClassName = ".work-entry:last";
	for(job in work.jobs){
		$("#workExperience").append(HTMLworkStart);
		$(workClassName).append(HTMLworkEmployer.replace(replaceIdentifier, work.jobs[job].employer));
		$(workClassName).append(HTMLworkTitle.replace(replaceIdentifier, work.jobs[job].title));
		$(workClassName).append(HTMLworkLocation.replace(replaceIdentifier, work.jobs[job].location));
		$(workClassName).append(HTMLworkDates.replace(replaceIdentifier, work.jobs[job].date));
		$(workClassName).append(HTMLworkDescription.replace(replaceIdentifier, work.jobs[job].description));
	}
}



projects.display = function(){
	var projectClassName = ".project-entry:last";
	for(project in projects.projects){
		$("#projects").append(HTMLprojectStart);
		$(projectClassName).append(HTMLprojectTitle.replace(replaceIdentifier, projects.projects[project].title));
		$(projectClassName).append(HTMLprojectDates.replace(replaceIdentifier, projects.projects[project].dates));
		$(projectClassName).append(HTMLprojectDescription.replace(replaceIdentifier, projects.projects[project].description));
		$(projectClassName).append(HTMLprojectImage.replace(replaceIdentifier, projects.projects[project].images));
	}		
}


education.display = function(){
	var educationClassName = ".education-entry:last";
	for(school in education.schools){
		$("#education").append(HTMLschoolStart);
		$(educationClassName).append(HTMLschoolName.replace(replaceIdentifier, education.schools[school].name));
		$(educationClassName).append(HTMLschoolDegree.replace(replaceIdentifier, education.schools[school].degree));
		$(educationClassName).append(HTMLschoolDates.replace(replaceIdentifier, education.schools[school].dates));
		$(educationClassName).append(HTMLschoolLocation.replace(replaceIdentifier, education.schools[school].location));
		$(educationClassName).append(HTMLschoolMajor.replace(replaceIdentifier, education.schools[school].majors));
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







