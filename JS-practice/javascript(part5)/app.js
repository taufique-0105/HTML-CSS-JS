// forEach methods
let arr =[1, 2, 3, 4, 5];
arr.forEach(function(el){
    console.log(el);
});

//or
let print = function(el){
    console.log(el);
};
arr.forEach(print);

//Map method
let num =[1, 2, 3, 4];
let double = num.map(function(el){
    return el*2;
});

//filter method
let nums =[2,4,1,5,6,2,7,8,9];
let even = nums.filter((num) => (num % 2 == 0));

//reduce
let numS =[1,2,3,4];
let finalVal = nums.reduce((res, el) => res + el);
console.log(finalVal);
//practice qs.1
//Create if all numbers in our array are multiples of 10 or not
let Nums =[10,20,30,40];
let ans = nums.every((el) => el % 10 == 0);
console.log(ans);


//Create a function to find the min number in an array.
let Num =[10,20,30,40,5];
let min = nums.reduce((min, el) => {
    if(min <el){
        return min;
    }
    else{
        return el;
    }
});
console.log(min);



