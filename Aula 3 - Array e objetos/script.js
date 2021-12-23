// o que são vetores ou arrays

// como declarar um array

/*let array = ['string',1,true];
console.log(array);*/

// Array pode guardar varios tipos de dados

let array = ['string', 1, true, ['array1'], ['array2'], ['array3'],['array4']];

// chamado o valor pelo indice []
//console.log(array [0]);

// retornos forEach
//array.forEach(function(item,index){console.log(item,index)});

//push retorna um novo array no final podendo adicional qualquer tipo de dado
//array.push('novo item final');
//console.log(array);

//pop  remove um item no final
//array.pop();
//console.log(array);

// shift remove um item no inicio
//array.shift();
//console.log(array);

//unshift add um array no inicio
//array.unshift('adiciona um novo item no inicio');
//console.log(array);

//indexOf() retorna o indice de um valor
//console.log(array.indexOf(true))

//splice() remove ou substitui um item pelo indice
//array.splice(0, 3);//apaga todos do indece 0 a 3
//console.log(array);

//slice() retorna uma parte de um array existente
//let novoArray = array.slice(0,3);
//console.log(novoArray);


//Objetos dados que possuem propriedades e valores que define suas caracteriscas
let object = {string:'string', nunber :1, boolean : true,  array :[array], objectInterno : {objectInterno:'objeto interno'} };

//console.log(object);

// com o ponto mas tipo e possivel acessar as propriedades do objeto
console.log(object.boolean);

// estrura inversa


var string = object.string;
console.log(string);

var arrayInterno = object.array;
console.log(arrayInterno);

var {string,boolean,objectInterno} = object;
console.log (string,boolean,objectInterno);


