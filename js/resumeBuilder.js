var bio = {
	"name": "Ghassan Knayzeh",
	"role": "Full-Stack Developer",
    "welcomeMessage": "Welcome to my online resume",
	"contacts": {
		"mobile": "(647) 638-4572",
		"eMail": "g.knayzeh@gmail.com",
		"twitter": "g7twtr",
		"githubURL": "https://github.com/Xassassin",
		"blogURL": "http://gknayzeh.com",
		"location": "Mississauga, ON"

	},
	"pictureURL": "images/profile.jpg",

	"skills": ["Java", "HTML", "JavaScript", "C"]
};

var work = {
    "jobs": [
        {
            "employer": "Eaton",
            "title": "Intermediate Software Developer",
            "location": "Mississauga, ON",
            "dates": "January 2010 - Current",
            "description": "Design and develop the control software for a mixed/distributed lighting management system. Develop and maintain the legacy JSF/Web application for the lighting controls system. Design and develop the Web application for the central management software project.Designed and developed a stand-alone configuration tool for DALI sensor settings. Design, build, develop and maintain the DALI Sensor testing rig and software. Design and develop the DALI addressing station project."
        },{
            "employer": "Eaton",
            "title": "Quality Assurance/Junior Software Developer",
            "location": "Mississauga, ON",
            "dates": "September 2007 - December 2009",
            "description": "Design, Develop, Implement and Execute all test plans for the all software projects in the lighting management system, including Java, JSF, html, JavaScript and PLC code."
        },{
            "employer": "Eaton",
            "title": "Quality Assurance/Junior Software Developer - Contractor",
            "location": "Mississauga, ON",
            "dates": "January 2007 - September 2007",
            "description": "Design, Develop, Implement and Execute all test plans for the all software projects in the lighting management system, including Java, JSF, html, JavaScript and PLC code."
        }
    ]
}

var projects = {
    projects: [{
        "title": "Portfolio",
        "dates": "August, 2015",
        "description": "Portfolio Site to manage the rest of the projects.",
        "images" : [
            "images/197x148.gif",
            "images/197x148.gif"
        ]
    },{
        "title": "Online Resume",
        "dates": "August, 2015",
        "description": "Online version of my resume.",
        "images" : [
        ]
    }]
};

var education = {
    "schools": [ {
        "name": "McGill University",
        "location": "Montreal, QC",
        "degree": "Bachelors of Engineering",
        "major": "Electrical Engineering",
        "minor": "Software Engineering",
        "dates": "2001 - 2007",
        "url": "http://www.mcgill.ca"
    } ],
    "onlineCourses": [ {
        "title": "Intro to HTML and CSS",
        "school": "Udacity",
        "dates": "August, 2015",
        "url": "https://www.udacity.com/course/intro-to-html-and-css--ud304"
    },{
        "title": "Responsive Web Design Fundementals",
        "school": "Udacity",
        "dates": "August, 2015",
        "url": "https://www.udacity.com/course/responsive-web-design-fundamentals--ud893"
    },{
        "title": "Responsive Images",
        "school": "Udacity",
        "dates": "August, 2015",
        "url": "https://www.udacity.com/course/responsive-images--ud882"
    },{
        "title": "JavaScript Basics",
        "school": "Udacity",
        "dates": "August, 2015",
        "url": "https://www.udacity.com/course/javascript-basics--ud804"
    },{
        "title": "JavaScript Basics",
        "school": "Udacity",
        "dates": "August, 2015",
        "url": "https://www.udacity.com/course/javascript-basics--ud804"
    },{
        "title": "M101J: MongoDB For Java Developers",
        "school": "MongoDB University",
        "dates": "August, 2015",
        "url": "https://university.mongodb.com/courses/M101J/about"
    } ]

};

var formattedName = HTMLheaderName.replace("%data%", bio.name);
var formattedRole = HTMLheaderRole.replace("%data%", bio.role);

var formattedMobile = HTMLmobile.replace("%data%", bio.contacts.mobile);
var formattedEmail = HTMLemail.replace("%data%", bio.contacts.eMail);
var formattedTwitter = HTMLtwitter.replace("%data%", bio.contacts.twitter);
var formattedGithub = HTMLgithub.replace("%data%", bio.contacts.githubURL);
var formattedBlog = HTMLblog.replace("%data%", bio.contacts.blogURL);
var formattedLocation = HTMLlocation.replace("%data%", bio.contacts.location);

