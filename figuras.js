// Código del cuadrado
console.group("Cuadrados");
const ladoCuadrado = 5;
console.log("Los lados del cuadrado miden: " + ladoCuadrado + "cm");

const perimetroCuadrado = ladoCuadrado * 4;
console.log("El perímetro del cuadrado es: " + perimetroCuadrado + "cm");

const areaCuadrado = ladoCuadrado * ladoCuadrado;
console.log("El área del cuadrado es: " + areaCuadrado + "cm2");
console.groupEnd();

// Código del triángulo
console.group("Triángulos");
const ladoTriangulo1 = 6;
const ladoTriangulo2 = 6;
const baseTriangulo = 4;
console.log(
    "Los lados del triángulo miden: "
     + ladoTriangulo1 + "cm, " + ladoTriangulo2 
     + "cm y " + baseTriangulo + "cm"
);
const alturaTriangulo = 5.5;
console.log("La altura del cuadrado es de: " + alturaTriangulo + "cm");

const perimetroTriangulo = ladoTriangulo1 + ladoTriangulo2 + baseTriangulo;
console.log("El perimetro del triángulo es: " + perimetroTriangulo + "cm");

const areaTriangulo = (baseTriangulo * alturaTriangulo) / 2;
console.log("El área del triángulo es: " + areaTriangulo + "cm2");

console.groupEnd();

// Código del circulo
console.group("Círculos");
// Radio
const radioCirculo = 4;
console.log("El radio del círculo es de: " + radioCirculo + "cm");
//Diámetro
const diametroCirculo = radioCirculo * 2;
console.log("El diámetro del círculo es de: " + diametroCirculo + "cm");
//PI
//const PI = 3.1416;
const PI = Math.PI;
//Circunferencia
const perimetroCirculo = PI * diametroCirculo;
console.log("El perimetro del círculo es de: "+ perimetroCirculo + "cm");
//Área
const areaCirculo = PI * radioCirculo * radioCirculo;
console.log("El área del círculo es de: " + areaCirculo + "cm2");
console.groupEnd();