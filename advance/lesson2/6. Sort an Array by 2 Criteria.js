function sort(input) {
    let result = input.sort((a, b) => {
    
        let lengthComparison = a.length - b.length;
    
        return lengthComparison !== 0 ? lengthComparison : a.localeCompare(b);
    });

    console.log(result.join("\n"));
}

sort(['alpha', 'beta', 'aaama']);
