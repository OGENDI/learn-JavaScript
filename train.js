//Example
// var ourName = 'freeCodeCamp';
// var ourStr = 'Hello, our name is ' + ourName + ', how are you?';

// var myName = 'Derick';
// var myStr = 'My name is ' + myName + ' and I am well!';
// console.log(myStr)

// var anAdjective = 'awesome!';
// var ourStr = 'freecCodeCamp is ';
// ourStr += anAdjective;
// console.log(ourStr)

// var someAdjective = 'worthwhile';
// var myStr = 'Learning to code is ';
// myStr += someAdjective;
// console.log(myStr)

// var firstNameLength = 0;
// var firstName = 'Ada';

// firstNameLength = firstName.length;
// console.log(firstNameLength)

// var lastNameLength = 0;
// var lastName = 'Derick';
// lastNameLength = lastName.length;
// console.log(lastNameLength)

// var firstName = 'Derick';
// var lastLetterOfFirstName = firstName[firstName.length - 1];
// console.log(lastLetterOfFirstName)

// var lastName = 'Ogendi';
// var lastLetterOfLastName = lastName[lastName.length - 1];
// console.log(lastLetterOfLastName)

// function wordBlanks(myNoun,myAdjective, myVerb, myAdverb) {

//     var result = '';
//     result += 'The ' + myAdjective + ' '+  myNoun + ' ' +  myVerb + ' around the compound ' + myAdverb; 

//     return result;
// }

// console.log(wordBlanks('Horse', 'fast', 'sprints', 'everytime'));


// var ourArray = ['Derick', 28];

// var myArray = ['Jay' , 3];

// var ourArray = [['The universe', 42], ['everything' , 101010]];

// var ourArray = [50,60,70];
// var ourData = ourArray[0];

// var myArray = [50,60,70]

// var myData = myArray[1];
// console.log(myData)

// var ourArray = [18,76,79];
// ourArray[1] = 43;

// console.log(ourArray)

// var myArray = [[1,2,3], [4,5,6], [7,8,9],[[10,11,12],13,14]];
// console.log(myArray)

// var myData = myArray[0][0];
// console.log(myData)

// var myNewData = myArray[2][1];
// console.log(myNewData)

// var ourArray = ['Derick', 'F', 'cat'];
// ourArray.push(['happy', 'joy']);

// console.log(ourArray)

// var myArray = [['Derick', 28], ['dog', 4]];
// myArray.push(['kite', 5]);

// console.log(myArray)

// var ourArray = [1,2,3];
// var removedFromOurArray = ourArray.pop();
// console.log(removedFromOurArray)

// var myArray = [['John', 23], ['cat', 3]];
// var removedFromOurArray = myArray.pop();
// console.log(removedFromOurArray)

// var ourArray = ['Derick', 'D', ['dog']];
// var removedFromOurArray = ourArray.shift();
// console.log(removedFromOurArray)


// var ourArray = ['Derick', 'D', 'cat'];

// ourArray.shift();
// console.log(ourArray)
// ourArray.unshift('big');
// console.log(ourArray)

// var myArray = ['James', 'F', 34];
// myArray.shift();
// console.log(myArray)

// myArray.unshift('Today');
// console.log(myArray)

// function ourReusableFunction() {
//     console.log('Hey Earth');

// }
// ourReusableFunction();
// ourReusableFunction();

// function ourFunctionWithArgs(c,d) {
//     console.log(c-d);

// }

// ourFunctionWithArgs(9, 4);

// function newFunction(a, b){
//     console.log(a%b);

// }

// newFunction( 9, 2);

// scope is the visibility of given variables in a program

// var myGlobal = 10;

// function fun1() {
//     var oopsGlobal =5;

// }

// function fun2() {
//     var output = '';
//     if (typeof myGlobal != 'undefined') {
//         output += 'myGLobal: ' + myGlobal;
//     }
//     if (typeof oopsGlobal != 'undefined') {
//         output += ' oopsGlobal: '+ oopsGlobal;
//     }
//     console.log(output);
// }

// fun1();
// fun2();


// Local scope
// function myLocalScope() {
//     var myVar = 5;
//     console.log(myVar);

// }
// myLocalScope();

// Local scope takes precedence over global scope when declared together

// var outerWear = 'Jeans';

// function myOutFit(){
//     var outerWear = 'trousers';

//     return outerWear;
// }
// console.log(myOutFit());

// function nextInLine(arr, item) {
//     arr.push(item);
//     return arr.shift();

// }

// var testArr = [1,2,3,4,5];

// console.log('Before: ' +JSON.stringify(testArr));
// console.log(nextInLine(testArr, 6));
// console.log('After: ' + JSON.stringify(testArr));

var eNUm = 10;
var name = 'Derick';


