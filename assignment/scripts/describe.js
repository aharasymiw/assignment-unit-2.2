// WHAT IS THIS EVEN DOING?

// For questions 1-3, each code block is syntactically and logically correct. Your job is to describe what is happening. 
// They are in isolation -- variables in one question do not affect other questions.
// Describe the code as it would be run, and make sure you give us the console.log's value at the end.
// (Don't just say 'we console log the variable' -- instead say something like 'we console log 'yes'')


// 0. WRITE YOUR DESCRIPTION HERE
// //EXAMPLE. We make a variable called number and set it to 1 as a number.
// Then we increment the number variable. Number is now 2.
// We check if number is greater than or equal to 2. 2 is equal to 2, so
// we console.log 'yes'.

//CODE
/*
let number = 1;

number++;

if (number >= 2) {
  console.log('yes');
}

*/


// 1. WRITE YOUR DESCRIPTION HERE
//    We make a variable called name and set it to Dane.
//    Then We check if name is strictly equal to Mary.
//    If it is, we console.log 'Hi, Mary!',
//    otherwise we console.log 'How do you do?'.


//CODE
/*
let name = 'Dane';

if (name === 'Mary') {
  console.log('Hi, Mary!');
} else {
  console.log('How do you do?');
}


*/

// 2. WRITE YOUR DESCRIPTION HERE
//    We make a variable called secret, with no initialization value.
//    We make a variable called code and set it's value to the number 123.
//    We check if code is strictly equal to the number 123.
//    If it is, we set the value of secret to the string 'super',
//    and we double the value of code, overwriting the value of code to the number 246.
//    We check if the value of code is greater than the number 250. (It is not.)
//    If it is, we overwrite the value of secret, setting it to 'duper'. (It is not, so we don't)
//    We console.log the value of secret, which is still 'super'.

//CODE
/*
let secret;

let code = 123;

if(code === 123) {
  secret = 'super';
  code = code * 2;
}

if (code > 250) {
  secret = 'duper'
}

console.log(secret)

*/

// 3. WRITE YOUR DESCRIPTION HERE
//    We make a variable called isStudent and set it to true.
//    We make a variable called age and set it to the number 34.
//    We make a variable called zip and set it to the number 55407.
//    if isStudent is strictly equal to true (it is) AND zip is greater than 80000 (it's not),
//    we console.log 'You're a student on the West Coast!', (we don't)
//    otherwise if isStudent is strictly equal to false (it's not) OR age is less than 30 (it's not),
//    we console.log 'What are your hobbies?', (we don't)
//    otherwise if isStudent is strictly equal to true (it is),
//    we console.log 'Welcome to Prime!', (we do!  Then we peace out!)
//    otherwise, if none of the above conditionals were met (one was), we console.log 'How about the weather?' (we don't).



//CODE
/*
let isStudent = true;
let age = 34;
let zip = 55407;

if (isStudent === true && zip > 80000 ) {
  console.log(`You're a student on the West Coast!`);
} else if (isStudent === false || age < 30) {
  console.log('What are your hobbies?');
} else if (isStudent === true) {
  console.log('Welcome to Prime!');
} else {
  console.log('How about the weather?')
}

*/




// REVERSE
// Now, for questions 4-6, we'll give you a description and some code. 
// Some of the code will NOT match the description.
// Comment above the problem code, and describe a potential solution.
// Look closely -- things are logically incorrect or missing and wrong in the code!

// EXAMPLE
// 0. (DESCRIPTION OF CORRECT BEHAVIOR)
// We make a variable called number and set it to 1 as a number.
// Then we increment the number variable. Number is now 2.
// We check if number is greater than or equal to 2. 
// -- it is, so we console.log 'yes'

//CODE
/*
let number = 1;

// FIX - number-- decrements number, but the instructions ask to increment.
// Should be number++.
number--;

if (number >= 2) {
  console.log('yes');
}

*/



//4. We start with three variables -- colorOne is set to 'blue' and 
// colorTwo is set to 'red', and mix is set to true. We check if mix is true 
// -- it is, so we set colorOne and colorTwo to 'purple'

// FIX - 
// colorOne and colorTwo are set to 'red' and 'blue', respectively, we should
// swap their values.
// inside the if conditional, we only assign colorOne to 'purple', but we should
// also assign colorTwo to 'purple'.

/*
let colorOne = 'red';
let colorTwo = 'blue';
let mix = true;

if (mix === true) {
  colorOne = 'purple';
}
*/

//5. We start with two variables -- temp is set to 40 and time is set to 4.
// We check if temp is higher than 39 and if time is greater or equal to  4 
// -- they are so we console.log 'throw away the food!'

// FIX - 
// We initialize time as a constant, we should use var instead of const.
// We should use the logical AND operator (&&) instead of the logical OR operator (||).

/*
let temp = 40;
const time = 4;

if (temp > 39 || time >= 4) {
  console.log('throw away the food!');
}
*/

//6. We start with two variables -- age is set to 21 and minAge is set to 21.
// We check if age is greater than or equal to minAge 
// -- it is, so we console.log 'enter'.

// FIX - 
// We initialize minAge as a constant, we should use var instead of const.
// The results of our branching if logic are reversed, we should swap the console.log statements.

/*
let age = 21;
const minAge = 21;

if(minAge <= age) {
  console.log('no entry');
} else {
  console.log('enter');
}
*/

