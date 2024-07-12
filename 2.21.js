let formulario = document.querySelector("#formulario");
let tabla = document.querySelector("#tabla");

let calcularSerie = (limite) => {
    let numero = 3;
    let resultados = [];

    while (numero <= limite) {
        resultados.push(numero);
        numero += 3; 
    }

    return resultados;
}

let imprimir = (resultados) => {
    let msg = "<table class='table table-bordered'><thead><th>No</th><th>Número</th></thead>";
    msg += "<tbody>";
    for (let i = 0; i < resultados.length; i++) {
        msg += "<tr>";
        msg += `<td>${i + 1}</td>`;
        msg += `<td>${resultados[i]}</td>`;
        msg += "</tr>";
    }
    msg += "</tbody></table>";
    tabla.innerHTML = msg;
}

formulario.addEventListener("submit", (event) => {
    let resultados = calcularSerie(99);
    imprimir(resultados);
    event.preventDefault();
});