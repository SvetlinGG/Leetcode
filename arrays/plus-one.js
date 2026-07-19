function plusOne(nums){

   //let plus = nums.map(num => num + 1)
   let newNum = Number(nums.join('')) + 1;
   let arr = String(newNum).split('').map(num => Number(num));
   console.log(arr);
   
   
   
    


}
plusOne([1, 2, 3]);
plusOne([6,1,4,5,3,9,0,1,9,5,1,8,6,7,0,5,5,4,3]);