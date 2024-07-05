/*Basic Foundation I
Please work on the following challenges and upload your work in a single file.
*/

/*
Personal Note:
Ive decided to create a random Array Generator that i will call each time a create a function. That way i can challend myself to create functions that arent "safe" and practice thinking out side of the box */
/* I got this idea from ChatGPT . 
I asked it to explain its example of a randomArrray generator.
 Here is my request: 

can you explain this to me in detail 
function generateRandomArray(length, min, max) {
    const arr = [];
    for (let i = 0; i < length; i++) {
        arr.push(Math.floor(Math.random() * (max - min + 1)) + min);
    }
    return arr;
} */
//Below is my Generator:
//creating a function that generates random array, inputs will be length, min# and max# it can have ex: 1 to 100 of -30 to 10

// Math.random()outputs, numbers between 0 and 1 ex: 0.65435
// doing +1 when subtracting max from min insures that after it been multiplied by Math.random() it wll return a value found with in the max to min range(including the max and min numbers)
//Math.floor will round down the scalled number
function generatingRandomArray(length, min, max) {
  let arr = [];
  for (let i = 0; i <= length; i++) {
    let scaledValue = Math.random() * (max - min + 1);
    let roundedValue = Math.floor(scaledValue); // Wanted to use Math.trunc, but i think Math.floor was best for randominzed numbers in an array
    arr.push(roundedValue + min); // to insure that the value wont be less than min.
  }
  return arr;
}
// console.log(generatingRandomArray(10,-3,10));
// console.log(generatingRandomArray(10,-10,5));
// console.log(generatingRandomArray(5,4,0));
/*
Question 1:
Get 1 to 255 - Write a function that returns an array with all the numbers from 1 to 255.
*/

function array1to255() {
  let counting = [];
  for (let i = 1; i <= 255; i++) {
    // i++;
    counting.push(i);
  }
  console.log(counting);
  return counting;
}
array1to255();

/*
Question 2:
Get even 1000 - Write a function that would get the sum of all the even numbers from 1 to 1000.  You may use a modulus operator for this exercise.
*/
let sum = 0;
function getEven() {
  for (let i = 1; i <= 1000; i++) {
    if (i % 2 == 0) {
      sum = sum + i;
    }
  }
  //console.log(sum);
  return sum;
}
console.log(`This is the total of Even Numbers found:  ${getEven()}`);

/*

Question 3:
Sum odd 5000 - Write a function that returns the sum of all the odd numbers from 1 to 5000. (e.g. 1+3+5+...+4997+4999).
*/
let oddSum = 0;
function getOdd() {
  for (let i = 1; i <= 1000; i++) {
    if (i % 2 == 1) {
      oddSum = oddSum + i;
    }
  }
  //console.log(oddSum);
  return oddSum;
}
console.log(`This is the total of Odd Numbers found: ${getOdd()}`);

/*
Question 4:
Iterate an array - Write a function that returns the sum of all the values within an array. (e.g. [1,2,5] returns 8. [-5,2,5,12] returns 14).
*/
let randomArr = generatingRandomArray(5, 15, -10);
let sumArray = 0;
function arrSum(randomArr) {
  for (let i = 0; i <= randomArr.length; i++) {
    sumArray += i;
  }
  console.log(sumArray);
}
arrSum(randomArr);

/*
Question 5:
Find max - Given an array with multiple values, write a function that returns the maximum number in the array. (e.g. for [-3,3,5,7] max is 7)
*/

function largArr() {
  let arrLarge = generatingRandomArray(5, 50, 10);
  let largest = Math.max(...arrLarge);

  return largest;
  //Learned about .Max and .spread from Max G.
}
console.log(`This is the largest number found: ${largArr()}`);
//Notes she gave:
// Using the spread syntax ...arr, the array [3, 1, 4, 1, 5, 9, 2, 6, 5, 3] is expanded to 3, 1, 4, 1, 5, 9, 2, 6, 5, 3.
//o, Math.max(...arr) is the same as Math.max(3, 1, 4, 1, 5, 9, 2, 6, 5, 3), which returns the largest number, 9.

