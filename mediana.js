// const lista = [
//     100,
//     200,
//     500,
//     40000000,
// ]

function calculoMediana(lista1){
    //Ordenando la lista
    lista1.sort(function(a ,b){
        return a - b;
    })

    console.log(lista1);

    const mitad1 = lista1.length / 2;
    const mitad2 = mitad1 + 1;

    if (lista1.length % 2 === 0){
        //tomar datos de la mitad y sacar promedio
        let mediana = (lista1[mitad1 - 1] + lista1[mitad2 - 1]) / 2;
        console.log("la mediana es: " + mediana);
        console.log("esta es una lista con elementos pares");
        return mediana;
    }else{
        //tomar e imprimir dato de la mitad
        let mediana = lista1[parseInt(mitad2 - 1)];
        console.log("la mediana es: " + mediana);
        console.log("esta es una lista con elementos impares");
        return mediana;
}
}