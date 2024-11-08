let numbers=[1,2,3,4,5,6,7,8,9,10]; // add numbers from 1 to 10 into this array
let mentors=['Anahid', 'Ali', 'Mehdi']; // Create an array with the names of the mentors: Anahid, Ali and Mehdi
console.log(numbers);
console.log(mentors);

const numbers1 = [0, 1, 2, 3]; // Don't change this array literal declaration
numbers[0]=1
numbers.push(4);
console.log(numbers1);

let number= 6;

switch (number) {
    case 0:
      console.log("monday");
      break;
    case 1:
        console.log("tuesday");
        break;
    case 2:
        console.log("wednesday");
        break;
    case 3:
        console.log("thursday");
        break;
    case 4:
        console.log("friday");
        break;
    case 5:
        console.log("saturday");
        break;
    case 6:
        console.log("sunday");
        break;
    default:
        console.error("wrong");
}

const numbers = [10, 50, -8, 3, 0, 100, 70];
let ascendingNumbers=numbers.sort(function(a,b){
    return(a-b)
}
);
console.log(ascendingNumbers);

let descendingNumbers=numbers.sort();
console.log(descendingNumbers);

let programs = ['java', 'kotlin', 'javascript', 'python', 'typeScript'];
let javascriptContain="javascript";

if (programs.includes(javascriptContain)){
    console.log("The array contains javascript");
}else {
    console.log("The array does not contain javascript");
}

let colors = ['red', 'green', 'blue', 'yellow', 'orange'];
let filterdColors=colors.splice(2,2);
console.log(colors);

let primeNumbers = [2, 3, 5, 7];
let evenNumbers = [2, 4, 6, 8];
let oneArray=primeNumbers.concat(evenNumbers);
console.log(oneArray);

let languages = ["JavaScript", "Java", "C", "Python"];

// checking whether the array contains 'Python'
let days = ["sunday", "monday", "tuesday", "wednesday"];
let bib = days.includes("tuesday");
 bib=days.includes("saturday")
console.log(bib);


let numbers=[1,2,3,4]
let check=numbers.indexOf(2)
 console.log(check);

let information=["julia, robert, 24"]
let cominformation=[information,"engineer","canada"]
let slice=cominformation.slice(0,2)
console.log(slice)


let ages=[13,5,68,12,7]
ages.sort( function(a,b){
    return(a-b)
}

)
console.log(ages)