let array1 = ["all", "cows", "are", "big"];

for (let element of array1) {
    console.log(element);
}
console.log("\n");
console.log("*****For Each*****");

array1.forEach((element, index) => {
    console.log(element);
})

console.log("*****Helper Functions: slice()*****");
const array2 = [1, 2, 3, 4, 5]
let slice1 = array2.slice(2, 4);
console.log(slice1);
console.log("\n");

console.log("*****Helper Functions: splice()*****");
/*
    Takes in 3 params: the beggining index, size of things to be removed,
    and new elements to be added, new elements are added at the position
    specified by the first paramenter
*/

const array3 = [1, 2, 3, 4]
let splice1 = array3.splice(1, 0,"a","b","c");
console.log(splice1,  array3);