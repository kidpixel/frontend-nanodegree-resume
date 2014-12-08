var bio = {
    "name": "Carlo Jonson",
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



if (bio.length !=0) {
    $("#header").append(HTMLskillsStart);

    // trying this loop to iterate through the skills
    for (var skillIndex = 0; skillIndex < bio.skills.length; skillIndex++) {

        var formattedSkill = HTMLskills.replace("%data%", bio.skills[skillIndex]);
        $("#skills").append(formattedSkill);
    };
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


function locationizer(work_obj) {
    var locationsArray = [];
    for (var job in work_obj.jobs){
        locationsArray.push(work_obj.jobs[job].location);
    }
	console.log(locationsArray);
    return locationsArray;
}
locationizer(work);


//old stuff... i'm keeping 'coz i don't want to see an empty page
var formattedName = HTMLheaderName.replace("%data%", bio.name);
var formattedRole = HTMLheaderRole.replace("%data%", bio.role);   

$("#header").prepend(formattedRole);
$("#header").prepend(formattedName);    
//old stuff end. 


var inName = function(name) {
    name = name.trim().split(" ");
    // my implementation from Lesson 1 modified since the helper function in helper.js was changed to accept a param.  I like this line!
    name = name[0][0].toUpperCase() + name[0].slice(1).toLowerCase() + " " + name[1].toUpperCase();
    return name;

/*  My Code that WORKS... but since the helper.js code was change on Nov 30 for inName to take a param, doing newer code above...
    passedName = bio.name;
    var finalName = passedName;
    finalName = passedName.split(" ");
    // my implementation from Lesson 1... 
    finalName = finalName[0][0].toUpperCase() + finalName[0].slice(1).toLowerCase() + " " + finalName[1].toUpperCase();
    return finalName;
*/
/*  The modified Udacity/instructor version for reference.
    firstLast = passedName.trim().split(" ");
    console.log(firstLast);
    firstLast[1] = firstLast[1].toUpperCase();
    console.log(firstLast[1]);
    firstLast[0] = firstLast[0].slice(0,1).toUpperCase() + firstLast[0].slice(1).toLowercase();

    return name[0] +" "+ name[1];
*/
};
$("#main").append(internationalizeButton);
