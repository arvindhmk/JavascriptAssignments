/*
Given a string s consisting of words and spaces, return the length of the last word in the string.
 
Example 1:
 
Input: s = "Hello World"
Output: 5
Explanation: The last word is "World" with length 5.
 
Example 2:
 
Input: s = "   fly me   to   the moon  "
Output: 4
Explanation: The last word is "moon" with length 4.
*/

var strin1 = "  Learning javascript for playright   ";

var strin2 = [];
strin2 = strin1.trim().split(" ");

var last_Word = strin2[strin2.length-1];

console.log("last word: "+ last_Word);
console.log("length of last word :"+ last_Word.length);

/*
Example 3: 

Write a function to check if two strings are anagrams.

 Input: isAnagram('listen', 'silent')
 Output: true
 Input: isAnagram('hello', 'world') 
 Output: false
 Explanation: An anagram is when you mix up the letters of a word to make a new one, using all the letters.
 
*/

var stri3 = "listen";
var stri4 = "silenk";

var stri3arr = stri3.split("").sort();
var stri4arr = stri4.split("").sort();
var flag = true;
console.log(stri3arr);
console.log(stri4arr);

for( let i=0;i<=stri3.length;i++)
{
            if(stri4arr[i]!=stri3arr[i])
            {
             flag = false;
            }        
}
if(flag==true)
{
    console.log("given strings are anagram");
}
else
{
    console.log("given strings are not anagram");
}
