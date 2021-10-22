(function () {




// function returnSeven() {
//     return 7;
// }
//     consolelog(returnSeven());
//
//     if (false) {
//         console.log("Am I Seen?");
// }
//     var hadBreakfast = Boolean(Math.round(Math.random()));`
//
//     var hadBreakfastMessage = (hadBreakfast) ? "Thank you breakfast was good." : "No breakfast".;
// console.log(hasBreakfast);
// console.log(hasBreakfastMessage);


    // Write a function named 'moveToEnd' that takes in an array, and returns
    // the array with the original first index moved to the last index of the array.

        Example:
    moveToEnd([1, 2, 3, 4]) 		  // returns [2, 3, 4, 1];
    moveToEnd(['roll', 'rock', 'and']  // returns ['rock', 'and', 'roll'];


function moveToEnd(arr[1,2,3,4]) {
        var removedElement = arr.shift();
        arr.push(removedElement)
        return arr

}
console.log(moveToEnd(arr[1,2,3,4]))
    console.log(moveToEnd())
})();

