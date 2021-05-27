'use strict';
// Create array, initialize him with random numbers
//Task 0

const array = [];
for(let i = 0; i < 10; i++) {
    array.push(Math.ceil(Math.random() * 100))
}


//Task 1
//Delete last element
// add 2 elements in begin and an end of array
array.pop();
array.unshift(10);
array.push(0);

// array length
//Task 2
 array.length

// even index array
//Task 3

array.filter((item, index)=> {
    return index % 2 === 0 && item !== 0 && index !== 0
});

//Task 4
array.filter((item, index) => {
    return item % 2 === 0
});

//Task 5
array.filter ((item, index) => {
   return item === 0
});

//Task 6

array.filter((item, index, array)=> {
    return item === 0
})

//Task 7

const plusArray = [-1, 5, 0, 9, -10,];

const plusValuseArray = plusArray.filter(item => {
   return item >= 1
});

//Task 8

const multipleBySelf = plusArray.map(item => {
    return item * item
})

// are  numbers is positive and  they really numbers?
//Task 9

function areTheyPositive (element) {
   return typeof element === 'number' && element > 0
}

multipleBySelf.forEach((item) => {
    console.log(areTheyPositive(item))
});


console.log(multipleBySelf.every(item => {
    return true
}))
// Task 10

    plusArray.some(item => {
        return item < 0
    })

// Task 11

 multipleBySelf.forEach(item => {
     console.log((Math.pow(item, 3)))
})



