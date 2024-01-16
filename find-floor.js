function findFloor(arr, target, leftIdx=0, rightIdx= arr.length - 1) {
        // if the lowest number is greater than the highest number, return -1
        if (leftIdx > rightIdx) return -1;
        // if target is greater than or equal to the last number in array, return last number
        if (target >= arr[rightIdx]) return arr[rightIdx];

        //establish middle index
        let midIdx = Math.floor((leftIdx + rightIdx)/2);

        // if the middle number is equal to the target, return that number
        if (arr[midIdx] === target) return arr[midIdx];

        // if the middle number is greater than zero, and the number 1 place left is less than target, and midIndex is greater, return mid-1
        if(midIdx > 0 &&  arr[midIdx -1] <= target && target < arr[midIdx]){
            return arr[midIdx -1]
        }
        // if the target is less than middle index, look for the number on the left side
        if(target < arr[midIdx]) {
            return findFloor(arr, target, leftIdx, rightIdx -1 )
        }
        // if target is more than the middle index, look for number on the right side
        return findFloor(arr, target, midIdx + 1, rightIdx)

}

// module.exports = findFloor