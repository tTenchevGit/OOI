// function remove(word, text) {
//     let index = text.indexOf(word);

//     while (index >= 0) {
//         text = text.substring(0, index) + text.substring(index + word.length);
//         index = text.indexOf(word);
//     }
//     console.log(text);
// }
// remove('ice', 'kicegiciceeb');



function remove(word, text) {
    

    while (text.indexOf(word) >= 0) {
        text = text.replace(word, '')
       
    }
    console.log(text);
}
remove('ice', 'kicegiciceeb');

