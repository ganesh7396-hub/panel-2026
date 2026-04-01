Reverse string 
------------------

//1. Using split(), reverse(), and join()
function reversestring(str){
 return str.split('').reverse().join('')
}

input:console.log(reversestring("Ganesh"))
output:console.log('hsenaG')

2.Using a for Loop

function reverseString(str) {
    let reversed = '';
    for (let i = str.length - 1; i >= 0; i--) {
        reversed += str[i];
    }
    return reversed;
}
console.log(reverseString("Ganesh")); // Output: "hsenaG"

3. Using Recursion:

function reverseString(str) {
    if (str === '') return '';
    return reverseString(str.substr(1)) + str[0];
}
console.log(reverseString("Ganesh")); // Output: "hsenaG"

4. Using Reduce


function reverseString(str) {
    return str.split('').reduce((reversed, char) => char + reversed, '');
}
console.log(reverseString("Ganesh")); // Output: "hsenaG"



Here are simple and clean ways to find the largest word in a given string:
------------------------------------------------------------------------


. Using split() and a for Loop
💡 Question: Find the Longest Word in a Sentence


function findLargestWord(str) {
    let words = str.split(' ');
    let largest = '';

    for (let word of words) {
        if (word.length > largest.length) {
            largest = word;
        }
    }

    return largest;
}

console.log(findLargestWord("The quick brown fox jumps over the lazy dog")); // Output: "jumps"

function findLargestWord(str) {
    return str.split(' ').reduce((largest, word) => word.length > largest.length ? word : largest, '');
}

console.log(findLargestWord("The quick brown fox jumps over the lazy dog")); // Output: "jumps"

💡 Question: Check if a String is a Palindrome

function reveresestring(str){
  
let gstring =str.split("").reverse().join("");
  console.log(gstring,'gstring')
  
  if(str == gstring){
    console.log('is Palidrome !')
  }
      
}
reveresestring("racecar")


💡 Question: Check if a Number is a Palindrome


function isPalindrome(number) {
    // Convert number to string to facilitate comparison
    const numStr = number.toString();
    // Reverse the string
    const reversedStr = numStr.split('').reverse().join('');
    // Check if the original and reversed strings are the same
    return numStr === reversedStr;
}

Here are several simple ways to remove duplicate elements from an array in JavaScript:
💡 Question: Remove Duplicates from an Array



function removeDuplicates(arr) {
    return [...new Set(arr)];
}

console.log(removeDuplicates([1, 2, 2, 3, 4, 4, 5])); // Output: [1, 2, 3, 4, 5]

function removeDuplicates(arr) {
    return arr.filter((item, index) => arr.indexOf(item) === index);
}

console.log(removeDuplicates([1, 2, 2, 3, 4, 4, 5])); // Output: [1, 2, 3, 4, 5]


💡 Question: Count the Number of Vowels in a Given String

function anagaramvalue(st1){
  var vowels =["a","e","i","o","u"];
  let count = 0;
  for(var io of st1){
      
        if(vowels.includes(io)){
           count++;
        }
      }

  console.log("count",count)
}
anagaramvalue("hello world")

💡 Question: Count Total Vowels in a String

function countVowels(str) {
    // Convert the string to lowercase to handle both uppercase and lowercase vowels
    str = str.toLowerCase();

    // Initialize a variable to store the count of vowels
    let vowelCount = 0;

    // Define an array of vowels
    const vowels = ['a', 'e', 'i', 'o', 'u'];

    // Iterate over each character in the string
    for (let char of str) {
        // If the character is a vowel, increment the count
        if (vowels.includes(char)) {
            vowelCount++;
        }
    }

    // Return the total count of vowels
    return vowelCount;
}

// Test cases
console.log(countVowels('Hello')); // Output: 2
console.log(countVowels('JavaScript')); // Output: 3
console.log(countVowels('OpenAI')); // Output: 3


💡 Question: Count Each Vowel in a Given Word

var vowels=["a","e","o","i","u"]
var givenword="ganesh";
var vowelcount=0;

var vowelObj={"a":0,"e":0,"i":0,"o":0,"u":0
}


for(let ii of givenword){
  
  if(vowels.includes(ii)){
    vowelObj[ii]++
    
  }
}
console.log(vowelcount)

console.log(vowelObj)

💡 Question: Find the Largest Number in an Array

function largestnumber(){
	
    var nums =[1,2,3,4,5,6,7,100,20000]
    var lagest =nums[0]
    for(n of nums){
      
      if(n > lagest){
        lagest=n
      }
      
    }
  
    console.log("lagest",lagest)
  }
  largestnumber()



