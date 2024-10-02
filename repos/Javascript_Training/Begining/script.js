/**console.log("Hello, Wolrd")*/


// let admin, name;

// name = "John";

// admin = name;

// admin = "John";

/**alert( admin );*/

// let ourPlanetName = "Earth";

// let currentUser = "John";

// const birthday = "18/02/1998";
//On this instance we have birthday known from the begining.
//It is hard coded. So we should have the variable in upper case.
// const BIRTHDAY = "18.02.1998";

// const age = someCode(birthday);
//regarding age variable, we should have it in lower case
//since it changes based on a function.

// let name = "Ilya";

// console.log( typeof "Ilya" );

// alert( `hello ${1}` ); // ?
// console.log( typeof 1 );

// alert( `hello ${"name"}` ); // ?
// console.log( typeof "name" );

// alert( `hello ${name}` ); // ?
// console.log( typeof name );


// let askName = prompt('What is your name', ' ');

// alert(`Your name is ${askName}`);

// let a = 1, b = 1;

// let c = ++a;
// let d = b++; 

// alert( ++a );
// alert( b++ );

// alert( a );
// alert( b );

// let a = 2;

// let x = 1 + (a*=2);

// alert( a );
// alert( x );

/**let a = "" + 1 + 0;
console.log( typeof a ); */
    // s The addition with 
    //a string "" + 1 converts 1 to a string: "" + 1 = "1"
    //, and then we have "1" + 0, the same rule is applied.
//console.log( a ); // "10"

//let b = "" - 1 + 0;
//console.log( typeof b ); // n The subtraction 
    //- (like most math operations) only works 
    //with numbers, it converts an empty string "" to 0.
//console.log( b ); // -1

//let c = true + false;
//console.log( typeof c ); // n
//console.log( c ); // 1 

//let d = 6 / "3";
//console.log( typeof d ); // n
//console.log( d ); // 2

//let e = "2" * "3"
//console.log( typeof e ); // n
//console.log( e ); // 6

//let f = 4 + 5 + "px"
//console.log( typeof f ); // s
//console.log( f ); // "9px"

//let g = "$" + 4 + 5
//console.log( typeof g ); // s
//console.log( g ); // "$45"

//let h = "4" - 2
//console.log( typeof h ); // n
//console.log( h ); // 2

//let i = "4px" - 2
//console.log( typeof i ); // n
//console.log( i ); // NaN

//let j = "  -9  " + 5
//console.log( typeof j ); // s The addition with 
    //a string appends the number 5 to the string.
//console.log( j ); //" -9  5"

//let k = "  -9  " - 5
//console.log( typeof k ); // n The subtraction 
    //always converts to numbers, so it makes " -9 " 
    //a number -9 (ignoring spaces around it).
//console.log( k ); //-14

//let l = null + 1
//console.log( typeof l ); // n null becomes 0 
    //after the numeric conversion.
//console.log( l ); //1

//let m = undefined + 1
//console.log( typeof m ); // n undefined becomes 
    //NaN after the numeric conversion.
//console.log( m ); //NaN

//let n = " \t \n" - 2
//console.log( typeof n ); // n Space characters 
    //are trimmed off string start and end when a 
    //string is converted to a number. Here the 
    //whole string consists of space characters, 
    //such as \t, \n and a “regular” space between them. 
    //So, similarly to an empty string, it becomes 0.
//console.log( n ); //-2


// let o = prompt("First number?", 1);
// let p = prompt("Second number?", 2);

// let sum = +o + +p;

// alert(`The sum is ${+o + +p}`); 
// we have 2 options.
// Either we use + before prompts to turn it into a number
// or in the alert as per above.


// console.log(23 + 97);

// let number = [6,7,2.5,5,9,15];
// console.log(number);

// console.log((4 + 6 +9) / 77);

// let a = 10;
// let b = 7 * a;
// console.log( a );
// console.log (9 * a);

// const MAX = 57;

// let actual = MAX - 13;

// let percentage = actual / MAX;

// console.log(percentage);

// const single = 'Single quotes';
// const double = "Double quotes";
// const backtick = `Backtick`;

// console.log(single);
// console.log(double);
// console.log(backtick);

