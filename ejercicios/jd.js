const readline = require('readline-sync');

function simpleArraySum() {

    let n = readline.question();

    ar = readline.question().split(' ');
    ar = ar.map(Number);

    var respuesta = 0;

    for (i = 0; i < n; i++) {
        respuesta += ar[i]
    }

    console.log(respuesta)
}

simpleArraySum();