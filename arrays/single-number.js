function singleNumber(nums){

    let arr = [];
    let length = nums.length;
    for ( let i = 0; i < length; i++){
        if (arr.includes(nums[i])){
            let index = arr.indexOf(nums[i])
            arr.splice(index, 1)
        } else {
            arr.push(nums[i])
        }
    }
    return arr
}
console.log(singleNumber([2,2,1]));
console.log(singleNumber([4,1,2,1,2]));