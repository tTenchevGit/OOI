const solve = (input) => {
    const speed = Number(input.shift());
    const result = speed <= 10 ? 'slow' : (speed <= 50 ? 'average' : (speed <= 150 ? 'fast' : (speed <= 1000 ? 'ultra fast' :  'extremely fast')))
    console.log(result)
}
solve(['8555'])