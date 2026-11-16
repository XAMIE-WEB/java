// VARIABLE DECLARATIONS

// VAR
//LET
//CONST

let name = "Obi";

let myName = "Homie";

console.log(myName); // Homie

myName = "Divine";

console.log(myName); // Divine

let myAge =16;

const myCourse = "Frontend Development";



//CASINGS IN JAVASCRIPT

// uppercasing
// lowercasing
// camelcasing              Examples: myName, myAge, theBoy
// paschalcasing            Examples: TheBoy, HisName, HerName
// snakecasing              Examples: the_girl, her_name, her_age
// scremingsankecasing      Examples: THE_CONST_VAR, MY_COURSE




// VARIABLES AND VALUES

//string
let herCourse = "Graphics Design"; // Double quotes
let hisCourse = 'Mobile App Development'; //single quotes
let yourGrade = `16`; //Template literal

let herEmailMessage = `You have scored ${yourGrade} out of 20 in your test`;
console.log(herEmailMessage);
console.log(herEmailMessage.length);

// Numbers
let solomonAge = 25;
solomonAge = 30;

let pi = 3.142;
let expo = 10e5;


// Booleam
const isSheAGirl = true;
const isSheMarried = false;


// Null
let victorName = null;

// undefined
let yourClass;

console.log("WHat is yourclass?", yourClass);

// objects : Denoted with curly brackets

let studentID = {
    age: 16,
    course: "Frontend",
    school: "0xVerse Academy",
    isEnrolled: true
}

// Arrays denoted with square brackets

let myFruitsArray = [
    "Apple",
    "Oranges",
    "Mangoes"
];

let myMixedArray = [
    16,
    "20",
    "Apple",
    true,
    {name: "divine"},
    null
]

const findLength = myMixedArray.length;

console.log(findLength);

const findIndex = myMixedArray.indexOf("Apple")
console.log(findIndex);
