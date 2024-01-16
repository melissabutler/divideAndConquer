function findRotationCount(arr) {
    let displacement = findDisplacement(arr)

    return displacement;

}

// module.exports = findRotationCount

function findDisplacement(arr){
    let leftIdx= 0;
    let rightIdx = arr.length - 1;
    let midIdx = Math.floor((rightIdx + leftIdx)/2)

    if (arr[leftIdx] < arr[rightIdx]) return 0;

    while(leftIdx <= rightIdx){
        // if midIdx is less than midIdx - 1, move left
        if (arr[midIdx] < arr[midIdx -1]){
            rightIdx = midIdx
            midIdx = Math.floor((rightIdx + leftIdx)/2)
        } else if (arr[midIdx] > arr[midIdx +1]){
            leftIdx = midIdx
            midIdx = Math.floor((rightIdx + leftIdx)/2)
        }
        return rightIdx
    }
}
// if midIdx -1 < midIdx, move left
    // if midIdx + 1 < midIdx, move right
    // if midIdx -1 > midIdx < midIdx +1, midIdx should be zero, is displacement

    // 
//     return midIdx
// }
// function compareNumbers(a,b){
//     return a - b;
// }
// //find the expected 
// function findExpectedIdx(arr, target){
//     arr = arr.sort(compareNumbers)
//     console.log(arr.sort())

//     let leftIdx= 0;
//     let rightIdx = arr.length - 1;

//     let midIdx = Math.floor((rightIdx + leftIdx)/2)

//     while (leftIdx <= rightIdx){
//         if (arr[midIdx] === target){
//             return midIdx;
//         } 
//         // if middle is larger than index, move left
//         else if (arr[midIdx] > target){
//             rightIdx = midIdx - 1
//             midIdx = Math.floor((rightIdx + leftIdx)/2)
//         } else {
//         // if middle is smaller than index, move right     
//         leftIdx = midIdx + 1
//         midIdx = Math.floor((rightIdx + leftIdx)/2);
//         }
        
//     }
// }