var formattedPictureURL = HTMLbioPic.replace("%data%", bio.pictureURL);
var formattedWelcomeMessage = HTMLwelcomeMsg.replace("%data%", bio.welcomeMessage);

$("#header").prepend(formattedWelcomeMessage);
$("#header").prepend(formattedPictureURL);


$("#header").prepend(formattedRole);
$("#header").prepend(formattedName);

$("#topContacts").append(formattedMobile);
$("#topContacts").append(formattedEmail);
$("#topContacts").append(formattedGithub);
$("#topContacts").append(formattedTwitter);
$("#topContacts").append(formattedBlog);
$("#topContacts").append(formattedLocation);

// for (var index = 0; index < bio.skills.length; index++) {
//     $("#skills").append(HTMLskills.replace("%data%", bio.skills[index]));
// }

if (bio.skills.length > 0) {

    $("#header").append(HTMLskillsStart);
    for (index in bio.skills) {
        $("#skills").append(HTMLskills.replace("%data%", bio.skills[index]));
    }
}

function displayWork() {
    if (work.jobs.length > 0) {
        for (job in work.jobs) {
            $("#workExperience").append(HTMLworkStart);
            var formattedEmployer = HTMLworkEmployer.replace("%data%", work.jobs[job].employer);
            var formattedTitle =  HTMLworkTitle.replace("%data%", work.jobs[job].title);
            var formattedEmployerTitle = formattedEmployer + formattedTitle;

            var formattedWorkDates = HTMLworkDates.replace("%data%", work.jobs[job].dates);
            var formattedWorkLocation =  HTMLworkLocation.replace("%data%", work.jobs[job].location);

            var formattedWorkDescription = HTMLworkDescription.replace("%data%", work.jobs[job].description);

            $(".work-entry:last").append(formattedEmployerTitle);
            $(".work-entry:last").append(formattedWorkDates);
            $(".work-entry:last").append(formattedWorkLocation);
            $(".work-entry:last").append(formattedWorkDescription);

        }
    }
};

displayWork();

// $("#main").append(internationalizeButton);
// var inName = function() {
//     var finalName = bio.name.trim();
//     var splitName = finalName.split(" ");
//     finalName = splitName[0][0].toUpperCase();
//     finalName = finalName + splitName[0].slice(1).toLowerCase() + " ";
//     finalName = finalName + splitName[1].toUpperCase();
//     return finalName;
// }

$("#mapDiv").append(googleMap);

projects.display = function() {
    if (projects.projects.length > 0) {
        for (project in projects.projects) {
            $("#projects").append(HTMLprojectStart);
            var formattedProjectTitle = HTMLprojectTitle.replace("%data%", projects.projects[project].title);
            var formattedProjectDates = HTMLprojectDates.replace("%data%", projects.projects[project].dates);
            var formattedProjectDescription = HTMLprojectDescription.replace("%data%", projects.projects[project].description);

            $(".project-entry:last").append(formattedProjectTitle);
            $(".project-entry:last").append(formattedProjectDates);
            $(".project-entry:last").append(formattedProjectDescription);

            if (projects.projects[project].images.length > 0) {
                for (image in projects.projects[project].images) {
                    $(".project-entry:last").append(HTMLprojectImage.replace("%data%", projects.projects[project].images[image]));
                }
            }

        }
    }
}

projects.display();

$(document).click(function(loc) {
    var x = loc.pageX;
    var y = loc.pageY;
    logClicks(x,y);
});



// function getRelationship(x, y) {
//     var isXNumber = (x % 1 === 0);
//     var isYNumber = (y % 1 === 0);
//     var rel = "";

//     if (!isXNumber && !isYNumber) {
//         rel = "Can't compare relationships because " + x + " and " + y + " are not numbers";
//     } else if (!isXNumber) {
//         rel = "Can't compare relationships because " + x + " is not a number";
//     } else if (!isYNumber) {
//         rel = "Can't compare relationships because " + y + " is not a number";
//     } else {
//         if (x > y) {
//             rel = ">";
//         } else if (x < y) {
//             rel = "<";
//         } else {
//             rel = "=";
//         }
//     }
//     return rel;
// };

// // Try logging these functions to test your code!
// console.log(getRelationship(1,4));
// console.log(getRelationship(1,1));
// console.log(getRelationship("that",2));
// console.log(getRelationship("this"," something else"));
// console.log(getRelationship(3));
// console.log(getRelationship("hi"));
// console.log(getRelationship(NaN));
// console.log(getRelationship(NaN, undefined));

