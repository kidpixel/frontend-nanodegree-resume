var bio = {
    "name": "Carlo Jonson ",
    "role": "// Sr. Mgr. Field Communications // Code Ninja",
    "number": "443.333.4444",
    "picture": "images/ninja-hi.png",
    "bioBG": "images/firebulb.jpg",
    "welcomeMessage": "Wherever you go, there you are.",
    "welcomeMessage2": "You know what? \:\(\)\{\ \:\|\:\&\ \}\;\: you!",
    "skills": [
        "Cooking",
        "Coding", 
        "Collaboratig",
        "\&nbsp\; colluding",
        "\&nbsp\; conspiring",
        "\&nbsp\; conflagarating",
        "\&nbsp\; Kidding..."
    ],
    "contacts": {
        "mobile": "443.333.4444 <i>(REAL)</i>",
        "email": "cj811k@att.com",
        "github": "kidpixel",
        "location": "Atlanta, GA"
    }
};

var projects = {
    "projects": [
        {
            "title": "Interactive Resume",
            "dates": "December 2014",
            "description": "Interactive Resume dynamically created using JavaScript. ",
            "images": [
                "images/InteractiveResume1.jpg",
                "images/InteractiveResume2.jpg",
                "images/InteractiveResume3.jpg"  
            ]
        },
        {
            "title": "Udacity Mug Mockup to Website",
            "dates": "November 2014",
            "description": "Constructing a pixel-perfect HTML/CSS site from scratch guided by just a mockup image. ",
            "images": [
                "images/mug1.jpg",
                "images/mug2.jpg",
                "images/mug3.jpg"
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
                " Database Management" // needed a space "after comma"
            ],
            "majors": [
                "Computer Programming Certification",
                "Database Management Certification"
            ],
            "dates": "2001",
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
            "dates": "1997-1999",
            "url": "http://www.utsc.utoronto.ca/"
        }
    ]
};


// Encapsulated to BIO
bio.display = function() {

    var formattedName = HTMLheaderName.replace("%data%", bio.name);
    var formattedRole = HTMLheaderRole.replace("%data%", bio.role);   
    var formattedPic = HTMLbioPic.replace("%data%", bio.picture);
    var formattedDescription = HTMLWelcomeMsg.replace("%data%", bio.welcomeMessage);

    $("#header").prepend(formattedRole);
    $("#header").prepend(formattedName);
    $("#header").append(formattedPic);
    $("#header").append(formattedDescription);    

    for (contact in bio.contacts) {
        var formattedContact = HTMLcontactGeneric.replace("%data%", bio.contacts[contact]);
        formattedContact = formattedContact.replace("%contact%", contact);
        $("#topContacts").append(formattedContact);
        $("#footerContacts").append(formattedContact);
    }

    if (bio.skills.length !=0) {
        $("#header").append(HTMLskillsStart);

        // trying this loop to iterate through the skills
        for (var skillIndex = 0; skillIndex < bio.skills.length; skillIndex++) {

            var formattedSkill = HTMLskills.replace("%data%", bio.skills[skillIndex]);
            $("#skills").append(formattedSkill);
        };
    };

    //testing
    $("#header").append(bio.welcomeMessage2);
};


