console.log("\n\nHELLO WORLD\n\n\n");

//STRINGS
//-------------------------

console.log("\n\nSTRINGS\n\n\n");

console.log("a string with 'single' quotes"); //single quote
console.log('a string with "double" quotes'); //double quote
console.log(`a string with back ticks`); //back tick
console.log('a '+'string '+'in '+'piecesn '); //concatentation


//NUMBERS
//-------------------------

console.log("\n\nNUMBERS\n\n\n");

console.log(3); //number
console.log(3+3); //add
console.log(3-3); //subtract
console.log(3*3); //mutiply
console.log(3/3); //divide
console.log(10%3) //modulo


//STRINGS AND NUMBERS
//-------------------------

console.log("\n\STRINGS AND NUMBERS\n\n\n");

console.log("100*50"); //numbers in a string
console.log("100*50 equals " +100*50); //adding numbers to a string
console.log(100*50+"25"); //adding string to a number
console.log(`the year was ${2024-333} 333 years ago`); //template string


//BOOLEAN
//-------------------------

console.log("\n\nBOOLEAN\n\n\n");

console.log(true, false); //true and false
console.log('3<4 :', 3<4); //less than
console.log('4>10 :', 4>10); //greater than
console.log('2>=1 :', 2>=2); //greater than or equal to
console.log('6<=3 :', 6<=3); //less than or equal to
console.log('8+2 == 5+5 :', 8+2==5+5); //equal to
console.log("'tomato' != 'tomato'", 'tomato' != 'tomato'); //unequal to


//VARIABLES
//-------------------------

console.log("\n\nVARIABLES\n\n\n");

var studentLoanDebt = 800;
console.log("studentLoanDebt: ", studentLoanDebt);

studentLoanDebt = studentLoanDebt-100;
console.log("studentLoanDebt: ", studentLoanDebt);

studentLoanDebt = studentLoanDebt+50;
console.log("studentLoanDebt: ", studentLoanDebt);


//ARRAYS
//-------------------------

console.log("\n\nARRAYS\n\n\n");

var myFavoriteColors = [
    "yellowgreen", 
    "fuchsia", 
    "gainsboro"
];
console.log("myFavoriteColors :", myFavoriteColors);
console.log("myFavoriteColors[1] :", myFavoriteColors[1]);


//OBJECTS
//-------------------------

console.log("\n\nOBJECTS\n\n\n");

var me = {
    firstName: "Mark",
    lastname: "Wong",
    age: 20,
    likesMayo: true,
};
console.log("me :", me);
console.log("me['firstName'] :", me['firstName']);


//ARRAY OF OBJECTS
//-------------------------

console.log("\n\nARRAY OF OBJECTS\n\n\n");

var us = [
    {
        firstName: "Jordan",
        lastName: "Trimble",
    },
    {
        firstName: "Mark",
        lastName: "Wong",
    },
    {
        firstName: "Kevin",
        lastName: "Li",
    },
];

console.log(us);
console.log(us[0]);
console.log(us[0]["lastName"]);