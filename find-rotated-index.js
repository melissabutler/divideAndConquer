function findRotatedIndex(arr, target) {
    let leftIdx= 0;
    let rightIdx = arr.length - 1;

    let midIdx = Math.floor((rightIdx + leftIdx)/2)
// if midIdx is target, return index
    
//if midIdx is greater than target, move left
while (leftIdx <= rightIdx){
    if (arr[midIdx] === target){
         return midIdx;}
    else if (arr[midIdx] > target){
        rightIdx = midIdx - 1
        midIdx = Math.floor((rightIdx + leftIdx)/2)
    } else {
        leftIdx = midIdx + 1
        midIdx = Math.floor((rightIdx + leftIdx)/2);
    }
    return -1
 // find target in array
}
}

//find Expected Index  of arr[0] in sorted search

//find Actual Index, amount it has been pivoted

function findDisplacement(arr){
    let leftIdx= 0;
    let rightIdx = arr.length - 1;

    let midIdx = Math.floor((rightIdx + leftIdx)/2)

    if (arr[midIdx] < arr[midIdx -1]){
        midIdx = midIdx -1
    } else if (arr[midIdx] > arr[midIdx +1]){
        midIdx = midIdx + 1
    }
    // if midIdx -1 < midIdx, move left
    // if midIdx + 1 < midIdx, move right
    // if midIdx -1 > midIdx < midIdx +1, midIdx should be zero, is displacement

    // 
    return midIdx
}

function findExpectedIdx(arr, target){
    arr = arr.sort()
    console.log(arr)

    let leftIdx= 0;
    let rightIdx = arr.length - 1;

    let midIdx = Math.floor((rightIdx + leftIdx)/2)

    while (leftIdx <= rightIdx){
        if (arr[midIdx] === target){
            return midIdx;
        } 
        // if middle is larger than index, move left
        else if (arr[midIdx] > target){
            console.log("midIdx" + midIdx)
            rightIdx = midIdx - 1
            midIdx = Math.floor((rightIdx + leftIdx)/2)
        } else {
        // if middle is smaller than index, move right     
        leftIdx = midIdx + 1
        midIdx = Math.floor((rightIdx + leftIdx)/2);
        }
        
    }
}

// module.exports = findRotatedIndex