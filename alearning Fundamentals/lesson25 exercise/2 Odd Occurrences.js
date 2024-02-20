function odd(string) {
    let arrayOfElements = string.toLowerCase().split(' ');
    let result = [];
    arrayOfElements.forEach(element => {
        let count = 0;
        arrayOfElements.forEach(x => {
            if(element == x){
                count++;
            }
        });
        if (count % 2 === 1) {
            result.push(element);
        }
    });

    let resultSort = [...new Set(result)];
    console.log(resultSort.join(' '));
}

odd('Java C# Php PHP Java PhP 3 C# 3 1 5 C#'); 
