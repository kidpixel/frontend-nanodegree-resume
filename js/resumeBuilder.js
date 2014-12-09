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


/* Mike's Challenge
areLettersInOrder('uay', 'udacity'); // true
areLettersInOrder('uyt', 'udacity'); // false
areLettersInOrder('uta', 'google'); // false
areLettersInOrder('gog', 'google'); // true

the logic must be
- compare the index place starting at the "first" position for both 'letters' and 'word'
- if there's a match, you have a letter contained AND you have a letter in order
    - so maybe increment each of those collector variables?
        - letter contained is +1
        - letter in order is +1
    - increment the index of WORD regardless
    - increment the index of LETTER (letterIndex?) to follow because there was a character match
- if there's NOT a match, you to NOT have a letter contained (no match), and you to NOT have a letter in order (unsure about this second one's logic)
    - letter contained does NOT increment
    - letter in order does NOT increment
    - increment the index of WORD regardless
    - do NOT increment index of LETTER because there was no match
        - since the indexes are linked... maybe we need a second variable for letter index? 
        - (letterIndex?) gets no increment.

"UAY"
0 0 C I
u u 1 1 - match.  
1 1
a d     - no match.
1 2
a a 1 1 - match.
2 3
y c     - no match.
2 4 
y i     - no match.
2 5
y t     - no match. 
2 6
y y 1 1 - match.

- iterate through WORD index regardless with above logic... then ONLY if "C" and "I" are equal in number... you have satisfied both requirements.
- let's try a couple in ascii... i'll copy and paste next example... i'm thinking i don't need two separate variables here... just a test after it's all done.. let's see.
- ADDED: C/I === letters.length... if this is the case then i think we have a winner, but let's see... 

"UYT" 
0 0 C I
u u 1 1 - match.  
1 1
y d     - no match.
1 2
y a     - no match.
2 3
y c     - no match.
2 4 
y i     - no match.
2 5
y t     - no match. 
2 6
y y 1 1 - match.

- OK, so additional logic needs to be implemented... i'm right... the C might always equal the I, but let's see...
- IF C/I (let's just call it the "collector" for now does NOT equal to letters.length, then you didn't satisfy both requirements.

- Also there might need to be some additional checks at the beginning to see if letters is the same or bigger than word.
    - if letters.length is the same as word.length, run a test to see if they are === 
        - give user a smartass comment as output  ;) 
    - if letters.length is greater than word.length, then 
        - output appropriate error message and exit without running code
    - if letters.length is less than word.length, then
        - Execute the code, darnit!

if (small > big) {
    yell at the user
    BREAK
} else if (small === big) {
    call the user a smartass
    BREAK
} else {
    Do stuff.
}

Ok, let's write this:

*/

// FULLY COMMENTED with all my thought processes.
/*
function areLettersInOrder(small,big) {

    var letters = small;
    console.log(letters);
    console.log(letters.length);
    var word = big;
    console.log(word);
    console.log(word.length);

    //var lettersContained = 0;
    //var lettersInOrder = 0; 
    var collector = 0;
    var letterIndex = 0;

    if (letters.length > word.length) {
        console.log("Your small letter string is bigger than your word string.  They have meds for that.");
        return false; 

    } else if (letters.length === word.length) {
        if (letters === word) {
            console.log("Smartass.")
            return false;
        };

    } else {

        for (var charIndex = 0; charIndex < word.length; charIndex++){
            console.log(charIndex + " inLoop charIndex");
            console.log(letters[letterIndex] + " inLoop letter index");
            console.log(word[charIndex] + " inLoop word index");

            if (letters[letterIndex] === word[charIndex]) {
                collector++;
                console.log(collector + " inLoop inIF collector value");
                letterIndex++;
                console.log(letterIndex + " inLoop inIF letter index");
            } else {
                // Really, nothing to do here I guess, now that I look at it!
            };
        };  
        // next run the test
        console.log("---------------------")
        console.log(collector + " is the FINAL Collector Value");
        console.log(letters.length + " is the Letters (small value) Length");
        if (collector == letters.length) {
            console.log("TRUE... Good. Both conditions met... I think my logic is sound.")
            return true; 
        } else {
            console.log("FALSE... Sorry. Both conditions not met... I still think my logic is sound.")
            return false; 
        };
    };
};
*/


// Slim version... 
function areLettersInOrder(small,big) {

    var letters = small;
    var word = big;
    var collector = 0;
    var letterIndex = 0;

    if (letters.length > word.length) {
        console.log("Your small letter string is bigger than your word string.  They have meds for that.");
        return false; 

    } else if (letters.length === word.length) {
        if (letters === word) {
            console.log("Smartass.")
            return false;
        };
    } else {
        for (var charIndex = 0; charIndex < word.length; charIndex++){
            if (letters[letterIndex] === word[charIndex]) {
                collector++;
                letterIndex++;
            } 
        };  
        // next run the test
        console.log("Small string: " + letters + "   Word string: " + word);
        console.log("---------------------")
        console.log(collector + " is the final \"collector\" value.");
        console.log(letters.length + " is the small string length.");
        if (collector == letters.length) {
            console.log("TRUE... Good. Both conditions met!")
            return true; 
        } else {
            console.log("FALSE... Sorry. Both conditions NOT met.")
            return false; 
        };
    };
};
areLettersInOrder("day","udacity"); 
