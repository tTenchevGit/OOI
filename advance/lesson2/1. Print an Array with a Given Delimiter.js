function sentance(arr) {
    const symbol = arr.pop();
    const result = arr.join(symbol)
    console.log(result);
}
sentance(['One',

'Two',

'Three',

'Four',

'Five',

'-']);

sentance(['How about no?', 'I', 'will', 'not', 'do', 'it!', '_']);