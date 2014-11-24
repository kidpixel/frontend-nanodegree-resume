//$("#main").append("Carlo M. Jonson");

//var awesomeThoughts = "I am CJ, and I am AWESOME!"
///console.log(awesomeThoughts);

//var email = "cameron@udacity.com";
//var newEmail = email.replace("udacity", "gmail"); 

//console.log(email);
//console.log(newEmail);

//var funThoughts = awesomeThoughts.replace("AWESOME", "FUN");

//$("#main").append(funThoughts);




var name = "Carlo M. Jonson"
var role = "Web Developer"

var formattedName = HTMLheaderName.replace("%data%", name);
var formattedRole = HTMLheaderRole.replace("%data%", role);	

console.log(formattedName);
console.log(formattedRole);

$("#header").prepend(formattedRole);
$("#header").prepend(formattedName);	


/*
var audacious = "audacity"
var udacious = ("U" + audacious.slice(2));
console.log(udacious);

$("#main").append(udacious);
*/

// My first way of approaching the last element... this modifieds the specific last element "2", not necessarily the "last"
var sampleArray = [0,0,7];
sampleArray[2] = sampleArray[2] + 1;
var newArray = sampleArray;
console.log(newArray[2]);

