function plusOne(nums){

   //let plus = nums.map(num => num + 1)
   let newNum = BigInt(nums.join('')) + 1n;
   let arr = String(newNum).split('').map(num => Number(num));
   return arr;

}
console.log(plusOne([1, 2, 3]));
console.log(plusOne([6,1,4,5,3,9,0,1,9,5,1,8,6,7,0,5,5,4,3]));