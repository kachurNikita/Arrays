'use strict';
// Create array, initialize him with random numbers

const array = [];
for(let i = 0; i < 8; i++) {
    array.push(Math.ceil(Math.random() * 100))
}

//Delete last element

array.pop();

// add 2 elements in begin and an end of array

array.unshift(10);
array.push(0);

// array length

// array.length

// console.log(array)

// even index array

// const evenIndexArray = array.filter((item, index) => {
//     if (index % 2 === 0) {
//         return true
//     }
// });
//

const evenIndexArray = array.filter((item,index) => {
    if(index % 2 === 0) {
        return index
    }
});

// even items

const evenItemArray = array.filter((item,index) => {
    if(item % 2 === 0) {
        return item
    }
});


// item === 0

const zeroIndexArray = array.filter((item, index) => {
    if (item === 0) {
        return  index
    }
});

array.forEach(item => {
    if  (item === 0) {
       return console.log(`We have a ${item} total value`)
    }
});

// Numbers with plus

const plusArray = [-1, 5, 0, 9, -10];

const plusValuseArray = plusArray.filter(item => {
    if (item > 0) {
        return item
    }
});

const multipleBySelf = plusArray.map(item => {
    return item * item
})

multipleBySelf.push('hi')
// are  numbers is positive and  they really numbers?

//
// function areTheyPositive (element) {
//    return typeof element === 'number' && element > 0
// }
//
// multipleBySelf.forEach((item) => {
//     console.log(areTheyPositive(item))
// });

multipleBySelf.forEach(item => {
     let result = typeof item === 'number' && item > 0;
    console.log(result)
    return result
})

let someArr = []
 multipleBySelf.forEach(item => {
   someArr.push(Math.pow(item, 3))

})

console.log(someArr)

