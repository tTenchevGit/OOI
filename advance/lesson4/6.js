function systemsRegister(input) {
    let systems = {};

    for (const line of input) {
        let [system, component, subcomponent] = line.split(' | ');

        if (!systems.hasOwnProperty(system)) {
            systems[system] = {};
        }
        if (!systems[system].hasOwnProperty(component)) {
            systems[system][component] = [];
        }
        systems[system][component].push(subcomponent);
    }

   
    let sortedSystems = Object.keys(systems).sort((a, b) => {
        let componentsA = Object.keys(systems[a]).length;
        let componentsB = Object.keys(systems[b]).length;
        if (componentsA !== componentsB) {
            return componentsB - componentsA;
        } else {
            return a.localeCompare(b, 'en', { sensitivity: 'base' });
        }
    });

   
    let result = '';
    for (const system of sortedSystems) {
        result += system + '\n';
        let sortedComponents = Object.keys(systems[system]).sort((a, b) => {
            return systems[system][b].length - systems[system][a].length;
        });
        for (const component of sortedComponents) {
            result += '|||' + component + '\n';
            for (const subcomponent of systems[system][component]) {
                result += '||||||' + subcomponent + '\n';
            }
        }
    }

    return result.trim();
}


let input = [
    "SULS | Main Site | Home Page",
    "SULS | Main Site | Login Page",
    "SULS | Main Site | Register Page",
    "SULS | Judge Site | Login Page",
    "SULS | Judge Site | Submission Page",
    "Lambda | CoreA | A23",
    "SULS | Digital Site | Login Page",
    "Lambda | CoreB | B24",
    "Lambda | CoreA | A24",
    "Lambda | CoreA | A25",
    "Lambda | CoreC | C4",
    "Indice | Session | Default Storage",
    "Indice | Session | Default Security"
];

console.log(systemsRegister(input));
