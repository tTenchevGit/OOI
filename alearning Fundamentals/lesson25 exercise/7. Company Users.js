function companyEmployers(arrOfStrings) {
    let listCompaniesWithIds = {};
    arrOfStrings.forEach(element => {
        let [company, idEmploy] = element.split(' -> ')
        if (!listCompaniesWithIds[company]) {
            listCompaniesWithIds[company] = []
        }
        let idExist = listCompaniesWithIds[company].some(x => x[0] === idEmploy);
        if (!idExist) {
            listCompaniesWithIds[company].push([idEmploy])
        }
    });
    let sortedArr = Object.entries(listCompaniesWithIds).sort((a, b) => a[0].localeCompare(b[0]));
    
    sortedArr.forEach(el=> {
        console.log(`${el[0]}\n-- ${el[1].join("\n-- ")}`);
    });

}
companyEmployers(['SoftUni -> AA12345', 'SoftUni -> BB12345', 'Microsoft -> CC12345', 'HP -> BB12345','SoftUni -> AA12345']);