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
    return index % 2 === 0
});

//Task 4
array.filter((item, index) => {
    return item % 2 === 0
});

//Task 5
array.filter ((item, index) => {
   return index === 0
});

array.findIndex((item, index) => {
  return index % 2 === 0;
})

//Task 6

array.forEach((item, index, array)=> {
    console.log(item === 0)
})

//Task 7

const plusArray = [-1, 5, 0, 9, -10,];

plusArray.forEach(item => {
    console.log(item === 0)
})

//Task 8

const multipleBySelf = plusArray.map(item => {
    return item * item
})

// are  numbers is positive and  they really numbers?
//Task 9

function areTheyPositive (element) {
   return typeof element === 'number' && element > 0
}


multipleBySelf.every(item => {
        areTheyPositive(item)
})

// Task 10

    plusArray.some(item => {
        return item < 0
    })

// Task 11

 multipleBySelf.forEach(item => {
     console.log((Math.pow(item, 3)))
})
