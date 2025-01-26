
//Qs.1
let arr =[8, 9, 10, 1, 2, 3, 4, 5, 6, 7];
let num =5;

//elements larger than a number num
function getElements(arr, num){
    for(let i=0; i<arr.length; i++){
        if(arr[i] > num){
            console.log(arrr[i]);
        }
    }
}
getElements(arr, num);

//Qs.2
let Str ="abcdabcdefgggh";
//function to get string with all unique elements
function getUnique(str){
    let ans ="";
    for(let i=0; i<str.length; i++){
        let currChar = str[i];
        if(ans.indexOf(currChar) == -1){
            //if current character is not aded, then add it in ans.
            //otherwise it is a duplicate.
            ans += currChar;
        }
    }
    return ans;
}
getUnique(str);

//Qs.3
let country =["Australia", "Germany", "united stated of America"];
function longestName(country){
    let ansIdx = 0;
    for(let i=0; i<country.length; i++){
        let ansLen =country[ansIdx].length;
        let currLen =country[i].length;
        if(currLen > ansLen){
            ansIdx =i;
        }
    }
    return country[ansIdx];
}
longestName(country);

//Qs.4
let str ="apnacollege";
function countVowels(str){
    let count = 0;
    for(let i=0; i<str.length; i++){
        if(
            str.charAt(i) == "a" ||
            str.charAt(i) == "e"||
            str.charAt(i) == "i"||
            str.charAt(i) == "o"||
            str.charAt(i) == "u"
        ){
            count++;
        }
    }
    return count;
}

//Qs.5
let start =100;
let end = 200;
function generateRandom(start, end){
    let diff = end-start;
    return Math.floor(Math.random() * diff) +start;
}