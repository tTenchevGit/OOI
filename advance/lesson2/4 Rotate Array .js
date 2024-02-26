function rotate(arr){
    const rot = Number(arr.pop());
    const rotations = rot % arr.length;
    for (let i = 0; i < rotations; i++) {
        const lastElement = arr.pop();
        arr.unshift(lastElement);
    }
    console.log(arr.join(' '));
}

rotate(['1',

'2',

'3',

'4',

'2'] );
