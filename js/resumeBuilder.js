var bio = {
    "name": "Moaz Rashad",
    "role": "Software Engineer",
    "contacts": {
        "mobile": "01147400177",
        "email": "mo3az014@gmial.com",
        "github": "mo3az01",
        "twitter": "@mo3az01",
        "location": "Cairo"
    },
    "biopic": "images/moaz.png",
    "skills": ["Android", "Java", "Front-End", "Back-End "],
    "welcomeMessage": "Dear recuriter hope to find your requirment in my cv"
};
var education = {
    "schools": [{
            name: "Cairo University",
            location: "Giza",
            degree: "BA",
            majors: ["CS","IT"],
            dates: "2013",
            url: "https://cu.edu.eg/ar/Home"
        },
        {
            name: "Abo bakr el sedek",
            location: "El Abasya",
            degree: "Graduated",
            majors: ["Math"],
            dates: "2009",
            url: "https://www.facebook.com/%D9%85%D8%AF%D8%B1%D8%B3%D9%87-%D8%A7%D8%A8%D9%88-%D8%A8%D9%83%D8%B1-%D8%A7%D9%84%D8%B5%D8%AF%D9%8A%D9%82-%D8%A7%D9%84%D8%B1%D9%8A%D8%A7%D8%B6%D9%8A%D9%87-%D8%A7%D9%84%D8%AA%D8%AC%D8%B1%D9%8A%D8%A8%D9%8A%D9%87-202183456487646/"
        }
    ],
    "onlineCourses": [{
            "title": "Android Nanodegree",
            "school": "Udacity",
            "dates": "2016-2017",
            "url": "https://www.udacity.com/course/android-developer-nanodegree-by-google--nd801"
        },
        {
            "title": "Front Nanodegree",
            "school": "Udacity",
            "dates": "2016-2017",
            "url": "https://www.udacity.com/course/front-end-web-developer-nanodegree--nd001"
        }
    ]
};
var work = {
    "jobs": [{
            "employer": "Udacity",
            "title": "course manager",
            "location": "Remotly",
            "dates": "2015-2017",
            "description": "manage course content, help and qualify student to graduate"
        },
        {
            "employer": "Orange Lab",
            "title": "Software Engineer",
            "location": "Egypt smart village",
            "dates": "2015-2017",
            "description": "build mobile, desktop, web apps"
        }
    ]
};
var projects = {
    "projects": [{
            "title": "Orange Travel",
            "dates": "2/2015-8/2015",
            "description": "Monitoring useage consumption while traveling",
            "images": ["images/otravel.webp"]
        },
        {
            "title": "My Network",
            "dates": "10/2015-5/2016",
            "description": "control wifi hotspots on popular places",
            "images": ["images/mynetwork.jpg","images/mynetwork2.jpg"]
        },
        {
            "title": "Video Conference",
            "dates": "9/2016-11/2016",
            "description": "Like hangout",
            "images": []
        }
    ]
};
// display bio
bio.display = function() {
    // name and role
    $("#header").prepend(HTMLheaderRole.replace("%data%", bio.role));
    $("#header").prepend(HTMLheaderName.replace("%data%", bio.name));
    // contacts
    Object.keys(bio.contacts).forEach(function(key) {
        $("#topContacts, #footerContacts").append(HTMLcontactGeneric.replace("%data%", bio.contacts[key]).replace("%contact%", key));                                        
    });
    // pic
    $("#header").append(HTMLbioPic.replace("%data%", bio.biopic));
    // welcome message
    $("#header").append(HTMLwelcomeMsg.replace("%data%", bio.welcomeMessage));
    //skills
    if (bio.hasOwnProperty("skills") && bio.skills.length > 0) {
        $("#header").append(HTMLskillsStart);
        for (var cur = 0; cur < bio.skills.length; cur++)
            $("#skills").append(HTMLskills.replace("%data%", bio.skills[cur]));
    }
};
bio.display();

// display work
work.display = function() {
    //work experience
    work.jobs.forEach(function(elem) {
        $("#workExperience").append(HTMLworkStart);
        var employer = HTMLworkEmployer.replace("%data%", elem.employer);
        var title = HTMLworkTitle.replace("%data%", elem.title);
        var employerTitle = employer + title;
        $(".work-entry:last").append(employerTitle);
        $(".work-entry:last").append(HTMLworkDates.replace("%data%", elem.dates));
        $(".work-entry:last").append(HTMLworkDescription.replace("%data%", elem.description));
        $(".work-entry:last").append(HTMLworkLocation.replace("%data%", elem.location));
    }); {

    }
};
work.display();
// disply projects
projects.display = function() {
    $("#projects").append(HTMLprojectStart);
    projects.projects.forEach(function(element) {
        $(".project-entry:last").append(HTMLprojectTitle.replace("%data%", element.title));
        $(".project-entry:last").append(HTMLprojectDates.replace("%data%", element.dates));
        $(".project-entry:last").append(HTMLprojectDescription.replace("%data%", element.description));
        element.images.forEach(function(image){
            $(".project-entry:last").append(HTMLprojectImage.replace("%data%",image));
            $("img:last").attr("height","200px");
        });
    });
};
projects.display();
// display education
education.display = function() {
    // schools
    $("#education").append(HTMLschoolStart);
    education.schools.forEach(function(element) {
        var name = HTMLschoolName.replace("%data%", element.name);
        var degree = HTMLschoolDegree.replace("%data%", element.degree);
        $(".education-entry").append(name + degree);
        $('a:last').attr('href', element.url);
        $(".education-entry").append(HTMLschoolDates.replace("%data%", element.dates));
        $(".education-entry").append(HTMLschoolLocation.replace("%data%", element.location));
        element.majors.forEach(function(major){
            $(".education-entry").append(HTMLschoolMajor.replace("%data%",major));            
        });
    });
    // online courses
    $("#education").append(HTMLonlineClasses);
    $("#education").append(HTMLschoolStart);
    education.onlineCourses.forEach(function(element) {
        var title = HTMLonlineTitle.replace("%data%", element.title);
        var school = HTMLonlineSchool.replace("%data%", element.school);
        $(".education-entry:last").append(title + school);
        $('a:last').attr('href', element.url);
        $(".education-entry:last").append(HTMLonlineDates.replace("%data%", element.dates));
        $(".education-entry:last").append(HTMLonlineURL.replace("%data%", element.url));
        $('a:last').attr('href', element.url);
    });
};
education.display();
// display the map of all locations
$("#mapDiv").append(googleMap);