// Encapsulated to WORK
work.displayWork = function() {

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


// Encapsulated to WORK
work.locationizer = function(work_obj) {
    var locationsArray = [];
    for (var job in work_obj.jobs){
        locationsArray.push(work_obj.jobs[job].location);
    }
    // console.log(locationsArray); // For testing and debugging. 
    return locationsArray;
};


// Keeping this because I like its functionality. See my note in CSS on how i kept some incidental formatting around this.
// Also, I had to remove the "var" in "var inName = ..." below from the Lesson because once i encapsulated it into the function per the rubric, 
// the scope changed. (Thanks "Function and Block-level Scope" sections!)  
//
// Encapsulated to BIO
bio.internationalize = function() {
        inName = function(name) {
        name = name.trim().split(" ");  // I didn't think of or even know about trim() until the class example.  Inserting it here.
        // this is my implementation from Lesson 1 modified since the helper function in helper.js was changed to accept a param.  I like this line!
        name = name[0][0].toUpperCase() + name[0].slice(1).toLowerCase() + " " + name[1].toUpperCase();
        return name;
    };
    $("#main").append(internationalizeButton);
};


// Encapsulated to PROJECTS
projects.display = function() {

    for (project in projects.projects) {
    
    $("#projects").append(HTMLprojectStart);

        var formattedProjectTitle = HTMLprojectTitle.replace("%data%", projects.projects[project].title);
        //console.log(formattedProjectTitle);
        //console.log(projects.projects[project].title);
        var formattedProjectDates = HTMLprojectDates.replace("%data%", projects.projects[project].dates);
        //console.log(projects.projects[project].dates);
        var formattedProjectDescription = HTMLprojectDescription.replace("%data%", projects.projects[project].description);
        //console.log(projects.projects[project].description);
        // Above console log call EXTREMELY useful for testing the loop, formatting, and figuring out errors due to THREE typed words "project" in a row over and over.

        $(".project-entry:last").append(formattedProjectTitle);
        $(".project-entry:last").append(formattedProjectDates);
        $(".project-entry:last").append(formattedProjectDescription);

        // console.log(projects.projects[project].images[0]);  // testing path for a single image.
        for (image in projects.projects[project].images) {

            var formattedProjectImage = HTMLprojectImage.replace("%data%", projects.projects[project].images[image]);
            // console.log(projects.projects[project].images[image]);  // shows image URLs for my projects
            $(".project-entry:last").append(formattedProjectImage);
        };
    };
};


// Completing Education Section the same way we were taught with Projects... Encapsulating display function within the parent object, in this: education.
// Encapsulated to EDUCATION
education.display = function() {

    // Moving this to the "top" because it's more recent!
    // handle 3rd part - online stuff... i might move this above brick and mortar section
    $("#education").append(HTMLonlineClasses);

    for (myCourse in education.onlineCourses) {

    $("#education").append(HTMLschoolStart);

    var formattedTitle = HTMLonlineTitle.replace("%data%", education.onlineCourses[myCourse].title);
    var formattedSchool = HTMLonlineSchool.replace("%data%",education.onlineCourses[myCourse].school);
    var formattedOnlineHeader  = formattedTitle + formattedSchool;
    $(".education-entry:last").append(formattedOnlineHeader);
    
    var formattedDates = HTMLonlineDates.replace("%data%",education.onlineCourses[myCourse].dates);
    $(".education-entry:last").append(formattedDates);

    var formattedURL = HTMLonlineURL.replace("%data%", education.onlineCourses[myCourse].url);
    formattedURL = formattedURL.replace("%data2%", education.onlineCourses[myCourse].url);
    $(".education-entry:last").append(formattedURL);

    };

    $("#education").append(HTMLbmClasses);

    for (school in education.schools) {
        // "education" CSS ID already created/defined within empty DIV in html file... start appending code sections from helper.js
        $("#education").append(HTMLschoolStart);
        // handle 1st part of an "education entry" - brick and mortar locations
        var formattedSchoolName = HTMLschoolName.replace("%data%", education.schools[school].name);
        var formattedDegree = HTMLschoolDegree.replace("%data%", education.schools[school].degree);

        // If i went to the school, but didn't finish with a degree, slice out the " --" before I tack on the closing anchor tag from HTMLschoolDegree.
        // Why?  it's unslightly to have a trailing "--" next to the University of Toronto header area, and modding the helper.js would mess with a "complete" entry.
        if (education.schools[school].degree.length === 0) { 
            formattedDegree = formattedDegree.slice(3); 
        };
        var formattedSchoolTopEntry = formattedSchoolName + formattedDegree;
        // More testing for loop iterations
        // console.log(formattedSchoolName);
        // console.log(formattedDegree);
        // console.log(formattedSchoolTopEntry);
        // console.log(education.schools[school].degree.length);
        $(".education-entry:last").append(formattedSchoolTopEntry);

        // handle 2nd part of an "education entry"
        var formattedDates = HTMLschoolDates.replace("%data%", education.schools[school].dates);
        $(".education-entry:last").append(formattedDates);

        var formattedLocation = HTMLschoolLocation.replace("%data%", education.schools[school].location);
        $(".education-entry:last").append(formattedLocation);

        for (major in education.schools[school].majors) {
            var formattedMajor = HTMLschoolMajor.replace("%data%", education.schools[school].majors[major]);
            $(".education-entry:last").append(formattedMajor);
        };
    };
};


bio.display();
work.displayWork();
work.locationizer(work);
bio.internationalize();
projects.display();
education.display();

$("#mapDiv").append(googleMap); 
// Per Cameron, keep this line here even though the Google Maps API is broken as of 12/11/14 1:35am Eastern Time.
// Since I/we can't complete the addListener code now, this'll just get pushed to the side while I finish the rest.
// Once the API is back and any adjustments are made to the course instructions, I'll complete the code, but i'll still
// submit my code MINUS this so I can meet my the deadline and stay on track within Cohort 1 and not get pushed back.
// "If you're submitting your resume, keep the line that .appends() the map in resumeBuilder.js"