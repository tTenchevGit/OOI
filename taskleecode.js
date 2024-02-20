
function processInput(arrOfStrings) {
    let objArena = {};
    let fights = [];
    let aveCesarReached = false;

    for (let i = 0; i < arrOfStrings.length; i++) {
        let arrayGladiators = arrOfStrings[i].split(' -> ');
        let [name, technique, skill] = arrayGladiators;

        if (name === 'Ave Cesar') {
            aveCesarReached = true;
            break;
        }

        if (!objArena[name]) {
            objArena[name] = [];
        }

        if (arrayGladiators.length <= 1 && name !== 'Ave Cesar') {
            let [fighter1, fighter2] = arrayGladiators[0].split(' vs ');
            fights.push([fighter1, fighter2]);
        } else if (arrayGladiators.length === 3) {
            processTechnique(objArena, name, technique, skill);
        }
    }

    return { objArena, fights, aveCesarReached };
}


function processTechnique(objArena, name, technique, skill) {
    let techniqueCheck = objArena[name].some(x => x[0] === technique);

    if (!techniqueCheck) {
        objArena[name].push([technique, skill]);
    } else {
        let index = objArena[name].findIndex(x => x[0] === technique);
        if (Number(skill) > Number(objArena[name][index][1])) {
            objArena[name][index][1] = Number(skill);
        }
    }
}


function determineWinners(objArena, fights) {
    for (const fight of fights) {
        let [gladiator1, gladiator2] = fight;

        if (objArena[gladiator1] && objArena[gladiator2]) {
            let techniques1 = objArena[gladiator1].map(([technique]) => technique);
            let techniques2 = objArena[gladiator2].map(([technique]) => technique);
            
            let commonTechniques = techniques1.filter(technique => techniques2.includes(technique));
            if (commonTechniques.length > 0) {
                let totalSkill1 = objArena[gladiator1].reduce((total, [, skill]) => total + Number(skill), 0);
                let totalSkill2 = objArena[gladiator2].reduce((total, [, skill]) => total + Number(skill), 0);
                
                if (totalSkill1 > totalSkill2) {
                    delete objArena[gladiator2];
                } else if (totalSkill2 > totalSkill1) {
                    delete objArena[gladiator1];
                }
            }
        }
    }
}


function sortAndPrintGladiators(objArena) {
    let sortedGladiators = Object.entries(objArena)
        .sort((a, b) => {
            let totalSkillA = a[1].reduce((total, [, skill]) => total + Number(skill), 0);
            let totalSkillB = b[1].reduce((total, [, skill]) => total + Number(skill), 0);
            if (totalSkillB !== totalSkillA) {
                return totalSkillB - totalSkillA;
            }
            return a[0].localeCompare(b[0]);
        });

    for (const [gladiator, skills] of sortedGladiators) {
        if (skills.length > 0) {
            console.log(`${gladiator}: ${skills.reduce((total, [, skill]) => total + Number(skill), 0)} skill`);
            skills.sort((a, b) => b[1] - a[1] || a[0].localeCompare(b[0]));
            for (const [technique, skill] of skills) {
                console.log(`- ${technique} <!> ${skill}`);
            }
        }
    }
}


function arena(arrOfStrings) {
   
    const { objArena, fights, aveCesarReached } = processInput(arrOfStrings);

   
    if (!aveCesarReached) {
        return;
    }

  
    determineWinners(objArena, fights);

   
    sortAndPrintGladiators(objArena);
}


arena([
    'Peter -> BattleCry -> 400',
    'Alex -> PowerPunch -> 300',
    'Stefan -> Duck -> 200',
    'Stefan -> Tiger -> 250',
    'Gladius vs Julius',
    'Gladius vs Juli1us',
    'Gladius vs Jul17ius',
    'Ave Cesar'
]);
