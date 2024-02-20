function namesAlphabeticalSort(names){
  let sortedNames = names.sort((a, b) => a.localeCompare(b));
  return sortedNames;
}
console.log(namesAlphabeticalSort(["Potatoes",

"Tomatoes",

"Onions",

"apples"]));