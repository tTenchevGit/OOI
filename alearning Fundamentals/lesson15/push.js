function tPush(arr, element) {
    arr[arr.length] = element
   return arr
}

let numbers = [90, 64, 34, 25, 22, 66, 9]

let ready =  tPush(numbers, 8)
   console.log(ready)