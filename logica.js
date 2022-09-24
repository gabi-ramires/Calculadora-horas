
function formatar() {
    var inicio = document.getElementById("inicio");
    var final = document.getElementById("final");

    var inicioA = document.getElementById("inicioA");
    var finalA = document.getElementById("finalA");

    var tamanhoInicio = inicio.value.length;
    var tamanhoFinal = final.value.length;

    var tamanhoInicioA = inicioA.value.length;
    var tamanhoFinalA = finalA.value.length;


    if (tamanhoInicio === 2) {
        inicio.value += ':'

    }

    if (tamanhoFinal === 2) {
        final.value += ':'

    }

    if (tamanhoInicioA === 2) {
        inicioA.value += ':'

    }

    if (tamanhoFinalA === 2) {
        finalA.value += ':'

    }
}

function Calcular() {

    var primeiro = document.getElementById("primeiro");
    var segundo = document.getElementById("segundo");
    var resultadoFinal = document.getElementById("resultadoFinal");


    // PRIMEIRO INICIO-FIM
    var ArrayInicio = inicio.value.split(":");
    var ArrayFinal = final.value.split(":");

    var horaInicio = Number(ArrayInicio[0]);
    var horaFinal = Number(ArrayFinal[0]);

    var minInicio = Number(ArrayInicio[1]);
    var minFinal = Number(ArrayFinal[1]);


    var difHoras = horaFinal - horaInicio;
    var difMin = minFinal - minInicio;

    if (difMin < 0) {
        difHoras = difHoras - 1;
        difMin = 60 + difMin;
    }

    // SEGUNDO INICIO-FIM
    var ArrayInicioA = inicioA.value.split(":");
    var ArrayFinalA = finalA.value.split(":");

    var horaInicioA = Number(ArrayInicioA[0]);
    var horaFinalA = Number(ArrayFinalA[0]);

    var minInicioA = Number(ArrayInicioA[1]);
    var minFinalA = Number(ArrayFinalA[1]);


    var difHorasA = horaFinalA - horaInicioA;
    var difMinA = minFinalA - minInicioA;

    if (difMinA < 0) {
        difHorasA = difHorasA - 1;
        difMinA = 60 + difMinA;
    }

    var difHoraTotal = difHoras + difHorasA;
    var difMinTotal = difMin + difMinA;

    if (difMinTotal >= 60) {
        difHoraTotal = difHoraTotal + 1;
        difMinTotal = difMinTotal - 60;
    }

    primeiro.innerHTML = "" + difHoras + "h " + difMin + "min<br>+";
    segundo.innerHTML = "" + difHorasA + "h " + difMinA + "min";

    resultadoFinal.innerHTML = "" + difHoraTotal + "h " + difMinTotal + "min";




}