💡 Question: Calculate Factorial Using Recursion


function factorial(n) {
  // Base case: factorial of 0 is 1
  if (n === 0) {
    return 1;
  }
  // Recursive case: n! = n * (n-1)!
  return n * factorial(n - 1);
}

// Example usage
console.log(factorial(5)); // Output: 120


💡 Question: Remove All Whitespace from a String


function whitespance(str){
  var str = str.replace(/\s/g,"")
   console.log("strooo",str)
}


whitespance("Ganesh scvsjcbsj   v sjdsvjdjsbvsjdvb")


💡 Question: Extract Common Key-Value Pairs from Two Objects

const input1 = { a: 1, b: 2, c: 3, d: 10, e: 12 };
const input2 = { a: 2, e: 12, f: 6, d: 10 };

let output = {};
Object.keys(input1).forEach((input)=>{
  if(input2[input] === input1[input]){
    output[input] =input1[input]
  }
})

console.log(output);


💡 Question: Find Common Key-Value Pairs from Two Objects

const input1 = { a: 1, b: 2, c: 3, d: 10, e: 12 };
const input2 = { a: 2, e: 12, f: 6, d: 10 };

let output = {};
Object.keys(input1).forEach((input)=>{
  if(input2[input] === input1[input]){
    output[input] =input1[input]
  }
})

console.log(output);

💡 Question: Count Age Frequency from Array of Objects


var data =[
    {
        "username":"ganesh",
        "age":50
    },
    {
        "username":"ganesh",
        "age":70
    },
    {
        "username":"ganesh",
        "age":70
    },
    {
        "username":"ganesh",
        "age":50
    },
   {
        "username":"ganesh",
        "age":45
    },
];

// Create an object to store age counts
var ageCounts = {};

// Count the occurrences of each age
data.forEach(function(item) {
    if (ageCounts[item.age]) {
        ageCounts[item.age]++;
    } else {
        ageCounts[item.age] = 1;
    }
});

console.log("ageCounts==",ageCounts)

💡 Question: Count Frequency of Values in an Array


var data =[
   "12",
  "13",
  "14",
  "12",
  "11",
  "13"
];

var ageCounts = {};

data.forEach(function(item) {
    if(ageCounts[item]){
      ageCounts[item]++;
    }else{
      ageCounts[item]=1;
    }
});


console.log(ageCounts,"ageCounts")

//output

[object Object] {
  11: 1,
  12: 2,
  13: 2,
  14: 1
}
"ageCounts"

💡 Question: Find Common Objects from Two Arrays

let arr1 = [
  {'id':1,'name':'a'},
  {'id':2,'name':'b'},
  {'id':3,'name':'c'},
  {'id':4,'name':'d'},
  {'id':5,'name':'e'}
];

let arr2 = [
  {'id':3,'name':'c'},
  {'id':5,'name':'e'}
];

let output = arr1.filter(item1 => arr2.some(item2 => item1.id === item2.id && item1.name === item2.name));

console.log(output);
output [
  {'id':3,'name':'c'},
  {'id':5,'name':'e'}
];


💡 Question: Flatten Mixed Array of Primitives, Objects, and Nested Arrays

let data = [1, 2, {'a': 3, 'b': 4}, [5]];

function flattenArray(arr) {
  let flatArray = [];
  arr.forEach(element => {
    if (Array.isArray(element)) {
      //atArray.push(...flattenArray(element)); // recursively flatten nested arrays
    } else if (typeof element === 'object' && element !== null) {
      //atArray.push(...flattenArray(Object.values(element))); // recursively flatten nested objects
    } else {
      flatArray.push(element); // add non-array and non-object elements
    }
  });

  return flatArray;
}

let flatData = flattenArray(data);
console.log(flatData); // Output: [ 1, 2, 3, 4, 5 ]


💡 Question: Nested Object inside value exits or not
let request = {
  "user": {
    "name": "ganesh",
    "address": {"landmark": "HYD", "houseNo": "20-100"}
  }
};


function search(obj, searchString) {
  for (let key in obj) {
    let value = obj[key];

    if (typeof value === 'object' && value != null) {
      if (search(value, searchString)) {   // ✅ use searchString here
        return true;
      }
    } else if (value === searchString) {
      return true;
    }
  }
  return false;
}

console.log(search(request, 'ganesh')); // ✅ true
console.log(search(request, 'HYD'));    // ✅ true
console.log(search(request, 'xyz'));    // false



console.log(search(request, 'ganesh')); // Output: true
console.log(search(request, 'HYD')); // Output: true
console.log(search(request, '20-100')); // Output: true
console.log(search(request, 'John')); // Output: false

