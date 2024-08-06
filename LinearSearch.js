
  let arr = [1,2,3,4,5,6,7,8,9,10,11,12];

   function linearSearch(arr, n){
      for(let i=0;i<arr.length;i++){
        if(arr[i] == n){
            return true;
        }
      }
       return false;
   }
   console.log(linearSearch(arr,13));