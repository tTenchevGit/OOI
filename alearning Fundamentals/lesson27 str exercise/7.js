function cutReverse(string) {
    const firstHalf = string.substring(0, string.length / 2).split('').reverse().join('');
    const secondHalf = string.substring(string.length / 2).split('').reverse().join('');
console.log(`${firstHalf}\n${secondHalf}`);
}
cutReverse('tluciffiDsIsihTgnizamAoSsIsihT')