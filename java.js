var friendName=prompt ('Enter Your Name');

if (friendName=='Yasin'){
    var schoolName =prompt('Enter your School Name');

    if (schoolName=='SMIT'){
        var matricPassedYear=prompt('Enter your Matric passing year when you done it');

    if (matricPassedYear=='2010'){
        console.log('Hurry We are Friends!');
    }
    else {
        console.log('We were study in the same school but we are not friends');
    }
}
else {
    console.log('Your Name is familiar but we are not friends');

}
}
else {
    console.log('We are not friends!');
}

// Question No.01
var _number=prompt('Type any number');
var divisbleNumber=3;
var finalNumber=_number%divisbleNumber;

if (finalNumber==0){
    console.log('The number is divisible by 3');

}
else {
    console.log('The number is not divisble by 3');
}

// Question No. 02
var inputNumber=+prompt('Enter any Number');
var divisbleNumber=2;
var finalNumber=inputNumber%2;

if (finalNumber==0){
    console.log('Even Number');
}
else {
    console.log('Odd Number')
}

// Question No. 03

var _age=+prompt('Enter your Age');

if (_age > 18){
    console.log('Old Enough');

}
else {
    console.log('Too Young');
}

// Question No 04

var inputName=prompt('Enter Your Name');

if (inputName=='Yasin'){
    console.log('Welcome Sir!');

}
else {
    console.log('');
}

// Question No 07

var inputNumber=+prompt('Enter any Number');
var inputNumber2=+prompt('Enter another Number');
var operator=prompt('Operator');
var result;

if (operator=='+'){
    result=inputNumber+inputNumber2;
    console.log(result);
}
else if (operator=='-'){
    result=inputNumber-inputNumber2;
    console.log(result);
}
else if (operator=='*'){
    result=inputNumber*inputNumber2;
    console.log(result);
}
else if (operator=='/'){
    result=inputNumber/inputNumber2;
    console.log(result);
}
else if (operator=='%'){
    result=inputNumber%inputNumber2;
    console.log(result);
}

else {
    console.log('Operator is not valid');
}

// Question No 08 
var _Time = +prompt('Enter the Time');

if(_Time >=0 && _Time < 1200) {
    console.log('Good Morning');
}

else if (_Time >= 1200 && _Time < 1700) {
    console.log('Good Afternoon');
}

else if (_Time >= 1700 && _Time < 2100) {
    console.log('Good Evening');
}

else if (_Time >= 2100 && _Time <= 2359) {
    console.log('Good Night');
}

else {
    console.log('Invalid Time');
}

// Question No 09


var _Year = +prompt('Enter a year in YYYY format');

if ((_Year % 4 == 0 && _Year % 100 !== 0) || (_Year % 400 === 0)) {
    console.log(_Year + " is a Leap Year");
}
else {
    console.log(_Year + " is not a leap year");
}

// Question no 10

var correctPassword = 'Yasin1234'
var inputuser = prompt('Enter your password');
if (!inputuser) {
    alert('Please enter your password');
    var inputuser = prompt('Enter your password');
    var inputuser2 = prompt('Please Retype your password');
}
else if (inputuser == correctPassword || inputuser !== correctPassword) {
    var inputuser2 = prompt('Please Retype your password');

}



if (inputuser === correctPassword && inputuser2 == correctPassword) {
    console.log("Password is Correct!");
}

else {
    console.log("Incorrect Password");
}
// Question no 11

var firstName = "Ali"
var firstName = prompt('Enter the Name');
if (firstName === 'Fahad') {
    console.log("Hello Fahad!");
}
else {
    console.log("You are not Fahad");
}

// Question nO 12

var greeting;
var hour = 13;
var hour = +prompt("Enter the time");
if (hour < 18) {
    console.log("Good day");
}
else {
    console.log("Good evening");
}

//  Question no 13

var number01 = +prompt('Enter number 01');
var number02 = +prompt('Enter number 02');

if (number01 > number02) {
    console.log("The larger number is ", number01);
}
else if (number02 > number01) {
    console.log("The larger number is", number02);
}

else if (number01 == number02) {
    console.log("Both numbers are equal!");
}
else {
    console.log("Invalid Number");
}
// Question no 14

var inputuser = +prompt("Enter any Number");

if (inputuser > 0) {
    console.log(inputuser, "Its a Positive Number");
}
else if (inputuser < 0) {
    console.log(inputuser, "Its a negative number");
}
else if (inputuser == 0) {
    console.log(inputuser, "Its a zero number");
}
else {
    console.log("Invalid");
}

// Question no 15

var inputuser = +prompt("Enter the time");

if (inputuser >= 6 && inputuser <= 9) {
    console.log("Breakfast is Served!");
}
else if (inputuser >= 11 && inputuser <= 13){
console.log("Time for Lunch!");
}
 else if (inputuser >= 17 && inputuser <= 20){
console.log("Its Dinner Time!");
}
else {
    console.log("Sorry, you'll have to wait, or go get a snack.")
}

// Question no 16

var myVariable =10;
console.log("The type of this variable",myVariable,"is",typeof myVariable,);

var myVariable="Hello";
console.log("The type of this variable",myVariable,"is",typeof myVariable,);

var myVariable=true;
console.log("The type of this variable",myVariable,"is",typeof myVariable,);

var anothervariable;
console.log("The type of this variable",myVariable,"is",typeof myVariable,);

// Question no 17

var myCharacter= prompt("Enter a single character").toLowerCase();

if (myCharacter.length !==1) {
    console.log("Please enter only one character")
} 
else if  (myCharacter=='a' || myCharacter=="e" || myCharacter=="i" || myCharacter=='o' || myCharacter=='u'){
    console.log("True");
}
else {
    console.log("False");
}
// Question No 18

var number01=+prompt("Enter Number");
var number02=+prompt("Enter Another Number");

if (number01===number02){
    console.log("True")
}
else {
    console.log("False");
}

// Question no 19

var month=+prompt("Enter the Month Number");

if (month==1){
    alert("January");
}
if (month==2){
    alert("February");
}
if (month==3){
    alert("March");
}
if (month==4){
    alert("April");
}
if (month==5){
    alert("May");
}
if (month==6){
    alert("June");
}
if (month==7){
    alert("July");
}
if (month==8){
    alert("August");
}
if (month==9){
    alert("September");
}
if (month==10){
    alert("October");
}
if (month==11){
    alert("November");
}
if (month==12){
    alert("December");
}
else {
    console.log("Invalid Number")
}

// Question No 20

var _age=+prompt("Enter your age");
if (_age<18){
    console.log("Too Young");
}
else {
    console.log("Old Enough");

}
