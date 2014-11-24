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

$("#header").prepend(formattedRole);
$("#header").prepend(formattedName);	


/*
var audacious = "audacity"
var udacious = ("U" + audacious.slice(2));
console.log(udacious);

$("#main").append(udacious);
*/

// My first way of approaching the last element... this modifieds the specific last element "2", not necessarily the "last"
/*
var sampleArray = [0,0,7];
sampleArray[2] = sampleArray[2] + 1;
var newArray = sampleArray;
console.log(newArray[2]);
*/

// My second attempt per the push/pop methods
/*
var sampleArray = [0,0,7];
var popped = sampleArray.pop()+1;
sampleArray.push(popped);   // can't store this in newArray because it only returns the length of the array and not the resulting array itself.
var newArray = sampleArray;
console.log(popped);
console.log(newArray[2]);  // correctly shows 8 now.
console.log(sampleArray);  // correctly shows [0,0,8] now.
*/

//-----------------------------------------------Final code that passed
var sampleArray = [0,0,7];

var incrementLastArrayElement = function(_array) {
    var newArray = [];
    // Your code should make newArray equal to an array that has the same
    // values as _array, but the last number has increased by one.
    
    // For example:
    // _array = [1, 2, 3];
    // turn into:
    // newArray = [1, 2, 4];
    
    // Your code goes in here!
    var popped = _array.pop()+1;
    _array.push(popped);   // can't store this in newArray because it only returns the length of the array and not the resulting array itself.
    newArray = _array;
    
    // Don't delete this line!
    return newArray;
};

// Did your code work? The line below will tell you!
console.log(incrementLastArrayElement(sampleArray));

//------------------------ My uncommented code:
var incrementLastArrayElement = function(_array) {
    var newArray = [];
    var popped = _array.pop()+1;
    _array.push(popped);   // can't store this in newArray because it only returns the length of the array and not the resulting array itself.
    newArray = _array;
    return newArray;
};
//----------------------------------------------------------------------

//  INSTRUCTORS'S CODE
function incrementLastArrayElement(_array)  {
    var newArray = [];
    newArray = _array.slice(0);
    var lastNumber = newArray.pop();
    newArray.push(lastNumber + 1);
    return newArray;
}