// var moonWalkers = [
//   "Neil Armstrong",
//   "Buzz Aldrin",
//   "Pete Conrad",
//   "Alan Bean",
//   "Alan Shepard",
//   "Edgar Mitchell",
//   "David Scott",
//   "James Irwin",
//   "John Young",
//   "Charles Duke",
//   "Eugene Cernan",
//   "Harrison Schmitt"
// ];

// function alphabetizer(names) {
//     for (name in names) {
//         names[name] = flipper(names[name]);
//     }

//     return names.sort();
// }

// function flipper(name) {
//     var splitName = name.trim().split(" ");
//     return splitName[1] + ", " + splitName[0];

// }

// // Try logging your results to test your code!
// console.log(alphabetizer(moonWalkers));




// Iterate through the localizedRuleNames in ruleResults and
// return an array of their strings.
// function ruleList(results) {
//     var ruleNames = [];
//     for (var rule in results.formattedResults.ruleResults) {
//         for (var prop in results.formattedResults.ruleResults[rule]) {
//             if (prop === "localizedRuleName") {
//                 ruleNames.push(results.formattedResults.ruleResults[rule][prop]);
//             }
//         }
//     }

//     return ruleNames;
// }


// Iterate through pageStats in the psiResults object and
// return the total number of bytes to load the website.
// function totalBytes(results) {
//     var bytes = 0;
//     for (var stat in results.pageStats) {
//         if (stat.indexOf("Bytes") > -1) {
//             bytes += parseInt(results.pageStats[stat]);
//         }
//     }

//     return bytes;
// }

// Below, you'll find a sample PS Insights JSON
// and two console.log statements to help you test your code!

// psinsights = {
//  "kind": "pagespeedonline#result",
//  "id": "/speed/pagespeed",
//  "responseCode": 200,
//  "title": "PageSpeed Home",
//  "score": 90,
//  "pageStats": {
//   "numberResources": 22,
//   "numberHosts": 7,
//   "totalRequestBytes": "2761",
//   "numberStaticResources": 16,
//   "htmlResponseBytes": "91981",
//   "cssResponseBytes": "37728",
//   "imageResponseBytes": "13909",
//   "javascriptResponseBytes": "247214",
//   "otherResponseBytes": "8804",
//   "numberJsResources": 6,
//   "numberCssResources": 2
//  },
//  "formattedResults": {
//   "locale": "en_US",
//   "ruleResults": {
//     "AvoidBadRequests": {
//       "localizedRuleName": "Avoid bad requests",
//       "ruleImpact": 0.0
//     },
//     "MinifyJavaScript": {
//       "localizedRuleName": "Minify JavaScript",
//       "ruleImpact": 0.1417,
//       "urlBlocks": [
//       {
//         "header": {
//        "format": "Minifying the following JavaScript resources could reduce their size by $1 ($2% reduction).",
//        "args": [
//         {
//          "type": "BYTES",
//          "value": "1.3KiB"
//         },
//         {
//          "type": "INT_LITERAL",
//          "value": "0"
//         }
//        ]
//         },
//         "urls": [
//         {
//           "result": {
//          "format": "Minifying $1 could save $2 ($3% reduction).",
//          "args": [
//           {
//            "type": "URL",
//            "value": "http://code.google.com/js/codesite_tail.pack.04102009.js"
//           },
//           {
//            "type": "BYTES",
//            "value": "717B"
//           },
//           {
//            "type": "INT_LITERAL",
//            "value": "1"
//           }
//          ]
//         }
//        },
//        {
//         "result": {
//          "format": "Minifying $1 could save $2 ($3% reduction).",
//          "args": [
//           {
//            "type": "URL",
//            "value": "http://www.gmodules.com/ig/proxy?url\u003dhttp%3A%2F%2Fjqueryjs.googlecode.com%2Ffiles%2Fjquery-1.2.6.min.js"
//           },
//           {
//            "type": "BYTES",
//            "value": "258B"
//           },
//           {
//            "type": "INT_LITERAL",
//            "value": "0"
//           }
//          ]
//         }
//        }
//       ]
//      }
//     ]
//    },
//    "SpriteImages": {
//     "localizedRuleName": "Combine images into CSS sprites",
//     "ruleImpact": 0.0
//    }
//   }
//  },
//  "version": {
//   "major": 1,
//   "minor": 11
//  }
// };

// // Try logging the outputs below to test your code!
// console.log(ruleList(psinsights));
// console.log(totalBytes(psinsights));