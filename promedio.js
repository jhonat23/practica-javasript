// const lista = [
//     100,
//     200,
//     300,
//     500,
// ];


// let sumaLista1 = 0;
// for(let i = 0; i < lista.length; i++){
//     sumaLista1 = sumaLista1 + lista[i];
// }

// const promediLista1 = sumaLista1 / lista.length;

function mediaAritmetica(lista){

    const sumaLista = lista.reduce(
        function(valorAcumulado = 0, nuevoElemento){
            return valorAcumulado + nuevoElemento;
        }
        )
//     let sumaLista = 0;
// for(let i = 0; i < lista.length; i++){
//     sumaLista = sumaLista + lista[i];
// }

const promediLista1 = sumaLista / lista.length;

return promediLista1;
}