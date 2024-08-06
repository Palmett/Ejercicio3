let Notas = [
    {
        id:1,
        titulo: "Sacar basura",
        texto: "mi mama me va a retar si no lo hago",
        realizada: false
    },
    {
        id:2,
        titulo: "Comer",
        texto: "Quedo comida de ayer",
        realizada: false
    },
    {
        id:3,
        titulo: "Estudiar Eventos",
        texto: "Estoy flojo de papeles y no voy a aprobar las task 3",
        realizada: false
    },
    {
        id:4,
        titulo: "Tomar agua",
        texto: "Debo hidratarme bien para no desmayarme",
        realizada: false
    }
]


let idGlobal = 5

let container = document.getElementById("Tarjetas")

function Notas_Totales(Notas) {

    const container = document.getElementById("Tarjetas");
    container.innerHTML = "";

    if (Notas.length === 0) {
        container.innerHTML = "<p>No hay notas para mostrar.</p>";
        return;
    }

     Notas.forEach(nota => {
        let tarjeta = document.createElement("div");
        tarjeta.className = "card col-sm-5 col-lg-3 col-xl-2  mb-3 mx-1 p-2";
        tarjeta.innerHTML = `
            <label for="" class="text-bg-light border border-bottom">
                <input type="checkbox" ${nota.realizada ? 'checked' : ''} onclick="marcarRealizada(${nota.id})">
                <h2 class="d-inline ${nota.realizada ? 'tachado' : ''}">${nota.titulo}</h2>
            </label>
            <div class="card-body">
                <p class="card-text">${nota.texto}</p>
                <a href="#" class="btn btn-danger" onclick="borrarNota(${nota.id})">Borrar nota</a>
            </div>`;
        container.appendChild(tarjeta);
    });
}



function Agregar_Nota(titulo, texto) {
    let nueva_nota = {
        id: idGlobal++,
        titulo: titulo,
        texto: texto,
        realizada: false
    };

    Notas.push(nueva_nota);
    Notas_Totales(Notas);
}

function limpiarCampos() {
    document.getElementById("titulo").value = '';
    document.getElementById("texto").value = '';
}

function borrarNota(id) {
    Notas = Notas.filter(nota => nota.id !== id);
    Notas_Totales(Notas);
}

function marcarRealizada(id) {
    let nota = Notas.find(nota => nota.id === id);
    if (nota) {
        nota.realizada = !nota.realizada;
        Notas_Totales(Notas);
    }
}

function filtrarPorTexto(Array, texto) {
    if (!texto) {
        return Array;
    }
    return Array.filter(nota => 
        nota.titulo.toLowerCase().includes(texto.toLowerCase()) || 
        nota.texto.toLowerCase().includes(texto.toLowerCase())
    );
}

function filtrarPorRealizada(Array) {
    return Array.filter(nota => nota.realizada);
}

function aplicarFiltros() {
    const textoFiltro = document.getElementById("filtro-texto").value;
    const soloRealizadas = document.getElementById("filtro-realizada").checked;
    let notasFiltradas = Notas;

    if (soloRealizadas) {
        notasFiltradas = filtrarPorRealizada(notasFiltradas);
    }

    notasFiltradas = filtrarPorTexto(notasFiltradas, textoFiltro);
    Notas_Totales(notasFiltradas); 
}

document.getElementById("notas_nuevas").addEventListener("submit", (ev) => {
    ev.preventDefault(); 

    let titulo = document.getElementById("titulo").value;
    let texto = document.getElementById("texto").value;

    if (titulo && texto) {
        Agregar_Nota(titulo, texto);
        document.getElementById("titulo").value = '';
        document.getElementById("texto").value = '';
    } else {
        alert("Por favor completa ambos campos.");
    }
});

document.getElementById("button_borrar").addEventListener("click", (ev) => {
    ev.preventDefault();
    limpiarCampos();
});

document.getElementById("filtro-texto").addEventListener("input", aplicarFiltros);
document.getElementById("filtro-realizada").addEventListener("change", aplicarFiltros);

Notas_Totales(Notas)
