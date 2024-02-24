function sequance(n, k){
    let arr = [1]
    for (const el of arr) {
        let newEl = 0
        if(arr.length < k && arr.length < n){
           newEl = arr.reduce((a, b) => a + b, 0);
           arr.push(newEl)
           
        } else if(arr.length < n){
            newEl = arr.slice(-k).reduce((a, b) => a + b, 0);
            arr.push(newEl)
        }
    }
console.log(arr.join(' '));
}
sequance(8, 2)