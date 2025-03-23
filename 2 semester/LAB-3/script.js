function findMax(arr){
    if(arr.length === 0){
        throw new Error("Массив не може бути порожнім")
    }
    

    max = arr[0]
    for(let i = 1; i < arr.length; i++){
        if (arr[i] > max){
            max = arr[i]
        }
    }
    return max;
}

const numbers = [3, 4, 6, 12, 7]
console.log(findMax(numbers))