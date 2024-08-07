
 let arr = [40,3,5,65,12,21,1];

  function insertionSort(arr){
     for(let i=0;i<arr.length-1;i++){
        let smallest = i;
        for(let j= i+1; j<arr.length;j++){
            if(arr[smallest]> arr[j]){
                smallest = j;
            }
        }
      let temp = arr[smallest];
      arr[smallest] = arr[i];
      arr[i] = temp 
    }
  }
   function printArray(){
    insertionSort(arr);
    for(let i=0; i<arr.length; i++){
        console.log(arr[i]+" ")
    }
}

 printArray();