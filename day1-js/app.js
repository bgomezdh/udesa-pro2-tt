let sumar = (a , b) => a + b;

let restar = (a , b) => a - b;

let multiplicar = (a , b) => a * b;

let dividir = (a , b) => a / b;

let operacion = (a , b, callback) => {
    return callback(a , b);
}


console.log(operacion);