process.stdin.resume();
process.stdin.setEncoding('ascii');

var input_stdin = "";
var input_stdin_array = "";
var input_currentline = 0;

process.stdin.on('data', function (data) {
    input_stdin += data;
});

process.stdin.on('end', function () {
    input_stdin_array = input_stdin.split("\n");
    main();    
});

function readLine() {
    return input_stdin_array[input_currentline++];
}

function main() {

    let n = readLine();

    ar = readLine().split(' ');
    ar = ar.map(Number);

    var respuesta = 0;

    for (i = 0; i < n; i++) {
        respuesta += ar[i]
    }

    console.log(respuesta)
}
