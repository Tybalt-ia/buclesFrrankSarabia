//1
// let numero = "numeroI "
// numero = prompt ("ingrese un numero")

// for (let i = 1 ; i <=10; i++){ 
    
//     console.log(numero+'x'+i+'='+(i*numero));
// }

//2
// let condicion = '0'
// let numero = prompt('Ingrese un numero(0 para finalizar)')
// let acumulador = 0;
// while(condicion != numero){
// 	acumulador += Number(numero);
//   numero = prompt('Ingrese un numero(0 para finalizar)')
// }
// console.log(acumulador)


//3 
// let numeroIncognita = 25
// let numeroIngresado = prompt ("ingrese un numero del 1 al 100")
// let numeroIntentos = 1

// while (numeroIngresado != numeroIncognita){

//     if (numeroIngresado > numeroIncognita){
//         console.log( "¡el numero " + numeroIngresado + " es mayor, vuelve a intentarlo!");
//     }
//     else if (numeroIngresado < numeroIncognita){
//         console.log( "¡el numero " + numeroIngresado + " es menor, vuelve a intentarlo!");
//     }
//     numeroIngresado = prompt ("ingrese un numero del 1 al 100")
//     numeroIntentos = numeroIntentos + 1
// } 
// console.log("¡Ganaste! ¡Has adivinado el número! en " + numeroIntentos + " intentos");

// 4
// let numero = prompt('Ingrese un numero')
// let sobrante = 0;
// let numeroDivisores = 0;
// for(let i =1; i <= numero; i++){
//     sobrante = numero % i;
//     if(sobrante == 0){
//         numeroDivisores += 1;
//     }
// }
// if(numeroDivisores > 2){
//     console.log(numero+' no es primo!')
// }else{
//     console.log(numero+' es primo!')
// }

// 5
// let numero = prompt('Ingrese un numero')
// let sobrante = 0;
// for(let i =1; i <= numero; i++){
//     sobrante = numero % i;
//     if(sobrante == 0){
//         console.log(i) ;
//     }
// }

// 6
// let arreglo = [1,2,3,4,5,6,7,8,9,0]
// for(let i =0; i<=9; i++)

//     console.log(arreglo[i]);

// 7
// let arreglo = [10,20,30,40,50,60,70,80,90,100]

// for(let i =0; i<=9; i++)
//     console.log(arreglo[i]*2);

// 8
// let familia = [
// {
//     nombre: "Oscar",
//     apellido: "Sarabia", 
//     edad: 50,
//     pasatiempo: "leer",
// },
// {
//     nombre: "Lucy",
//     apellido: "soto", 
//     edad: 46,
//     pasatiempo: "trabajar",
// },
// {
//     nombre: "Andres",
//     apellido: "Sarabia", 
//     edad: 25,
//     pasatiempo: "estudiar",
// },
// {
//     nombre: "Alma",
//     apellido: "Sarabia", 
//     edad: 5,
//     pasatiempo: "jugar",
// },
// {
//     nombre: "ana",
//     apellido: "Sarabia", 
//     edad: 80,
//     pasatiempo: "dormir",
// },
// ];

// for(let i =0; i<=4; i++){
//     let persona = familia [i];
//     console.log("hola soy " + persona.nombre +  " " + persona.apellido + " tengo " + persona.edad + " años y me gusta " + persona.pasatiempo);
// }

// 9
// let numeros = [ 0,1,2,3,4,5,6,7,8,9];
// for(let i =0; i<=9; i++) {
    
//     if (numeros [i] % 2 != 0  ){
//         console.log( numeros [i] );
//     }

// }
    
// 10
// let sumaPares = 0
// let sumaImpares = 0

// let condicion = 0
// let numero = prompt('Ingrese un numero(0 para finalizar)')
// let acumulador = 0;
// while(condicion != numero){
//     if (numero % 2 != 0  ){
//         sumaImpares += parseInt(numero);
//     } else {
//         sumaPares += parseInt(numero);
//     }
//   numero = prompt('Ingrese un numero(0 para finalizar)')
// }
// console.log(sumaPares + " suma de pares ")
// console.log(sumaImpares + " suma de impares ");

//11
// let numeroMayor = 0
// let numeros= [ 1000,50,30,78,90,150,78,54,37,1]

// for (let i = 0; i<=9; i++ ) {
//     numeroMayor = (Math.max (numeros[i], numeroMayor) )
// }
// console.log(numeroMayor); 

// 12
// let numeroMenor = Number.POSITIVE_INFINITY
// let numeros= [ 1000,50,30,78,90,150,78,54,37,5]

// for (let i = 0; i<=9; i++ ) {
//     numeroMenor = (Math.min (numeros[i], numeroMenor) )
// }
// console.log(numeroMenor); 