//not OK
// let button = document.querySelector("button");
// function question() { 
//     const question = prompt(`What is the "official" name of JavaScript?`, "");
//     const answer = document.querySelector("#question");
//     button.textContent = 
//         {if (answer =`ECMAScript`) {
//             return `Right!`;
//         } else {
//             return `You don't know? “ECMAScript”!`;
//         } 
//     }
// }

// button.addEventListener("click", question);


// function checkAge(age) {
//     if (age > 18) {
//       return true;
//     } else {
//       return confirm('Did parents allow you?');
//     }
//   }

// function checkAge(age) {
//     return (age > 18) ? true : confirm('Did parents allow you?');
// };

// alert(checkAge(15));

// function checkAge(age) {
//     return age > 18 || confirm('Did parents allow you?');
// }

// alert(checkAge(13));

// min(2, 5) == 2
// min(3, -1) == -1
// min(1, 1) == 1

// function min(a,b) {
//     if (a < b) {
//         return a;
//     } else {
//         return b;
//     }
// };

// function min(a,b) {
//     return (a < b) ? a : b
// }

// function min(a,b) {
//     return a < b || b
//     }

// alert(min(3, -1));

// pow(3, 2) = 3 * 3 = 9
// pow(3, 3) = 3 * 3 * 3 = 27
// pow(1, 100) = 1 * 1 * n * 1 = 1

// function pow(a, n) {
//     let result = a;

//     for (let i = 1; i < n; i++) {
//         result *= a;
//     }

//     return result;
// }

// let a = prompt('Insert a?', '');
// let n = prompt('Insert n?', '');

// if (n < 1) {
//     alert(`Power ${n} is not supported, use a positive integer`);(n ='0') 
//     } else {
//       alert( pow(a,n) );
// };



// function ask(question, yes, no) {
//     (confirm(question))? 
//     yes():
//     no();
//     }
    
//     ask(
//     "Do you agree?",
//     () => alert("You agreed."),
//     () => alert("You canceled the execution.")
//     );


// function add7() {
//     let number = parseInt(prompt("Insert a number"));
//     newNumber = 7 + parseInt(number);
//     return newNumber;
// }
// alert(add7());

// function multiply() {
//     let x = parseInt(prompt("Insert first number"));
//     let y = parseInt(prompt("Insert second number"));
//     operationMultiply = x * y;
//     return operationMultiply;
// }
// alert(multiply());

// function capitalize() {
//    const text = prompt("Write something");
//     newString = text.charAt(0).toUpperCase() + text.slice(1).toLowerCase();
//     return newString;
// }
// alert(capitalize());

// function lastletter() {
//     const ask = prompt("Write a word");
//     newstring = ask.slice(-1);
//     return newstring;
// }
// alert(lastletter());

// function Fizzbuzz() {  
// let answer = parseInt(prompt("Enter a number that you would like to Fizzbuzz up to: "));

//     for (let i = 1; i <= answer; i++) {
//         if(i % 3 === 0 && i % 5 === 0) {
//             console.log("Fizzbuzz");
//         } else if(i % 3 === 0) {
//             console.log("Fizz");
//         } else if(i % 5 === 0) {
//             console.log("Buzz");
//         } else {
//             console.log(i);
//         };
//     };
//     return answer;
// };

// Fizzbuzz();

// let x = 3;

// while (x) {
//   alert( x-- );
// }

// let p = 0;
// while (++p < 5) alert( p );


// let i = 0;
// while (i++ < 5) alert( i );

// for (let i = 0; i < 5; i++) alert( i );

// for (let i = 0; i < 5; ++i) alert( i );

// for(let i = 2; i < 10; i++) {
//     if (i % 2 == 0) continue;
//     alert(i);
// }

// for(let i = 2; i < 10; i++) {
//     if (i % 2) {
//         alert(i);
//     }
// } 


// for(let i = 2; i < 10; i++) {
//     if (i % 2 == 0) { 
//         alert(i);
//     }
// }   

// let i = 0;
// while(i < 3) {
//     alert( `number ${i}!` );
//     i++;
// }

// i > 100

// prompt("Enter another number greater than 100");


// let i;
// do { i = prompt(`Enter a number greater than 100?`, 0);
// } while (i <= 100 && i);
// console.log(i);
    

// let n = 10;

// nextPrime:
// for (let i = 2; i <= n; i++) {
    
