//Ejercicio #1 

function numeroMayor(num1, num2, num3) {
    if (num1 === num2 && num2 === num3) {
      return "Los números son iguales";
    } else {
      return Math.max(num1, num2, num3);
    }
  }
  var resultado = numeroMayor(7, 7, 7);
  console.log(resultado); Los números son iguales
    
  //Ejercicio #2 

  function esVocal(cla Letra es) {
    var vocales = ['a', 'e', 'i', 'o', 'u'];
    A = A .toLowerCase();s
    return vocales.includes(la Letra es );
  }
  console.log(esVocal('a')); true
console.log(esVocal('E')); true
console.log(esVocal('b'));   false
console.log(esVocal('Z'));  false




//Ejercicio #3

function generar_caracteres(n, caracter) {  
     let caracterFinal = ``;

    for (let i = 0; i < n; i+) {
        caracterFinal += caracter;
        return caracterFinal;
    }
}
console.log(generarCaracteres(5,`x`));

//Ejercicio #4

const numeros = [5,5,10];

sumaArreglo(numeros);

function sumaArreglo(numeros){
     
    const result = numeros.reduce( (total, numeros) ==> total + numeros.length)
    console.log(result);
}

// crear una funcion multiplicarArreglo() que tome como parametro un arreglo de numeors, retornar la multiplicacion del numero menor del arreglo y el numero del mayor arreglo

const numeros2 = [5,5,10,25,2]

function multiplicarArreglo(numeros){
     let numeroMayor = math.max(...numeros);
     let numeroMenor = math.min(..numeros);

     return numeroMayor + numeroMenor;

}
console.log(multiplicarArreglo(numeros2)); 

//booleano array

const numeros3 =[5,5,10,25,2]
const numeros4 = [5,5,10,10,10,10];

function booleanoArray(arr, arr2){
    let resultado = [... arr, arr2];
    if (resultado.length = 10){
        return true
    }else{
        return false;
    }


    // funcion array() 

    function funcionArray(arr,arr2){
        let resultado = [..arr, arr2];
        return resultado.map(result => {
            return result * 2
        
        }) 
    }
    console.log(funcionArray(numeros3,numeros4));