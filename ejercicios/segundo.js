const readline = require('readline-sync');

function main() {

    let a = 0;
    let b = 0;

    ar = readline.question().split(' ');
    ar = ar.map(Number);

    arr = readline.question().split(' ');
    arr = arr.map(Number);

    let respuesta = [];

    for (i = 0; i < ar.length ; i++) {
        if (ar[i] > arr[i]) {
            a++;
        }else if(ar[i] < arr[i]){
            b++;
        }else if(ar[i] == arr[i]){

        }
    }

    respuesta = [a, b];
    console.log(a, b)

}

main();
