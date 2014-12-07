//$("#main").append("Carlo M. Jonson");

//var awesomeThoughts = "I am CJ, and I am AWESOME!"
///console.log(awesomeThoughts);

/*
var myName = "Carlo M. Jonson"
var myRole = "Sr. Mgr. Field Communications"

var formattedName = HTMLheaderName.replace("%data%", myName);
var formattedRole = HTMLheaderRole.replace("%data%", myRole);	

$("#header").prepend(formattedRole);
$("#header").prepend(formattedName);	
*/

//----Objects, etc...

var bio = {
    "name": myName,
    "role": myRole,
    "number": "443.333.4444",
    "picture": "http://www.clker.com/cliparts/K/M/W/1/8/u/ninja-hi.png",
    "welcomeMessage": "Wherever you go, there you are.",
    "skills": [
        "cooking",
        "coding", 
        "collaboratig",
        "colluding",
        "conspiring",
        "conflagarating",
        "CHAFFING"
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
    ] // projects array
}; // projects object

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
            "dates": "2008-2009"
            "description": "Technology Team Management, Sales"
        }
    ] // jobs array
}; // work object

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
            ]
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

