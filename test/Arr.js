    let arr = [1,2,3,4,5];

    function printArr(arr,a){
        if (arr[a]){
            console.log(arr[a])
            a++
            printArr(arr,a)
        }
    
    }
    printArr(arr,0);