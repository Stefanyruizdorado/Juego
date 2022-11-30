let BASE = 0

let contador = 0

CargarPregunta(BASE)

function CargarPregunta(index){

    objetoPregunta = BaseDePreguntas[index]
    opciones = [...objetoPregunta.distractores]
    
    opciones.push(objetoPregunta.respuesta)

    opciones.sort(()=> Math.random()-0.5)

    document.getElementById("pregunta").innerHTML = objetoPregunta.pregunta
    if(objetoPregunta.imagen){

        document.getElementById("imagen").src = objetoPregunta.imagen
        document.getElementById("imagen").style.display = "";

    }else{

        document.getElementById("imagen").style.display = "none";

    }
    document.getElementById("seleccion1").innerHTML = opciones[0]
    document.getElementById("seleccion2").innerHTML = opciones[1]
    document.getElementById("seleccion3").innerHTML = opciones[2]
    document.getElementById("seleccion4").innerHTML = opciones[3]

}

 async function seleccionarOpcion(index){

    let validar = opciones[index] == objetoPregunta.respuesta;

    if(validar){

        Swal.fire({
            title: 'respuesta correcta!',
            width: 500,
            padding: '5em',
            color: 'black',
            background: '#fff url(./images/lisa.gif)',
            backdrop: `
              rgba(240,240,120)
            `
          })
        
        contador++
 
    }else{

        Swal.fire({

            title: 'respuesta incorrecta!',
            width: 500 ,
            padding: '2em',
            color: 'black',
            background: '#fff url(./images/picachu.gif)',
            backdrop: `
              rgba(240,240,120)
              no-repeat
            `,
            text: `La respuesta correcta es "${objetoPregunta.respuesta}"`,
          })

    }

    BASE++;
    
    
    if(BASE >= BaseDePreguntas.length){

        await Swal.fire({

            title: "El juego ha terminado",
            text: `Tu puntaje fue ${contador}/${BaseDePreguntas.length}`,

        });

        BASE = 0;
        contador = 0;

    }
    
    CargarPregunta(BASE);

}

