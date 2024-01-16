console.log("File loaded and working")
function countZeroes(arr) {
    let leftIdx = 0
    let rightIdx = arr.length - 1
    let zerocount = 0

    // L        M         R
    // L     R  M
    // 1, 1, 1, 0, 0, 0, 0
    // L         M       R
    //              L   R
    // 1, 1, 1, 1, 0, 0, 0

if (arr[leftIdx] === 0){ 
 //if zero index is zero, length = zero count
    return zerocount = arr.length;
    }

else if (arr[rightIdx] === 1){
//if last index is one, length = zero
       return zerocount = 0;
    }

else {
    let midIdx = Math.floor((leftIdx + rightIdx)/2)

    while (leftIdx <= rightIdx){
        // console.log("Zero count in middle")
        // console.log("Right index " + rightIdx)
        
        if (arr[midIdx] === 0){
            // console.log("moving left")
            rightIdx = midIdx
            midIdx = Math.floor((leftIdx + rightIdx)/2)
            // console.log("right index " + rightIdx)
        }
         else if (arr[midIdx] === 1){
            
            // console.log("moving right")
            leftIdx += midIdx + 1
            midIdx = Math.floor((leftIdx + rightIdx)/2)
        }
        zerocount = arr.length - rightIdx + 1
        return zerocount
    }
}
// return
}
//     while (leftIdx <= rightIdx){
//         //find the middle value
//         let midIdx = Math.floor((leftIdx + rightIdx)/2);

//         if (arr[midIdx] === 0){
// //if middle index is zero, move left
//         rightIdx = midIdx - 1;
//         zerocount = arr.length - (rightIdx +1);
//         // check left
//     } else {
// // if middle index is one, move right
//         leftIdx = midIdx + 1;
//         zerocount = arr.length - midIdx;
//         // check right
//     }
//     return zerocount;
// }
// }

   



// module.exports = countZeroes