💡 Question: Find All Unique Pairs That Sum to Target

function findPairs(arr, target) {
    let seen = new Set(); // To keep track of numbers we've seen before
    let pairs = [];

    // Iterate through the array
    for (let num of arr) {
        // Calculate the complement that sums up to the target
        let complement = target - num;
        
        // Check if the complement is already in the set of seen numbers
        if (seen.has(complement)) {
            pairs.push([num, complement]); // Add the valid pair to the pairs array
        }

        // Add the current number to the seen set
        seen.add(num);
    }

    return pairs;
}

let arr = [6, 4, 0, 8, 10, 2,3,11]
let targetSum = 10;

// Find pairs
let result = findPairs(arr, targetSum);
console.log("Pairs that sum up to", targetSum, "without repetition:", result);


💡 Question:  Unique Culture and Name Combination

let data = [
  { culture: "en-US", name: "All Sandwiches", salary: 50000 },
  { culture: "es-US", name: "To sanwiches", salary: 50000 },
  { culture: "en-CA", name: "T sanwiches", salary: 10000 },
  { culture: "en-AU", name: "Todos los Sándwiches", salary: 50000 },
  { culture: "en-US", name: "To sanwiches", salary: 50000 },
  { culture: "en-GG", name: "GG sanwiches", salary: 50000 },
  { culture: "en-GG", name: "GG sanwiches", salary: 50000 }
];



const seen=new Set();

const result =data.filter(item=>{
  
 const key =`${item.culture}|{item.name}`
 
 if(!seen.has(key)){
   seen.add(key)
   return true;
 }
  return false;
 
})

console.log(result);
How do you sort an array in ascending (low → high) and descending (high → low) order using Bubble Sort?
	
LOW → HIGH (Ascending Order)

let a = [5, 1, 4, 2, 8];

for (let ii = 0; ii < a.length; ii++) {
  for (let jj = 0; jj < a.length - ii - 1; jj++) {
    if (a[jj] < a[jj + 1]) {   // swap if left is smaller
      let temp = a[jj];
      a[jj] = a[jj + 1];
      a[jj + 1] = temp;
    }
  }
}

console.log(a); // Output: [8, 5, 4, 2, 1]

HIGH → LOW (Descending Order)

let a = [5, 1, 4, 2, 8];

for (let ii = 0; ii < a.length; ii++) {
  for (let jj = 0; jj < a.length - ii - 1; jj++) {
    if (a[jj] < a[jj + 1]) {   // swap if left is smaller
      let temp = a[jj];
      a[jj] = a[jj + 1];
      a[jj + 1] = temp;
    }
  }
}

console.log(a); // Output: [8, 5, 4, 2, 1]

You want to reverse a number without converting it to string.

function reverseNumber(num) {
  let reversed = 0;

  while (num > 0) {
    let lastDigit = num % 10;          // get last digit
    reversed = reversed * 10 + lastDigit;
    num = Math.floor(num / 10);        // remove last digit
  }

  return reversed;
}

console.log(reverseNumber(1234)); // 4321
function bubbleSort(arr) {
  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr.length - i - 1; j++) {
      if (arr[j] > arr[j + 1]) {
        [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
      }
    }
  }
  return arr;
}

console.log(bubbleSort([7,4,3,5,1]));


const arr= [
    { "name": "A", "class": 5 },
    { "name": "B", "class": 6 },
    { "name": "C", "class": 6 },
    { "name": "D", "class": 5 }
]

/*output : [
        {"class": 5 , names: ["A","D"]},
        {"class": 6 , names: ["B","C"]},
]*/

function groupNames(items){
  
  let seen =new Set();
  let result =[];
  
  for(item of items){
  
    if(seen.has(item.class)){
      
     let findObj= result.find((ii)=> ii.class == item.class)
  
          findObj.name.push(item.name);

      
    }else{
      result.push({class:item.class,name:[item.name]})
      
    }
   // result.push({class:item.class,name:[item.name]})
    seen.add(item.class)
  }
  
  return result;
  
}


console.log(groupNames(arr))

//Given an array of integers, return a new array where each element at index i is the product of all numbers in the original array except the number at index i.

function getOutput(arr) {
  const result = [];

  for (let i = 0; i < arr.length; i++) {
    let product = 1;

    for (let j = 0; j < arr.length; j++) {
      if (i !== j) {
        product *= arr[j];
      }
    }

    result.push(product);
  }

  return result;
}

// Test
console.log(getOutput([1, 2, 3, 4]));

//Input:  [1, 2, 3, 4]
//Output: [24, 12, 8, 6]
