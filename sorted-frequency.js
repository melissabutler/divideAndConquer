function sortedFrequency(arr, target){
    // let midIdx = Math.floor((leftIdx + rightIdx)/2)
// if target is bigger than last value or smaller than first, it will not be in array
    let firstIdx = findFirst(arr, target);
    if(firstIdx === -1) return firstIdx;
    let lastIdx = findLast(arr, target);
    return lastIdx - firstIdx + 1;
}

// find first instance of target


function findFirst(arr, target, leftIdx = 0, rightIdx = arr.length -1){
    // let leftIdx = 0;
    // let rightIdx = arr.length -1;

    if (rightIdx >= leftIdx){
        let midIdx = Math.floor((leftIdx + rightIdx)/2)
        if((midIdx === 0 || target > arr[midIdx -1])&& arr[midIdx] === target){
            return midIdx;
        } else if (target > arr[midIdx]){
            return findFirst(arr, target, midIdx +1, rightIdx)
        } else {
            return findFirst(arr, target, leftIdx, midIdx -1)
        }
    }
    return -1
}
// find last instance of target
function findLast(arr, target, leftIdx = 0, rightIdx = arr.length -1){
    if (rightIdx >= leftIdx){
        let midIdx = Math.floor((leftIdx + rightIdx)/2)
        if((midIdx === arr.length -1 || target < arr[midIdx + 1]) && arr[midIdx] === target){
            return midIdx;
        } else if (target < arr[midIdx]){
            return findLast(arr, target, leftIdx, midIdx -1)
        } else{
            return findLast(arr, target, midIdx +1, rightIdx)
        }
    }
    return -1
}
// module.exports = sortedFrequency