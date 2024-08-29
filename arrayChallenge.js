// Array Challenge //
// Have the function ArrayChallenge(arr) take the array of number stored in arr and return the string true if any combination of numbers in the array (excluding the largest number) can be added up to equal the largest number in the array.
// For example: if arr contains [4, 6, 23, 10, 3] the output should return true because 4 + 6 + 10 + 3 = 23. 
//The array will not be empty, will not contain all the same elements, and may contain negative numbers. 

// Examples: //

//Input: [5, 7, 16, 1, 2] 

// Output: false 

// Input: [3, 5, -1, 8, 12] 

// Output: false


const nums = [5,7,16,1,2]
const coolerNums = [3,5,-1,8,12]

function arrayChallenge(arr) {
    
    arr.sort((a,b) => a - b)
    const largestNum = arr.pop()
    const sun = arr.reduce((a,b) => a + b, 0)
    if (largestNum === sun) {
        return 'true'
    } else {
        return 'false'
    }
}

console.log(bestNums)
const sortedArr = arrayChallenge(bestNums)
console.log(sortedArr)