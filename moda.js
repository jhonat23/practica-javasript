function calculoModa(lista1){

//Crear objeto vacio
const listCount = {};

//método map para crear número de repeticiones en la lista
lista1.map(function(element){
    if(listCount[element]){
        listCount[element] += 1;
    }else{
        listCount[element] = 1;
    }
})

//convertir y ordenar el obejto a una lista de listas
const listArray = Object.entries(listCount).sort(
    function(a, b){
        return a[1] - b[1];
    }
)

const moda = listArray[listArray.length - 1];
return moda;
}

//Otra forma
const NUMBERS = [2, 2, 2, 2, 2, 4, 5, 5, 5, 5, 5, 5, 5, 5, 9];

function mode(arr){
    return arr.sort((a,b) =>
          arr.filter(v => v===a).length
        - arr.filter(v => v===b).length
    ).pop();
}


console.log(mode(NUMBERS)); //5