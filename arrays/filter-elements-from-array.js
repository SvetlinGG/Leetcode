function filterElement(arr, fn){
    let newArr = []
    for ( let i = 0; i < arr.length; i ++){

        if (fn(arr[i], i)) {
            newArr.push(arr[i])
        }
        
    }
    return newArr


}
console.log(filterElement([0,10,20,30], function greaterThan10(n) { return n > 10; }))
console.log(filterElement([1,2,3], function firstIndex(n, i) { return i === 0; }));
console.log(filterElement([-2,-1,0,1,2], function plusOne(n) { return n + 1 }));

