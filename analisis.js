// separación salarios
const salariosCol = colombia.map(
    function(persona){
        return persona.salary;
    }
);
//ordenado de salarios
const salariosColSorted = salariosCol.sort(
    function(a ,b){
        return a - b;
    }
)
//calculo de la mediana de los salarios
const medianaSalaries = calculoMediana(salariosColSorted);

//calculo de la mediana del top 10% de salarios
const spliceStart = (salariosColSorted.length * 90) / 100;
const spliceCount = salariosColSorted.length - spliceStart;

const salariesColTop10 = salariosColSorted.splice(spliceStart, spliceCount); //elimina o agrega elementos al array
const medianaSalariesTop10 = calculoMediana(salariesColTop10);
