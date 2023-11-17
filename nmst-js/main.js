// code 

let arr = [2, 3, 4, 5];
 

function doubl(a) {
    return a * 2;
}

const output = arr.map(doubl);

console.log(output)


const out = arr.map((ar) => {
    return ar.toString(2);
})
 
console.log(out);


// filter

let arr2 = [2, 3, 4, 5];


function isOdd(x) {
    return x % 2;
}
const o = arr2.filter(isOdd);
console.log(o);

// reduce


let arrred = [1, 2, 3, 4, 5];


const oout = arrred.reduce(function (acc, curr) {
    acc = acc + curr;
    return acc;
}, 0);

console.log(oout);


