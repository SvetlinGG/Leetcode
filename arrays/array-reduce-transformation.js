function transformation(nums, fn, init){
    
    let result = init;
    for ( let i = 0; i < nums.length; i ++){

        result = fn(result, nums[i])

    }

    return result;
}
console.log(transformation([1,2,3,4], function sum(accum, curr){return accum + curr}, 0));
console.log(transformation([1,2,3,4], function sum(accum, curr){return accum + curr * curr}, 100));