export function domInjector(seletor: string) {
    return function (
        target: any,
        propertKey:string
    ) {

        const getter = function() {
            const elemento = document.querySelector(seletor);
            console.log(`buscando elemento do DOM com o seletor 
            ${seletor} para injetar em ${propertKey}`)
            return elemento;
        }
        Object.defineProperty(target, propertKey, { get: getter });
    }
}