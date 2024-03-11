vector = {
    add: ([x1, y1], [x2, y2]) => [x1 + x2, y1 + y2],
    multiply: (vector, multiplier) => vector.map(x => x * multiplier),
    length: ([x, y]) => Math.sqrt(x ** 2 + y ** 2),
    dot: ([x1, y1], [x2, y2]) => x1 * x2 + y1 * y2,
    cross: ([x1, y1], [x2, y2]) => x1 * y2 - x2 * y1, 
}

console.log(vector.add([1, 1], [1, 0]));
console.log(vector.multiply([3.5, -2], 2));
console.log(vector.length([3, -4]));
console.log(vector.dot([1, 0], [0, -1]));
console.log(vector.cross([3, 7], [1, 0]));