//     for (let j = 2; j < i; j++) { 
//     // let num = prompt(`Enter a numbers ${i}, ${j}?`);
//     if (i % j == 0) continue nextPrime;
//     } 
//     alert(i);
// }
// alert(nextPrime);


// function repeatString(string, count) {
//     result = "";
//     for(let i; i < count; i++) {
//         result += string;
//     }
//     return repeatString;
// }

// repeatString("string", 16);

// const repeatString = function(string, count) {
//     if(count < 0) return "Error";
//     let result = "";
//     for(let i = 0; i < count; i++) {
//         result += string;
//     } 
//     return result;  
// };
// console.log(repeatString("Hello", 10));

// const reverseString = function(word) {
//     let result = "";
//     for(let i = word.length - 1; i >= 0; i--) {
//         result += word[i];
//     } 
//     return result;
// };
// console.log(reverseString("Backwards"));

// const removeFromArray = function(array,...manyArgs) {
//     const newArray = [];
//     array.sort(function(a, b){return a - b});
//     array.forEach((item) => {
//         if(!manyArgs.includes(item)) {
//             newArray.push(item);
//         }
//     });
//     return newArray;   
// };

//other solution
// const removeFromArray = function(array, ...args) {
//   return array.filter(val => !args.includes(val))
// }
// console.log(removeFromArray([10, 5, 9, ,76, 3], 9));

// let i = 0;
// let j = 10;
// checkiandj: while (i < 4) {
//   console.log(i);
//   i += 1;
//   checkj: while (j > 4) {
//     console.log(j);
//     j -= 1;
//     if (j % 2 === 0) {
//       continue checkj;
//     }
//     console.log(j, "is odd.");
//   }
//   console.log("i =", i);
//   console.log("j =", j);
// }


// const sumAll = function(number, sum) {
//   let i = 0;
//   let j = 0;
//   let range = [];
//   let sum = 0;
//   while(i > 4) {
//       let result = i + j;
//       i ++;
//       if (j < 4) {
//         return result;
//       }
//       console.log(j);
//   } 
// };

// const sumAll = function(a, b) {
//   let min = Math.min(a, b)
//   let max = Math.max(a, b)
//   let range = []
//   let sum = 0
  
//   for (let i = min; i<= max; i++) {
//     range.push(i)
//   } 
  
//   for (let j = 0; j <= range.length; j++) {
//     if (j < 0 || typeof j != "number") {
//      return sum = 'ERROR'
//     }else
//     return sum = sum + j
//   } 
// };

// const sumAll = function(a, b) {
//   if(!Number.isInteger(a) || !Number.isInteger(b)) return 'ERROR';
//   if(a < 0 || b < 0) return 'ERROR';
//   return (Math.abs(a-b) + 1)*(a + b)/2;
// };

// console.log(sumAll(-2, 4));


// const leapYears = function(year) {
//   if(year % 4 === 0 && year % 400 === 0) {
//     return `It is a leap year!`;
//       } else if(year % 100 === 0 || year % 400 == 0) {
//           return `Is not leap year!`;
//       } else {
//         `Is not a leap year!`;
//       }
//     };

// const leapYears = function(year) {
//     return (year % 100 === 0) ? (year % 400 === 0) : (year % 4 === 0);
// };

// console.log(leapYears(1997));

// const convertToFahrenheit = function(C) {
//     result = Math.round(((C * 9) / 5 + 32) * 10) / 10;
//     return result;
//   };
// alert(convertToFahrenheit(73.2));

// const convertToCelsius = function(F) {
//     result = Math.round((F - 32) * (5 / 9) * 10)/10;
//     return result;
//    };
// alert(convertToCelsius(-10));


// const power = function(a, p) {
//     let result = a;
//     for (let i = 1; a < p; i++) {
//         result *= a;
//     }
//     if(p < 0) {
//         return 'ERROR';
//     } else { 
//         return pow(a, p);
//     }
// };
// console.log(power(2,3));

/// function pow(a, n) {
//     let result = a;

//     for (let i = 1; i < n; i++) {
//         result *= a;
//     }

//     return result;
// }

// let a = prompt('Insert a?', '');
// let n = prompt('Insert n?', '');

// if (n < 1) {
//     alert(`Power ${n} is not supported, use a positive integer`);(n ='0') 
//     } else {
//       alert( pow(a,n) );
// };

// const add = function(a, b) {
//     return a + b;
// };

