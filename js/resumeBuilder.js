var bio = {
    "name": "Carlo M. Jonson",
    "role": "Sr. Mgr. Field Communications",
    "number": "443.333.4444",
    "picture": "http://www.clker.com/cliparts/K/M/W/1/8/u/ninja-hi.png",
    "welcomeMessage": "Wherever you go, there you are.",
    "skills": [
        "Cooking",
        "Coding", 
        "Collaboratig",
        "colluding",
        "conspiring",
        "conflagarating",
        "Kidding..."
    ],
    "contacts": {
        "mobile": "443.123.4567",
        "email": "cj811k@att.com",
        "github": "kidpixel",
        "location": "Atlanta, GA"
    }
};

//old stuff... i'm keeping 'coz i don't want to see an empty page
var formattedName = HTMLheaderName.replace("%data%", bio.name);
var formattedRole = HTMLheaderRole.replace("%data%", bio.role);   

$("#header").prepend(formattedRole);
$("#header").prepend(formattedName);    
//old stuff... 


if (bio.length !=0) {
    $("#header").append(HTMLskillsStart);

    // trying this loop to iterate through the skills
    for (var skillIndex = 0; skillIndex < bio.skills.length; skillIndex++) {

        var formattedSkill = HTMLskills.replace("%data%", bio.skills[skillIndex]);
        $("#skills").append(formattedSkill);

    };

/*
    // So I know this works... lemme try a loop, above... 
    var formattedSkill = HTMLskills.replace("%data%", bio.skills[0]);
        $("#skills").append(formattedSkill);
        formattedSkill = HTMLskills.replace("%data%", bio.skills[1]);
        $("#skills").append(formattedSkill);
        formattedSkill = HTMLskills.replace("%data%", bio.skills[2]);
        $("#skills").append(formattedSkill);    
        formattedSkill = HTMLskills.replace("%data%", bio.skills[3]);
        $("#skills").append(formattedSkill);
        formattedSkill = HTMLskills.replace("%data%", bio.skills[4]);
        $("#skills").append(formattedSkill);
        formattedSkill = HTMLskills.replace("%data%", bio.skills[5]);
        $("#skills").append(formattedSkill);
        formattedSkill = HTMLskills.replace("%data%", bio.skills[6]);
        $("#skills").append(formattedSkill);
*/
};

var projects = {
    "projects": [
        {
            "title": "Udacity Mug Mockup to Website",
            "dates": "November 2014",
            "description": "Constructing a pixel-perfect HTML/CSS site from scratch guided by just a mockup image.",
            "images": [
                "http://",
                "http://",
                "http://"
            ]
        },
        {
            "title": "Interactive Resume",
            "dates": "December 2014",
            "description": "Interactive Resume dynamically created using JavaScript.",
            "images": [
                "http://",
                "http://",
                "http://"
            ]
        }
    ] 
}; 

var work = {
    "jobs": [
        {
            "employer": "Cricket Wireless / AT&T",
            "title": "Senior Manager, Field Communications",
            "location": "Atlanta, GA",
            "dates": "2014-current",
            "description": "Graphic Design, Desktop Publishing, and 'Frontline' Document Creation"
        },
        {
            "employer": "Cricket Communications",
            "title": "Indirect Account Manager (IAM)",
            "location": "Baltimore-Washington Market (BAWA South - Washington D.C.)",
            "dates": "2010-2014",
            "description": "Dealer Relationship and Business Development, Incremental Growth Strategy, Training, Development of ISR Direct-Reports"
        },
        {
            "employer": "Cricket Communications",
            "title": "Indirect Support Specialist (ISS) / Indirect Sales Representative (ISR)",
            "location": "Baltimore-Washington Market (BAWA North - Baltimore)",
            "dates": "2009-2010",
            "description": "Relationship-Building, Frontline Rep Training, Ensuring Sales Execution, Merchandising Assistance"
        },
        {
            "employer": "Asurion",
            "title": "Regional Account Manager (RAM)",
            "location": "Baltimore-Washington (BAWA), VA Beach, Richmond",
            "dates": "2009",
            "description": "Insurance Product Support & Relationship-Building"
        },
        {
            "employer": "Circuit City",
            "title": "Technology Manager",
            "location": "Glen Burnie, MD",
            "dates": "2008-2009",
            "description": "Technology Team Management, Sales"
        }
    ]
}; 

function displayWork(){

    for (job in work.jobs) {

        $("#workExperience").append(HTMLworkStart);

        var formattedEmployer = HTMLworkEmployer.replace("%data%", work.jobs[job].employer);
        var formattedTitle = HTMLworkTitle.replace("%data%", work.jobs[job].title);
        var formattedEmployerTitle = formattedEmployer + formattedTitle;
        //date
        var formattedDate = HTMLworkDates.replace("%data%", work.jobs[job].dates);
        //location
        var formattedLocation = HTMLworkLocation.replace("%data%", work.jobs[job].location);
        //description
        var formattedDescription = HTMLworkDescription.replace("%data%", work.jobs[job].description);
        //continue appending
        $(".work-entry:last").append(formattedEmployerTitle);
        $(".work-entry:last").append(formattedDate);
        $(".work-entry:last").append(formattedLocation);
        $(".work-entry:last").append(formattedDescription);
    };
};
displayWork();


var education = {
    "onlineCourses": [
        {
            "title": "Front-End Web Development Nanodegree",
            "school": "Udacity",            
            "dates": "2014-2015",
            "url": "https://www.udacity.com/course/nd001"
        }
    ],
    "schools": [
        {
            "name": "Computer Learning Center (CLC)",
            "location": "Laurel, MD",
            "degree": [
                "Computer Programming", 
                "Database Management"
            ],
            "majors": [
                "Computer Programming",
                "Database Management"
            ],
            "dates": 2001,
            "url": "http://www.udacity.com"
        },
        {
            "name": "University of Toronto",
            "location": "Scarborough, ON",
            "degree": "",
            "majors": [
                "Biology",
                "Computer Science"
            ],
            "dates": 1999,
            "url": "http://www.utsc.utoronto.ca/"
        }
    ]
};

// My first attempt - returns correct Array, but isn't what they're looking for.
/*
function locationizer(work_obj) {
    var locationsArray = [];
    for (var job in work.jobs){
        locationsArray[job] = work.jobs[job].location;
    }
	console.log(locationsArray);
    return locationsArray;
}
locationizer(work);
*/

// My second attempt - seems to return the correct array... still not what theyr'e looking for.
/*
function locationizer(work_obj) {
    var locationsArray = [];
    for (var job in work.jobs){
        locationsArray.push(work.jobs[job].location);
    }
	console.log(locationsArray);
    return locationsArray;
}
locationizer(work);
*/

// What "worked" === What Udacity was looking for... 
function locationizer(work_obj) {
    var locationsArray = [];
    for (var job in work_obj.jobs){
        locationsArray.push(work_obj.jobs[job].location);
    }
	console.log(locationsArray);
    return locationsArray;
}
locationizer(work);