/*
Question 6:
Find average - Given an array with multiple values, write a function that returns the average of the values in the array. (e.g. for [1,3,5,7,20] average is 7.2)
*/
let aveArray = generatingRandomArray(5, 20, 6);
let total = 0;
let average = 0;
function findAverage(aveArray) {
  for (let i = 0; i < aveArray.length; i++)
    return (average = aveArray.length / (total += aveArray[i]));
}
findAverage(aveArray);

/*
Question 7:
Array odd - Write a function that would return an array of all the odd numbers between 1 to 50. (ex. [1,3,5, .... , 47,49]). Hint: Use 'push' method.
*/
let numsArr = generatingRandomArray(50, 50, 1);
let odds = [];
function findOdd50(numsArr, odds) {
  numsArr.forEach((num) => {
    num % 2 === 1 ? odds.push(num) : null;
    return odds;
  });
}
findOdd50(numsArr, odds);
console.log(
  `This is the Array of Odd numbers found in the range 1 to 50: ${odds}`
);

/*
Question 8:
Greater than Y - Given value of Y, write a function that takes an array and returns the number of values that are greater than Y. For example if arr = [1, 3, 5, 7] and Y = 3, your function will return 2. (There are two values in the array greater than 3, which are 5, 7).
*/
let simpArray = generatingRandomArray(5, 10, 0);
let y = 3;
let numsGreater = [];
function greaterThanY(simpArray, y) {
  simpArray.forEach((num) => {
    num > y ? numsGreater.push(num) : null;
  });
}
greaterThanY(simpArray, y);
console.log(
  `This is the Array of numbers greater than the value of Y : ${numsGreater}`
);

/*
Question 9:
Squares - Given an array with multiple values, write a function that replaces each value in the array with the value squared by itself. (e.g. [1,5,10,-2] will become [1,25,100,4])
*/

function squaredSelf(arr) {
  for (let i = 0; i < arr.length; i++) {
    arr[i] = arr[i] * arr[i];
  }
  return arr;
}
squaredSelf(generatingRandomArray(10, 10, 0));
console.log(
  `This array of numbers have been squared: ${squaredSelf(
    generatingRandomArray(10, 10, 0)
  )}`
);

/*
Question 10:
Negatives - Given an array with multiple values, write a function that replaces any negative numbers within the array with the value of 0. When the program is done the array should contain no negative values. (e.g. [1,5,10,-2] will become [1,5,10,0])
*/
function negatives(arr) {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] < 0) {
      arr[i] = 0;
    }
  }
  return arr;
}
negatives(generatingRandomArray(10, 10, 0));
console.log(
  `This array of numbers has positive and 0 values: ${negatives(
    generatingRandomArray(10, 10, -10)
  )}`
);

/*
Question 11:
Max/Min/Avg - Given an array with multiple values, write a function that returns a new array that only contains the maximum, minimum, and average values of the original array. (e.g. [1,5,10,-2] will return [10,-2,3.5])
*/

function maxMinAvg(arr) {
  let newArr = [];
  newArr.push(Math.max(...arr));
  newArr.push(Math.min(...arr));
  let average = arr.reduce((sum, num) => sum + num, 0) / arr.length;
  newArr.push(average);
  console.log(`This array holds the max, min and average: ${newArr}`);
  return newArr;
}
maxMinAvg(generatingRandomArray(5, 10, 1));

/*
Question 12:
Swap Values - Write a function that will swap the first and last values of any given array. The default minimum length of the array is 2. (e.g. [1,5,10,-2] will become [-2,5,10,1]).
*/
function swapValues(arr) {
  console.log(arr);
  let temp = arr[0];
  arr[0] = arr[arr.length - 1];
  arr[arr.length - 1] = temp;
  console.log(arr);
}

swapValues(generatingRandomArray(5, 10, 1));

/*
Question 13:
Number to String - Write a function that takes an array of numbers and replaces any negative values within the array with the string 'Dojo'. For example if array = [-1,-3,2], your function will return ['Dojo','Dojo',2]. */

function numToString(arr) {
  //loop throw the array
  for (let i = 0; i < arr.length; i++) {
    //if the arr[i] is less than 0
    if (arr[i] < 0) {
      //update teh value to Dojo
      arr[i] = "Dojo";
    }
  }
  return arr;
}
console.log(numToString([10, -36, -8, -9]));
