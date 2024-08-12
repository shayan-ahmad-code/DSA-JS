
  let arr = [6,7,4,3,8,9,1,0];

   function binarySearch(arr,n){
    let lowIdx = 0;
    let highIdx = arr.length - 1;

         while(lowIdx <= highIdx){
            let mid = Math.floor((highIdx+lowIdx) / 2);
             if(arr[mid] == n){
                return mid;
             }else if(n > arr[mid]){
                lowIdx = mid;
             }else{
                highIdx = mid;
             }
        }
        return -1;
   }
   console.log(binarySearch(arr, 8));