// console.log(add(2, 6));

// const multiply = function(newArray) {
// 	let total = 1;
//     for (let i = 0; i < newArray.length; i++) {
//         total *= newArray[i];
//     }
//     return total;
// }

// console.log(multiply([3, 4, 8, 9]));

// const power = function(a, p) {
//     let result = Math.pow(a, p);
//     for (let i = 0; i < 0; i++);
//     if (p < 1) { 
//       return 'ERROR'
//     }
//       return result;
//   };

//   console.log(power(3, 0));

// const factorial = function(number) {
//     if (number < 0) {
//       return -1;
//     } 
//     else if (number == 0) {
//       return 1;
//     } 
//     else {
//         return (number * factorial(number - 1))
//   };
// }
// console.log(factorial(5));

// const palindromes = function (str) {
//     let word = "";
//     for(let i = str.length - 1; i >= 0; i--) {
//         word += str[i];
//     } if(str == word) {
//         return 'true';
//     } else {
//         return 'false';
//     } 
// };

// const palindromes = function (str) {
//     let word = "";
//     for(let i = str.length - 1; i >= 0; i--) {
//         word += str[i];
//     } 
//     return (str) ? (str == word) : ( str != word);
// };

// const palindromes = function (str) {
//     //We create a variable that contains an alphanumeric chars
//     const alphanumerical = 'abcdefghijklmnopqrstuvwxyz0123456789';

//     // Convert to lowercase, split to array of individual characters, filter only valid characters, then rejoin as new string
//     const originalStr = str
//     .toLowerCase()
//     .split('')
//     .filter((character) => alphanumerical.includes(character))
//     .join('');
    
//     const reversedStr = originalStr.split('').reverse().join('');

//     return (originalStr) ? (originalStr == reversedStr) : (originalStr != reversedStr);
// };
// console.log(palindromes('Animal loots foliated detail of stool lamina.'));

// const fibonacci = function(count) {
//     const f = [0, 1];
    
//     if(count < 0) { return `OOPs`};
//     if(count == 0) { return 0};

//     for (let i = 2; i <= count; i++) {
//        f[i] = f[i - 1] + f[i - 2];
//     }
//     return f[count];
// };
// console.log(fibonacci(4));


// const getTheTitles = function() {
//     const books = [
//         {
//           title: 'Book',
//           author: 'Name'
//         },
//         {
//           title: 'Book2',
//           author: 'Name2'
//         }
//       ];
//     return books.map(obj => obj.title);
// };

// console.log(getTheTitles());

// const books = [
//             {
//               title: 'Book',
//               author: 'Name'
//             },
//             {
//               title: 'Book2',
//               author: 'Name2'
//             }
//           ];
// const getTitles = function () {
//     return books.map((book) => book.title);
//   };

// console.log(getTitles());

const people = [
    {
      name: "Carly",
      yearOfBirth: 1942,
      yearOfDeath: 1970,
    },
    {
      name: "Ray",
      yearOfBirth: 1962,
      yearOfDeath: 2011,
    },
    {
      name: "Jane",
      yearOfBirth: 1912,
      yearOfDeath: 1941,
    },
  ];

// const getAge = function (birth, death) {
// if (!death) { 
//     death = people.map(obj => obj.yearOfDeath - obj.yearOfBirth);
//     };
//     return death;
// };

// const findTheOldest = function(people) {
//   return people.reduce((oldest, currentPerson) => {
//     const oldestAge = getAge(oldest.yearOfBirth, oldest.yearOfDeath);
//     const currentAge = getAge(
//         currentPerson.yearOfBirth, 
//         currentPerson.yearOfDeath);
//     return oldestAge < currentAge ? currentPerson : oldest;
//   });
// };

// console.log(findTheOldest(people));

const getAge = function (birth, death) {
    if (!death) {
      death = new Date().getFullYear();
    }
    return death - birth;
  };
  
  const findTheOldest = function (people) {
    return people.reduce((oldest, currentPerson) => {
      const oldestAge = getAge(oldest.yearOfBirth, oldest.yearOfDeath);
      const currentAge = getAge(
        currentPerson.yearOfBirth,
        currentPerson.yearOfDeath
      );
      return oldestAge < currentAge ? currentPerson : oldest;
    });
  };

  console.log(findTheOldest(people));