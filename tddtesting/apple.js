var readlineSync = require("readline-sync");
console.log("Hi, Welcome! ");

var userName = readlineSync.question('May I have your name? ');

console.log("Hi " +userName +" ! ");

var countries = ["Australia","New Zealand","Fiji","Samoa","Tuvalu","Kiribati"]
console.log(countries)
var country = readlineSync.question('Hi '+ userName + ' Please choose a country?');

if(country == "Fiji" && country == "Fiji"){

    console.log("The weather is hot for the next week")
}else {

    console.log("The weather is rain for the next week")
}