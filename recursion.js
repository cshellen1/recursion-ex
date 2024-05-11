/** product: calculate the product of an array of numbers. */

function product(nums) {
  // Base case
  if (nums.length === 0) return 1;
  // Normal case 
  return nums[0] * product(nums.slice(1));
}

/** longest: return the length of the longest word in an array of words. */

function longest(words, idx = 0, longestSoFar = 0) {
  // Base case
  if (idx === words.length) return longestSoFar;
  // Normal case
  longestSoFar = Math.max(words[idx].length, longestSoFar);
  return longest(words, idx + 1, longestSoFar)
}

/** everyOther: return a string with every other letter. */

function everyOther(str, idx = 0, newStr = '') {
  // Base case
  if (idx >= str.length) return newStr;
  // Normal case
  if (idx === 0 || idx % 2 === 0) newStr += str[idx];
  return everyOther(str, idx + 1, newStr)
}

/** isPalindrome: checks whether a string is a palindrome or not. */

function isPalindrome(str, idx = 0) {
  // Base case
  let leftIdx = idx;
  let rightIdx = str.length - idx - 1;
  if (leftIdx >= rightIdx) return true;
  // Normal case
  if (str[leftIdx] !== str[rightIdx]) return false;
  return isPalindrome(str, idx + 1)
}

/** findIndex: return the index of val in arr (or -1 if val is not present). */

function findIndex(arr, val, idx = 0) {
  if (idx >= arr.length) return -1;
  if (arr[idx] === val) return idx;
  return findIndex(arr, val, idx + 1)
}

/** revString: return a copy of a string, but in reverse. */

function revString(str, idx = 0, revStr = "") {
  if (idx >= str.length) return revStr;
  revStr += str[str.length - idx - 1];
  return revString(str, idx + 1, revStr)
}

/** gatherStrings: given an object, return an array of all of the string values. */

function gatherStrings(obj) {
  let strArr = [];
  for (let key in obj) {
    if (typeof obj[key] === "string") strArr.push(obj[key]);
    if (typeof obj[key] === "object") strArr.push(...gatherStrings(obj[key]));
  }
  return strArr;
}

/** binarySearch: given a sorted array of numbers, and a value,
 * return the index of that value (or -1 if val is not present). */

function binarySearch(arr, val) {
  
}

module.exports = {
  product,
  longest,
  everyOther,
  isPalindrome,
  findIndex,
  revString,
  gatherStrings,
  binarySearch
};
