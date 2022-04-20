// Código del cuadrado
console.group("Cuadrados");
//const ladoCuadrado = 5;
//console.log("Los lados del cuadrado miden: " + ladoCuadrado + "cm");

function perimetroCuadrado(lado){
    return lado * 4;
} 
//console.log("El perímetro del cuadrado es: " + perimetroCuadrado + "cm");

function areaCuadrado(lado){
   return lado *lado;
}  
//console.log("El área del cuadrado es: " + areaCuadrado + "cm2");
console.groupEnd();

// Código del triángulo
console.group("Triángulos");
// const ladoTriangulo1 = 6;
// const ladoTriangulo2 = 6;
// const baseTriangulo = 4;
// console.log(
//     "Los lados del triángulo miden: "
//      + ladoTriangulo1 + "cm, " + ladoTriangulo2 
//      + "cm y " + baseTriangulo + "cm"
// );
// const alturaTriangulo = 5.5;
// console.log("La altura del cuadrado es de: " + alturaTriangulo + "cm");

function perimetroTriangulo(lado1, lado2, base){
    return lado1 + lado2 + base;
} 
//console.log("El perimetro del triángulo es: " + perimetroTriangulo + "cm");

function areaTriangulo (base, altura){
    return (base * altura) / 2;
} 
//console.log("El área del triángulo es: " + areaTriangulo + "cm2");

console.groupEnd();

// Código del circulo
console.group("Círculos");
// Radio
// const radioCirculo = 4;
// console.log("El radio del círculo es de: " + radioCirculo + "cm");

//Diámetro
function diametroCirculo(radio){
    return radio * 2;
} 
//console.log("El diámetro del círculo es de: " + diametroCirculo + "cm");
//PI
//const PI = 3.1416;
const PI = Math.PI;
console.log("Pi es: " + PI);
//Circunferencia
function perimetroCirculo(radio){
    const diametro = diametroCirculo(radio);
    return diametro * PI;
} 
//console.log("El perimetro del círculo es de: "+ perimetroCirculo + "cm");
//Área
function areaCirculo(radio){
    return PI * radio * radio;
}
// const areaCirculo = PI * radioCirculo * radioCirculo;
// console.log("El área del círculo es de: " + areaCirculo + "cm2");

console.groupEnd();