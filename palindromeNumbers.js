/* Given an integer x, return true if x is a 
palindrome
, and false otherwise.

 

Example 1:

Input: x = 121
Output: true
Explanation: 121 reads as 121 from left to right and from right to left.
*/

/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function(x) {
    let nstring = x.toString().split('').reverse().join('');
    let reversedNumber = parseInt(nstring);
    if(reversedNumber === x){
        return true;
    }else{
        return false;
    }
};