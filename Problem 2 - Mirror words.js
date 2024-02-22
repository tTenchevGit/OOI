function mirror(strings) {
    const regex = /(?:[@][A-Za-z]{3,}[@]{2}[A-Za-z]{3,}[@])|(?:[#][A-Za-z]{3,}[#]{2}[A-Za-z]{3,}[#])/g

    let count = 0
    let pairs = [];
    let isIt = false;
    strings.forEach(str => {
        const result = str.match(regex);
        
        if (result !== null) {
            result.forEach((element) => {
                count++
                let [asd, word, reverseword] = element.split(/\W+/)
                if(word === reverseword.split('').reverse().join('')){
                    pairs.push(`${word} <=> ${reverseword}`)
                    isIt = true;
                } 
            });
        }
    });
    if(isIt){
        console.log(`${count} word pairs found!`);
        console.log(`The mirror words are:\n${pairs.join(', ')}`);
    }else if(!isIt && count > 0){
        console.log(`${count} word pairs found!`);
        console.log(`No mirror words!`);
    }else{
        console.log(`No word pairs found!`);
        console.log(`No mirror words!`);
    }
}

mirror([
    '#po0l##l0op# @bAc##cAB@ @LM@ML@ #xxxXxx##xxxXxx# @aba@@ababa@'
]);
