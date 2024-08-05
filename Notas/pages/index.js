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
        texto: "mi mama me va a retar si no lo hago",
        realizada: false
    },
    {
        id:3,
        titulo: "Estudiar Eventos",
        texto: "mi mama me va a retar si no lo hago",
        realizada: false
    },
    {
        id:4,
        titulo: "Tomar agua",
        texto: "mi mama me va a retar si no lo hago",
        realizada: false
    }
]


let idGlobal = Notas[3]

let container = document.getElementById("Tarjetas")

function Notas_Totales(Notas) {
    for (let i = 0; i < Notas.length; i++) {
        let tarjeta = document.createElement("div")
            tarjeta.className = "card col-sm-5 col-lg-3 col-xl-2  mb-3 mx-1 p-2"
            tarjeta.innerHTML = `
                            
                            <label for="" class="text-bg-light border border-bottom">
                                <input type="checkbox" name="" id="" class="d-inline">
                                <h2 class="d-inline">${Notas[i].titulo}</h2>
                            </label>
    
                            <div class="card-body">
                                
                                <p class="card-text">${Notas[i].texto}</p>
                                <a href="#" class="btn btn-danger">Borrar nota</a>
                              </div>`
             
           
        Tarjetas.appendChild(tarjeta)   
    
    }
}




function Agregar_Nota(titulo1, texto1) {
    nueva_nota = {
        id : Notas.length,
        titulo : titulo1,
        texto : texto1,
        realizada : false

    }

    Notas.push(nueva_nota)
}



Agregar_Nota("tituloprueba", "Texto prueba")

let form = document.getElementById("notas_nuevas")

form.addEventListener("submit", (ev) => {
    ev.preventDefault(),
    console.log(ev.target.textarea.value);
    
}
)



Notas_Totales(Notas)
