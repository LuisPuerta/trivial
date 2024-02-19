var bloques = [
    "Fitness and training",
    "Games and sports",
    "Health and quality of life"
];
var preguntas = [
    {
        "ID": 11247,
        "enunciado": "¿Is this a question?",
        "opcion_correcta": "Yes",
        "opcion_err1": "No",
        "opcion_err2": "No",
        "dificultad": "experto",
        "asignatura": "Educación física",
        "bloque": "Fitness and training",
        "categoria": "Fuerza",
        "bloque_img": "acondicionamiento-fisico-y-entrenamiento",
        "nivel": "secundaria",
        "grado": "2"
    },
    {
        "ID": 11246,
        "enunciado": "¿Is this a question?",
        "opcion_correcta": "Yes",
        "opcion_err1": "No",
        "opcion_err2": "No",
        "dificultad": "intermedio",
        "asignatura": "Educación física",
        "bloque": "Fitness and training",
        "categoria": "Resistencia",
        "bloque_img": "acondicionamiento-fisico-y-entrenamiento",
        "nivel": "primaria",
        "grado": "2"
    },
    {
        "ID": 11245,
        "enunciado": "¿Is this a question?",
        "opcion_correcta": "Yes",
        "opcion_err1": "No",
        "opcion_err2": "No",
        "dificultad": "intermedio",
        "asignatura": "Educación física",
        "bloque": "Games and sports",
        "categoria": "Velocidad",
        "bloque_img": "juegos-y-deportes",
        "nivel": "bachiller",
        "grado": "3"
    },
    {
        "ID": 11244,
        "enunciado": "¿Is this a question?",
        "opcion_correcta": "Yes",
        "opcion_err1": "No",
        "opcion_err2": "No",
        "dificultad": "intermedio",
        "asignatura": "Educación física",
        "bloque": "Health and quality of life",
        "categoria": "Gimnasia",
        "bloque_img": "salud-y-calidad-de-vida",
        "nivel": "secundaria",
        "grado": "5"
    },
    {
        "ID": 11220,
        "enunciado": "¿Is this a question?",
        "opcion_correcta": "Yes",
        "opcion_err1": "No",
        "opcion_err2": "No",
        "dificultad": "intermedio",
        "asignatura": "Educación física",
        "bloque": "Fitness and training",
        "categoria": "Fútbol",
        "bloque_img": "acondicionamiento-fisico-y-entrenamiento",
        "nivel": "primaria",
        "grado": "5"
    }
];
var categorias = [];

$(document).ready(function() {

    /* Definición de celdas y sus propiedades */
    var cells = {}; // Variable para crear las celdas y definir sus propiedades
    // Objeto para representar una celda
    function Cell(nombre, color, top, left, celdasAdyacentes, tipoDeCelda, categoria, bifurcacion) {
        this.nombre = nombre;
        this.color = color;
        this.top = top;
        this.left = left;
        this.celdasAdyacentes = celdasAdyacentes;
        this.tipoDeCelda = tipoDeCelda;
        this.categoria = categoria;
        this.bifurcacion = bifurcacion;
    }
    function definirCeldas(){
        // Circulo externo
        cells['cell1'] = new Cell('cell1', 'azul', 5, 281, ['cell35', 'cell2', 'cell36'], 'quesito', '', true);
        cells['cell2'] = new Cell('cell2', 'dado', 14, 343, ['cell1', 'cell3'], 'dado', 'sincat', false);
        cells['cell3'] = new Cell('cell3', 'verde', 28, 388, ['cell2', 'cell4'], 'normal', '', false);
        cells['cell4'] = new Cell('cell4', 'rojo', 47, 427, ['cell3', 'cell5'], 'normal', '', false);
        cells['cell5'] = new Cell('cell5', 'amarillo', 69, 459, ['cell4', 'cell6'], 'normal', '', false);
        cells['cell6'] = new Cell('cell6', 'morado', 98, 490, ['cell5', 'cell7'], 'normal', '', false);
        cells['cell7'] = new Cell('cell7', 'azul', 132, 515, ['cell6', 'cell8'], 'normal', '', false);
        cells['cell8'] = new Cell('cell8', 'verde', 180, 540, ['cell7', 'cell9', 'cell42'], 'quesito', '', true);
        cells['cell9'] = new Cell('cell9', 'rojo', 238, 557, ['cell8', 'cell10'], 'normal', '', false);
        cells['cell10'] = new Cell('cell10', 'dado', 282, 561, ['cell9', 'cell11'], 'dado', 'sincat', false);
        cells['cell11'] = new Cell('cell11', 'amarillo', 328, 557, ['cell10', 'cell12'], 'normal', '', false);
        cells['cell12'] = new Cell('cell12', 'morado', 377, 545, ['cell11', 'cell13'], 'normal', '', false);
        cells['cell13'] = new Cell('cell13', 'azul', 420, 525, ['cell12', 'cell14'], 'normal', '', false);
        cells['cell14'] = new Cell('cell14', 'verde', 457, 500, ['cell13', 'cell15'], 'normal', '', false);
        cells['cell15'] = new Cell('cell15', 'rojo', 497, 458, ['cell14', 'cell16', 'cell48'], 'quesito', '', true);
        cells['cell16'] = new Cell('cell16', 'amarillo', 533, 402, ['cell15', 'cell17'], 'normal', '', false);
        cells['cell17'] = new Cell('cell17', 'morado', 550, 354, ['cell16', 'cell18'], 'normal', '', false);
        cells['cell18'] = new Cell('cell18', 'dado', 559, 311, ['cell17', 'cell19'], 'dado', 'sincat', false);
        cells['cell19'] = new Cell('cell19', 'azul', 559, 262, ['cell18', 'cell20'], 'normal', '', false);
        cells['cell20'] = new Cell('cell20', 'verde', 551, 212, ['cell19', 'cell21'], 'normal', '', false);
        cells['cell21'] = new Cell('cell21', 'rojo', 532, 166, ['cell20', 'cell22'], 'normal', '', false);
        cells['cell22'] = new Cell('cell22', 'amarillo', 497, 113, ['cell21', 'cell23', 'cell54'], 'quesito', '', true);
        cells['cell23'] = new Cell('cell23', 'morado', 457, 72, ['cell22', 'cell24'], 'normal', '', false);
        cells['cell24'] = new Cell('cell24', 'azul', 425, 49, ['cell23', 'cell25'], 'normal', '', false);
        cells['cell25'] = new Cell('cell25', 'verde', 385, 28, ['cell24', 'cell26'], 'normal', '', false);
        cells['cell26'] = new Cell('cell26', 'dado', 336, 17, ['cell25', 'cell27'], 'dado', 'sincat', false);
        cells['cell27'] = new Cell('cell27', 'rojo', 292, 9, ['cell26', 'cell28'], 'normal', '', false);
        cells['cell28'] = new Cell('cell28', 'amarillo', 246, 11, ['cell27', 'cell29'], 'normal', '', false);
        cells['cell29'] = new Cell('cell29', 'morado', 184, 27, ['cell28', 'cell30', 'cell60'], 'quesito', '', true);
        cells['cell30'] = new Cell('cell30', 'azul', 132, 53, ['cell29', 'cell31'], 'normal', '', false);
        cells['cell31'] = new Cell('cell31', 'verde', 101, 79, ['cell30', 'cell32'], 'normal', '', false);
        cells['cell32'] = new Cell('cell32', 'rojo', 71, 109, ['cell31', 'cell33'], 'normal', '', false);
        cells['cell33'] = new Cell('cell33', 'amarillo', 46, 145, ['cell32', 'cell34'], 'normal', '', false);
        cells['cell34'] = new Cell('cell34', 'dado', 28, 184, ['cell33', 'cell35'], 'dado', 'sincat', false);
        cells['cell35'] = new Cell('cell35', 'morado', 16, 223, ['cell34', 'cell1'], 'normal', '', false);

        // Celdas internas norte
        cells['cell36'] = new Cell('cell36', 'dado', 43, 281, ['cell1', 'cell37'], 'dado', 'sincat', false);
        cells['cell37'] = new Cell('cell37', 'azul', 70, 281, ['cell36', 'cell38'], 'normal', '', false);
        cells['cell38'] = new Cell('cell38', 'verde', 97, 281, ['cell37', 'cell39'], 'normal', '', false);
        cells['cell39'] = new Cell('cell39', 'rojo', 127, 281, ['cell38', 'cell40'], 'normal', '', false);
        cells['cell40'] = new Cell('cell40', 'amarillo', 157, 281, ['cell39', 'cell41'], 'normal', '', false);
        cells['cell41'] = new Cell('cell41', 'morado', 182, 281, ['cell40', 'cellInicial'], 'normal', '', false);

        // Celdas internas noreste
        cells['cell42'] = new Cell('cell42', 'morado', 195, 507, ['cell8', 'cell43'], 'normal', '', false);
        cells['cell43'] = new Cell('cell43', 'dado', 205, 480, ['cell42', 'cell44'], 'dado', 'sincat', false);
        cells['cell44'] = new Cell('cell44', 'azul', 215, 454, ['cell43', 'cell45'], 'normal', '', false);
        cells['cell45'] = new Cell('cell45', 'verde', 225, 426, ['cell44', 'cell46'], 'normal', '', false);
        cells['cell46'] = new Cell('cell46', 'rojo', 235, 399, ['cell45', 'cell47'], 'normal', '', false);
        cells['cell47'] = new Cell('cell47', 'amarillo', 244, 370, ['cell46', 'cellInicial'], 'normal', '', false);

        // Celdas internas sureste
        cells['cell48'] = new Cell('cell48', 'amarillo', 468, 432, ['cell15', 'cell49'], 'normal', '', false);
        cells['cell49'] = new Cell('cell49', 'morado', 446, 415, ['cell48', 'cell50'], 'normal', '', false);
        cells['cell50'] = new Cell('cell50', 'dado', 420, 397, ['cell49', 'cell51'], 'dado', 'sincat', false);
        cells['cell51'] = new Cell('cell51', 'azul', 397, 377, ['cell50', 'cell52'], 'normal', '', false);
        cells['cell52'] = new Cell('cell52', 'verde', 371, 358, ['cell51', 'cell53'], 'normal', '', false);
        cells['cell53'] = new Cell('cell53', 'rojo', 346, 339, ['cell52', 'cellInicial'], 'normal', '', false);

        // Celdas internas suroeste
        cells['cell54'] = new Cell('cell54', 'rojo', 465, 136, ['cell22', 'cell55'], 'normal', '', false);
        cells['cell55'] = new Cell('cell55', 'amarillo', 441, 155, ['cell54', 'cell56'], 'normal', '', false);
        cells['cell56'] = new Cell('cell56', 'morado', 418, 173, ['cell55', 'cell57'], 'normal', '', false);
        cells['cell57'] = new Cell('cell57', 'dado', 394, 193, ['cell56', 'cell58'], 'dado', 'sincat', false);
        cells['cell58'] = new Cell('cell58', 'azul', 370, 210, ['cell57', 'cell59'], 'normal', '', false);
        cells['cell59'] = new Cell('cell59', 'verde', 345, 230, ['cell58', 'cellInicial'], 'normal', '', false);

        // Celdas internas noroeste
        cells['cell60'] = new Cell('cell60', 'verde', 194, 63, ['cell29', 'cell61'], 'normal', '', false);
        cells['cell61'] = new Cell('cell61', 'rojo', 206, 89, ['cell60', 'cell62'], 'normal', '', false);
        cells['cell62'] = new Cell('cell62', 'amarillo', 217, 115, ['cell61', 'cell63'], 'normal', '', false);
        cells['cell63'] = new Cell('cell63', 'morado', 226, 143, ['cell62', 'cell64'], 'normal', '', false);
        cells['cell64'] = new Cell('cell64', 'dado', 234, 171, ['cell63', 'cell65'], 'dado', 'sincat', false);
        cells['cell65'] = new Cell('cell65', 'azul', 242, 197, ['cell64', 'cellInicial'], 'normal', '', false);

        //Celdas iniciales
        cells['cellInicial'] = new Cell('cellInicial', 'inicial', 270, 280, ['cell41', 'cell47', 'cell53', 'cell59', 'cell65', ], 'inicial', 'sincat', true);
        cells['cellInicial#1'] = new Cell('cellInicial#1', 'inicial', 222, 281, ['cell41', 'cell47', 'cell53', 'cell59', 'cell65', ], 'inicial', 'sincat', true);
        cells['cellInicial#2'] = new Cell('cellInicial#2', 'inicial', 255, 343, ['cell41', 'cell47', 'cell53', 'cell59', 'cell65', ], 'inicial', 'sincat', true);
        cells['cellInicial#3'] = new Cell('cellInicial#3', 'inicial', 320, 322, ['cell41', 'cell47', 'cell53', 'cell59', 'cell65', ], 'inicial', 'sincat', true);
        cells['cellInicial#4'] = new Cell('cellInicial#4', 'inicial', 320, 247, ['cell41', 'cell47', 'cell53', 'cell59', 'cell65', ], 'inicial', 'sincat', true);
        cells['cellInicial#5'] = new Cell('cellInicial#5', 'inicial', 255, 224, ['cell41', 'cell47', 'cell53', 'cell59', 'cell65', ], 'inicial', 'sincat', true);
    }
    definirCeldas();

    // Variable que contiene los jugadores
    var jugadores_objeto = {};
    var numeroDeJugadores = 0;

    // Cargar bloques en el DOM
    cargarBloques(bloques);        

    $('#opciones-siguiente').on('click', function(event) {
        event.preventDefault();

        var modoDeJuego = $('#opcion-modo-de-juego').val();
        var bloques = [];
        var nivel = $('#opcion-nivel').val();
        var grado = $('#opcion-grado').val();
        var dificultad = $('#opcion-dificultad').val();

        $($('.bloque-option:checked')).each(function(){
            bloques.push(this.value);
        })

        // Ocultar jugadores del 2 al 5 y opcion del CPU si modoDeJuego === "solo"
        if(modoDeJuego === 'solo'){
            for(var i = 2; i <= 5; i++){
                $(`.jugador-${i}-div`).removeClass('d-flex');
                $(`.jugador-${i}-div`).hide();
            }
            $('.jugador-1-cpu-div').removeClass('d-flex');
            $('.jugador-1-cpu-div').hide();
        }

        // Buscar preguntas con estas opciones definidas
        if(bloques.length < 1) alert('Debe seleccionar al menos un bloque');
        else{
            // Mostrar spinner
            $('#opciones-siguiente').hide();
            mostrarSpinner($('.preguntas-opciones-container'));

            var response = obtenerPreguntas(preguntas, bloques, nivel, grado, dificultad);

            // Ocultar spinner
            ocultarSpinner($('#opcionesForm-container'));

            if(response.response !== 'success' || response.categorias.length < 1){
                alert('No se encontraron preguntas con estos parámetros');
                $('#opciones-siguiente').show();
            } else{
                preguntas = response.preguntas;
                categorias = response.categorias;

                // Cargar categorias en el DOM
                cargarCategorias(categorias);                            

                $('.preguntas-opciones-container').hide();
                $('.preguntas-categorias-container').show();
            }

            if(response.response !== 'success'){
                $('#opciones-siguiente').show();
            }
        }
        
    });

    $('#opcionesForm').on('submit', function(event) {
        event.preventDefault();

        $('#addOpciones').attr('disabled', true);

        var categoriasSeleccionadas = [];

        $($('.categoria-option:checked')).each(function(){
            categoriasSeleccionadas.push(this.value);
        })

        if(categoriasSeleccionadas.length < 1){
            alert('Debes seleccionar al menos 1 categoría');
            $('#addOpciones').attr('disabled', false);
            return;
        }
        if(categoriasSeleccionadas.length > 5){
            alert('Debes elegir máximo 5 categorías');
            $('#addOpciones').attr('disabled', false);
            return;
        }

        // Filtrar preguntas basado en las categorías seleccionadas
        preguntas = preguntas.filter(function(pregunta) {
            return categoriasSeleccionadas.includes(pregunta.categoria);
        });


        $('#opcionesForm-container').toggle();
        $('#jugadoresForm-container').toggle();

    });        

    $('#jugadoresForm').on('submit', function(event) {
        event.preventDefault();

        const coloresSeleccionados = []; // Array para almacenar los colores seleccionados
        let numJugadores = 0; // Variable para contar el número de jugadores ingresados

        // Obtener datos de los jugadores
        const jugadores_objeto = {};

        // Iterar sobre los campos de cada jugador y agregarlos al arreglo de jugadores
        for (let i = 1; i <= 5; i++) {
            const equipo = $(`#jugador${i}-nombre`).val();
            const color = $(`#jugador${i}-color`).val();
            const cpu = $(`#jugador${i}-cpu`).is(':checked');

            // Verificar si ambos campos tienen valores válidos
            if (equipo.trim() !== '' && color !== '') {
                // Verificar si el color ya ha sido seleccionado antes
                if (coloresSeleccionados.includes(color)) {
                    alert('Por favor, elige un color diferente para cada jugador.');
                    return; // Detener la ejecución si se repite un color
                } else {
                    coloresSeleccionados.push(color); // Agregar el color al array de colores seleccionados
                    numJugadores++; // Incrementar la cantidad de jugadores ingresados
                }

                // Construir la estructura de jugadorX
                jugadores_objeto[`jugador${i}`] = {
                    cpu,
                    nombre: equipo,
                    ficha: `#${color}`,
                    quesitos: [] // Inicializar con un array vacío de quesitos
                };
            }
        }

        // Verificar que haya al menos dos jugadores con nombre y color definidos
        if (numJugadores < 2 && $('#opcion-modo-de-juego').val() !== 'solo') {
            alert('Se necesitan al menos dos jugadores con nombre y color definido para iniciar el juego.');
            return; // Detener la ejecución si no hay suficientes jugadores válidos
        } else if(numJugadores < 1 && $('#opcion-modo-de-juego').val() == 'solo'){
            alert('Debes definir tu nombre y color para poder iniciar el juego');
            return; // Detener la ejecución si no hay suficientes jugadores válidos
        }

        console.log(jugadores_objeto); // Aquí tienes los datos de los jugadores

        // Ocultar el formulario de jugadores y mostrar el juego
        $('.overlay, .jugadoresForm-container').hide();
        $('#detalles-opciones-container').show();
        
        iniciarJuego(jugadores_objeto, cells);
    });

    // Funcion auxiliar: filtrar preguntas
    function obtenerPreguntas(preguntas, bloques, nivel, grado, dificultad) {
        console.log('preguntas', preguntas)

        let preguntasFiltradas = preguntas;
    
        if (nivel !== 'sin-definir') {
            preguntasFiltradas = preguntasFiltradas.filter(pregunta => pregunta.nivel === nivel);
        }
    
        if (grado !== 'sin-definir') {
            preguntasFiltradas = preguntasFiltradas.filter(pregunta => pregunta.grado === grado);
        }
    
        if (dificultad !== 'sin-definir') {
            preguntasFiltradas = preguntasFiltradas.filter(pregunta => pregunta.dificultad === dificultad);
        }
    
        if (bloques && bloques.length > 0) {
            preguntasFiltradas = preguntasFiltradas.filter(pregunta => bloques.includes(pregunta.bloque));
        }
    
        let preguntasArray = preguntasFiltradas.map(pregunta => {
            let bloqueImg = pregunta.bloque.toLowerCase();
            bloqueImg = bloqueImg.normalize('NFD').replace(/[\u0300-\u036f]/g, ""); // remove accents
            bloqueImg = bloqueImg.replace(/\s+/g, '-'); // replace spaces with hyphens
            bloqueImg += '.png';
    
            return {
                ID: pregunta.ID,
                enunciado: pregunta.enunciado,
                opcion_correcta: pregunta.opcion_correcta,
                opcion_err1: pregunta.opcion_err1,
                opcion_err2: pregunta.opcion_err2,
                dificultad: pregunta.dificultad,
                asignatura: pregunta.asignatura,
                bloque: pregunta.bloque,
                categoria: pregunta.categoria,
                bloque_img: bloqueImg,
                nivel: pregunta.nivel,
                grado: pregunta.grado
            };
        });
    
        let categoriasArray = [...new Set(preguntasArray.map(pregunta => pregunta.categoria))];
    
        let response = preguntasArray.length > 0 ? "success" : "No fue encontrada ninguna pregunta con estos parámetros";
    
        console.log('preguntasArray', preguntasArray)

        return {
            response: response,
            preguntas: preguntasArray,
            categorias: categoriasArray
        };
    }
    

    // Funcion auxiliar: mostrar spinner de carga
    function mostrarSpinner(div){
        let spinnerDiv = document.createElement('div');
        spinnerDiv.innerHTML = `
        <div class="spinner" id="spinner">
            <div class="bounce1"></div>
            <div class="bounce2"></div>
            <div class="bounce3"></div>
        </div>
        `;
        div.append(spinnerDiv);
    };

    // Funcion auxiliar: ocultar spinner de carga
    function ocultarSpinner(div){
        div.find('.spinner').remove();
    };

    // Funcion auxiliar: cargar bloques
    function cargarBloques(bloques){
        $(bloques).each(function(index, value) {
            // Crear el checkbox y su etiqueta correspondiente
            var checkbox = $('<input>').attr({
                type: 'checkbox',
                id: 'bloque' + index,
                class: 'bloque-option',
                name: 'bloque',
                value: value,
                checked: index < 5
            });
            var label = $('<label>').attr({
                for: 'bloque' + index
            }).text(value);

            var bloqueDiv = document.createElement('div');
            $(bloqueDiv).addClass('d-flex').addClass('gap-3');

            // Agregar el checkbox y la etiqueta al div 'opciones-bloque'
            $(bloqueDiv).append(checkbox).append(label);
            $('#opciones-bloque').append(bloqueDiv);
        });
    }

    // Funcion auxiliar: cargar categorias
    function cargarCategorias(categoriasPosibles, invitado = false){
        $('#opciones-categoria').empty();
        $(categoriasPosibles).each(function(index, value) {
            // Crear el checkbox y su etiqueta correspondiente
            var checkbox = $('<input>').attr({
                type: 'checkbox',
                id: 'categoria' + index,
                class: 'categoria-option m-0',
                name: 'categoria',
                value: value,
                checked: index < 5,
                disabled: invitado
            });
            var label = $('<label>').attr({
                for: 'categoria' + index,
                class: 'm-0',
            }).text(value);

            var categoriaDiv = document.createElement('div');
            $(categoriaDiv).addClass('d-flex').addClass('gap-3');

            // Agregar el checkbox y la etiqueta al div 'opciones-categoria'
            $(categoriaDiv).append(checkbox).append(label);
            $('#opciones-categoria').append(categoriaDiv);
        });
    }

    // Funcion auxiliar: devolver string con primera letra en mayúsculas
    function capitalizeFirstLetter(str) {
        return str.charAt(0).toUpperCase() + str.slice(1);
    }

})

function iniciarJuego(jugadores_recibidos, cells) {
    console.log('iniciando juego');

    // Destacar jugador en turno
    setInterval(()=>{
        $('.destacarJugador').toggleClass('resaltarJugador');
    }, 500);
    
    var jugadores = jugadores_recibidos;
    $(document).ready(function() {

        // Tiempo de las animaciones
        const tiempoDeAnimacion = 250;

        // Variables globales para rastrear el número de dado actual y el total de dados
        var currentDiceNumber = 1;
        var totalDice = 6;

        // Variable global para saber si es una partida de solo 1 jugador
        var solo1Jugador = false;
        if (Object.keys(jugadores).length === 1) solo1Jugador = true;

        /* Variables de iniciacion */
        var turnoActual = 1; // Variable para controlar el turno actual
        var numJugadores = Object.keys(jugadores).length; // Obtener la cantidad de jugadores

        const coloresDisponibles = ['azul', 'verde', 'rojo', 'amarillo', 'morado']; // Colores disponibles
        const categoriasDisponibles = obtenerCategoriasDisponibles(); // Función que obtiene las categorías únicas de las preguntas
        
        // Función para asignar categorías a las celdas
        function asignarCategoriasACeldas() {
            const categoriasAsignadas = {};
            let indiceCategoria = 0;

            coloresDisponibles.forEach((color, index) => {
                categoriasAsignadas[color] = categoriasDisponibles[indiceCategoria];
                indiceCategoria = (indiceCategoria + 1) % categoriasDisponibles.length;
            });

            console.log(categoriasAsignadas);

            return categoriasAsignadas;
        }

        // Obtener categorías únicas de las preguntas
        function obtenerCategoriasDisponibles() {
            const categoriasUnicas = [...new Set(preguntas.map(pregunta => pregunta.categoria))];
            return categoriasUnicas;
        }

        // Asignar categorías a las celdas
        const categoriasAsignadas = asignarCategoriasACeldas();

        // Asignar categorías a las celdas según el color
        Object.values(cells).forEach(cell => {
            if (cell.color && categoriasAsignadas[cell.color]) {
                cell.categoria = categoriasAsignadas[cell.color];
            }
        });

        // Funcion preliminar
        function init() {
            //Quitar filtro al tablero
            $('#game-tablero').removeClass('filtro-oscuro');

            //Habilitar boton de lanzar dado
            toggleDado();

            /* Llenar información de detalles de opciones y categorias */
            // Mostrar detalles de las opciones
            var nivel = capitalizeFirstLetter($('#opcion-nivel').val());
            var grado = capitalizeFirstLetter($('#opcion-grado').val());
            var dificultad = capitalizeFirstLetter($('#opcion-dificultad').val());

            $('#detalles-opciones-container').html(`
            <p>Level: ${nivel != 'Sin-definir' ? nivel : 'Undefined'}</p>
            <p>Grade: ${grado != 'Sin-definir' ? grado : 'Undefined'}</p>
            <p>Dificulty: ${dificultad != 'Sin-definir' ? dificultad : 'Undefined'}</p>
            `)

            // Mostrar a que color corresponde cada categoria
            $('.categorias-container').show();
            const contenedorCategorias = document.getElementById('detalles-colores-container');

            for (const color in categoriasAsignadas) {
                const categoria = categoriasAsignadas[color];

                const elemento = document.createElement('p');

                elemento.innerHTML = `
                <span style="font-size: 15px;" class="d-flex align-items-center gap-2">
                    <div class="categoria-color ${color}"></div>               
                    <strong>${categoria}</strong> 
                </span>
                `;

                contenedorCategorias.appendChild(elemento);
            }

            /* Posicionar cada ficha en su celda inicial */
            var i = 1;
            $.each(jugadores, function(index, jugador) {
                var posicionInicial = cells[`cellInicial#${i}`];
                $(jugador.ficha).data('cell', posicionInicial);

                $(jugador.ficha).show();
                $(jugador.ficha).css({
                    top: posicionInicial.top + "px",
                    left: posicionInicial.left + "px"
                });
                i++;
            })

            $.each(jugadores, function(index, jugador) {
                var quesitos_acum_div = document.createElement('div');
                $(quesitos_acum_div).addClass(`quesitos-acum quesitos-${jugador.nombre.replace(' ', '-')}`);
                $(quesitos_acum_div).html(`
                <div class="title d-flex gap-2">
                    <p class="ficha-jugador"><img width="20px" src="assets/${jugador.ficha.slice(1)}.png"></p>
                    <p class="nombre-jugador"><strong>${jugador.nombre}</strong> ${jugador.cpu ? '(CPU)' : ''}</p>
                </div>
                <div class="quesitos-acum-info">
                </div>
                `);

                $('.quesitos-acum-list').append(quesitos_acum_div);
            })            

            // Si está jugando solo un jugador
            if(solo1Jugador){
                // Agregar y actualizar contador
                $('#tiempo_stats').show();

                tiempoYStats();
            }

            // Indicar en el DOM el turno inicial
            resaltarJugadorEnTurno();

            // Verificar si el primer jugador es un CPU
            verificarTipoDeJugador(obtenerJugadorActual());
        }

        // Eventos on click
        $("#roll-dice").click( () => rollDice());
        $("#salir").click( () => location.replace('/'));

        //Se obtiene la posición actual de la ficha del turno en curso
        function obtenerPosicionCeldaActual(fichaActual) {
            // Obtener el ID de la celda actual desde su nombre
            var currentCellId = $(fichaActual).data('cell');
            return currentCellId;
        }

        // Lanzar dado
        function rollDice() {
            var jugadorActual = obtenerJugadorActual();

            // Inhabilitar dado
            toggleDado()

            fichaEnMovimiento = true;

            var finalNumber = 0; // Variable para almacenar el número final del dado
            var count = 0;
            var interval = setInterval(function() {
                var randomNumber = Math.floor(Math.random() * 6) + 1;
                
                // Ocultar el dado actual
                $('#dice' + currentDiceNumber).hide();

                // Mostrar el nuevo dado con el número generado
                $('#dice' + randomNumber).show();

                currentDiceNumber = randomNumber; // Actualizar el número de dado actual
                
                count++;
                if (count === 4) {
                    clearInterval(interval);
                    finalNumber = currentDiceNumber; // Almacenar el número final del dado
                    
                    // Obtener la posición de la celda actual
                    var jugadorActual = obtenerJugadorActual();
                    
                    var celdaActual = obtenerPosicionCeldaActual(jugadorActual.ficha);
                    
                    // Resaltar las disponibles
                    resaltarCeldasPorDistancia(celdaActual, finalNumber);

                    if(solo1Jugador) tiempoYStats('dados');
                }
            }, 500); // Cambiar la imagen del dado cada cuarto de segundo
        }

        // Resalta las celdas disponibles para el jugador
        function resaltarCeldasPorDistancia(celdaActual, finalNumber) {
            console.log('resaltando celdas');

            var celdasAFinal = '';
            var caminos = '';
                
            caminos = bfsConDistancia(celdaActual.nombre, finalNumber);
            celdasAFinal = caminos.map(camino => camino[camino.length - 1]);

            // Elimina duplicados
            celdasAFinal = [...new Set(celdasAFinal)];

            var jugadorActual = obtenerJugadorActual();
            var jugadorActual_ficha = jugadorActual.ficha.slice(1);

            celdasAFinal.forEach(celdaId => {
                var celda = cells[celdaId];
                if (cells[celdaId] !== undefined) {
                    var $container = $('<div class="highlighted-cell"></div>');
                    $container.css({
                        backgroundImage: `url('assets/${jugadorActual_ficha}.png')`,
                        backgroundSize: 'contain',
                        backgroundRepeat: 'no-repeat',
                        backgroundPosition: 'center',
                        top: celda.top + 'px',
                        left: celda.left + 'px'
                    });
                    $('#game-tablero').append($container);

                    var intervalId = setInterval(function() {
                        $container.toggleClass('hg-bg');
                    }, 500);

                    $container.on('click', function() {
                        quitarResaltadoCeldasAdyacentes();
                        var caminoElegido = caminos.find(camino => camino[camino.length - 1] === celdaId);
                        moverFicha(celdaActual, caminoElegido, 0);
                    });
                }
            });

            // Si es un CPU, llamar a moverCPU
            if (jugadorActual.cpu) {
                setTimeout(() => {                        
                    moverCPU(celdaActual, finalNumber, caminos);
                    quitarResaltadoCeldasAdyacentes();
                }, 2500);
            }

            console.log("Caminos", caminos);
            return caminos;
        }

        // Mueve la ficha hasta cellId
        function moverFicha(celdaPrevia, camino, iteracion) {
            if (iteracion < camino.length) {
                var cellDetails = cells[camino[iteracion]];
                moverSecuencialmente(cellDetails, celdaPrevia, iteracion, camino);
            }
        }

        // Movimiento iterado de la celda
        function moverSecuencialmente(celdaActual, celdaPrevia, iteracion, camino) {
            var jugadorActual = obtenerJugadorActual();

            var siguienteCelda = cells[camino[iteracion + 1]];
            var nuevaCeldaPrevia = celdaActual;

            // Encolar la animación de la ficha hacia la siguiente celda
            $(jugadorActual.ficha).clearQueue().animate({
                top: siguienteCelda.top + "px",
                left: siguienteCelda.left + "px",
            }, tiempoDeAnimacion).queue(function(next) {
                // Modificar metadata de la ficha
                $(jugadorActual.ficha).data('cell', siguienteCelda);

                var nuevaCeldaActual = siguienteCelda;

                // Si se acabaron los movimientos
                if (iteracion + 1 >= camino.length - 1) {
                    // fichaEnMovimiento = false;

                    setTimeout(() => {
                        verificarPosicionesFichas();

                        if (nuevaCeldaActual.tipoDeCelda !== "dado") {

                            if(nuevaCeldaActual.tipoDeCelda === "inicial"){
                                repetirDado(jugadorActual);
                            } else{
                                //Realizar pregunta
                                hacerPregunta(nuevaCeldaActual);
                            }
                        } else if (nuevaCeldaActual.tipoDeCelda === "dado") {
                            repetirDado(jugadorActual);
                        }
                    }, tiempoDeAnimacion)
                } else {
                    // Llamada recursiva para el siguiente movimiento
                    setTimeout(() => {
                        moverFicha(nuevaCeldaPrevia, camino, iteracion + 1);
                    }, tiempoDeAnimacion)
                }

                next(); // Invocar next() para continuar con la siguiente animación en la cola
            });
        }

        // Verificar posicion de celdas para reacomodar
        function verificarPosicionesFichas() {
            setTimeout(() => { //Para terminar que acabe la animacion previa                 
                var posiciones = {};

                $('.chip').each(function() {
                    var ficha = $(this);
                    var posicion = ficha.css('top') + '_' + ficha.css('left');

                    if (posiciones[posicion]) {
                        var nuevaTop = parseInt(ficha.css('top')) + 5; // Mueve hacia abajo
                        var nuevaLeft = parseInt(ficha.css('left')) + 5; // Mueve a la derecha

                        // Mover la ficha ligeramente
                        ficha.clearQueue().animate({
                            top: nuevaTop + "px",
                            left: nuevaLeft + "px",
                        }, 200);

                        posiciones[posicion]++; // Incrementar el contador para esta posición
                    } else {
                        posiciones[posicion] = 1; // Inicializar el contador para esta posición
                    }
                });
            }, 200);
        }

        // Hacer pregunta
        function hacerPregunta(celdaActual) {

            var jugadorActual = obtenerJugadorActual();

            var preguntas_categoria = celdaActual.categoria;
            var preguntas_posibles = [];

            // filtrar categoría de la pregunta
            $.each(preguntas, function(index, pregunta) {
                if (pregunta.categoria === preguntas_categoria) {
                    preguntas_posibles.push(pregunta);
                }
            });

            if (preguntas_posibles.length > 0) {

                // Sacar una pregunta random de esa categoría
                var i = Math.floor(Math.random() * preguntas_posibles.length);
                var preguntaAleatoria = preguntas_posibles[i];

                console.log('Pregunta realizada:', preguntaAleatoria.enunciado);
            }

            // Añadimos la pregunta con sus respuestas al dom
            if (preguntaAleatoria) {
                console.log(preguntaAleatoria);

                var respuestas_posibles = [];

                // Crear botón por cada respuesta posible
                if (preguntaAleatoria.opcion_correcta) {
                    var opcion_correcta = document.createElement('div');
                    $(opcion_correcta).addClass('respuestas-btn');
                    $(opcion_correcta).val(preguntaAleatoria.opcion_correcta);
                    opcion_correcta.innerHTML = `
                            <button class="respuesta" ${jugadorActual.cpu === true ? 'disabled' : ''}>
                            ${preguntaAleatoria.opcion_correcta}
                            </button>
                    `;

                    respuestas_posibles.push(opcion_correcta);
                }
                if (preguntaAleatoria.opcion_err1) {
                    var opcion_err1 = document.createElement('div');
                    $(opcion_err1).addClass('respuestas-btn');
                    $(opcion_err1).val(preguntaAleatoria.opcion_err1);
                    opcion_err1.innerHTML = `
                            <button class="respuesta" ${jugadorActual.cpu === true ? 'disabled' : ''}>
                            ${preguntaAleatoria.opcion_err1}
                            </button>
                    `;

                    respuestas_posibles.push(opcion_err1);
                }
                if (preguntaAleatoria.opcion_err2) {
                    var opcion_err2 = document.createElement('div');
                    $(opcion_err2).addClass('respuestas-btn');
                    $(opcion_err2).val(preguntaAleatoria.opcion_err2);
                    opcion_err2.innerHTML = `
                            <button class="respuesta" ${jugadorActual.cpu === true ? 'disabled' : ''}>
                            ${preguntaAleatoria.opcion_err2}
                            </button>
                    `;

                    respuestas_posibles.push(opcion_err2);
                }

                // Agregar el enunciado al div
                $('#pregunta-bloque-img').attr('src', `bloques/${preguntaAleatoria.bloque_img}`);
                $('#pregunta-bloque').text(preguntaAleatoria.bloque);
                $('#pregunta-categoria').text(preguntaAleatoria.categoria);
                $('.enunciado-container').css('backgroundImage', `url('bloques/${preguntaAleatoria.bloque_img}')`);
                $('#pregunta-enunciado').text(preguntaAleatoria.enunciado);

                $('.categoria-container').addClass(`pregunta-bg-${celdaActual.color}`);

                // Barajar aleatoriamente el array de respuestas
                respuestas_posibles.sort(function() {
                    return Math.random() - 0.5;
                });

                // Agregar las respuestas al div .respuestas en orden aleatorio
                var divRespuestas = $('.respuestas');
                divRespuestas.empty(); // Limpiar el contenido existente

                respuestas_posibles.forEach(function(respuesta) {
                    divRespuestas.append(respuesta);
                });

                console.log(respuestas_posibles)

                $('#overlay').show();
                
                // Verificar si es un CPU
                if(jugadorActual.cpu === true) {
                    setTimeout(() => {
                        // Obtener probabilidad de que acierte la respuesta correcta
                        var probabilidadDeAcierto = probabilidadSegunDificultad();

                        // Obtener el indice de la respuesta correcta en el array respuestas_posibles
                        var indiceRespuestaCorrecta = respuestas_posibles.findIndex(respuesta => respuesta.value === preguntaAleatoria.opcion_correcta);
                        var respuestaElegida;

                        if (Math.random() < probabilidadDeAcierto) {
                            // Elige la respuesta correcta basado en la probabilidad
                            respuestaElegida = respuestas_posibles[indiceRespuestaCorrecta];
                        } else {
                            // Elige una respuesta incorrecta al azar
                            var respuestasIncorrectas = respuestas_posibles.filter((_, index) => index !== indiceRespuestaCorrecta);
                            respuestaElegida = respuestasIncorrectas[Math.floor(Math.random() * respuestasIncorrectas.length)];
                        }

                        procesarRespuesta(respuestaElegida, preguntaAleatoria, celdaActual, true);
                    }, 5000);
                }


                // Evento click en las respuestas para los usuarios
                respuestas_posibles.forEach(function(respuesta) {
                    $(respuesta).on('click', function() {
                        procesarRespuesta(respuesta, preguntaAleatoria, celdaActual);
                    })
                });
                
            }

            // Actualizar stat si esta jugando solo
            if(solo1Jugador){
                // Preguntas recibidas
                tiempoYStats('pregunta_recibida');

                // Promedio de respuesta por pregunta
                promedioPorPregunta();
            }
        }

        // Procesar respuestas a las preguntas
        function procesarRespuesta(respuesta, pregunta, celdaActual, cpu = false){

            console.log("preguntaAleatoria",pregunta.bloque_img);
            var hayunganador = false;

            var jugadorActual = obtenerJugadorActual();
            respuesta = $(respuesta).val();

            var respuesta_correcta = respuesta === pregunta.opcion_correcta ? true : false;

            if(celdaActual.tipoDeCelda == 'normal'){
                if (respuesta_correcta) {                        
                    if(cpu){
                        setTimeout( ()=>rollDice(), 1000 );
                    }

                    // Actualizar stat si es solo un jugador
                    if(solo1Jugador) tiempoYStats('pregunta_acertada');

                    fichaEnMovimiento = false;
                } else {
                    // Actualizar stat si es solo un jugador
                    if(solo1Jugador) tiempoYStats('pregunta_errada');

                    // cambiar turno
                    cambiarTurno();                    

                }
            } else if(celdaActual.tipoDeCelda == 'quesito'){
                if (respuesta_correcta) {

                    if (!jugadores[`jugador${turnoActual}`].quesitos.includes(`${celdaActual.nombre}`)) {
                        // Agregamos el nombre de la celda del quesito ganado al array de quesitos del jugador/equipo actual
                        jugadores[`jugador${turnoActual}`].quesitos.push(`${celdaActual.nombre}`);

                        // Añadir quesito ganado al DOM
                        $(`.quesitos-${jugadorActual.nombre.replace(' ', '-')} .quesitos-acum-info`).append(
                            `
                            <div class="quesito-obtenido">
                                <div class="categoria-color categoria-icono-img borde-${celdaActual.color}" style="background-image: url('bloques/${pregunta.bloque_img}');"></div>
                                <p class="${celdaActual.color}">${pregunta.categoria}</p>
                            </div>
                            `
                        )

                        // Verificar los quesitos de los jugadores/equipos
                        $.each(jugadores, function(index, jugador) {
                            if (jugador.quesitos.length > 4) {
                                hayunganador = true;
                            }
                        })
                        

                    } else {
                        alert('Ya has ganado esta estrella anteriormente');
                    }

                    if(cpu){                        
                        // Que el CPU siga jugando
                        setTimeout( ()=>rollDice(), 1000 )
                    }

                    // Actualizar stat si es solo un jugador
                    if(solo1Jugador) tiempoYStats('pregunta_acertada');
                } else {
                    // Actualizar stat si es solo un jugador
                    if(solo1Jugador) tiempoYStats('pregunta_errada');

                    // cambiar turno
                    cambiarTurno();
                }
            }

            if(!hayunganador){
                // Limpiar container de preguntas
                $('.categoria-container').removeClass(`pregunta-bg-${celdaActual.color}`);
                limpiarContainerPreguntas();

                // Ocultar container de preguntas
                $('.preguntas-container').hide();

                // Mostrar container de resultado de respuesta
                mostrarResultadoRespuesta(respuesta_correcta);
            } else {
                terminarPartida(jugadorActual);

                toggleDado();
            }

            // Actualizar stat de promedio por respuesta si esta jugando solo
            if(solo1Jugador) promedioPorPregunta('detener');
        }

        // Mostrar resultado de la respuesta
        function mostrarResultadoRespuesta(respuesta_correcta){
            if(respuesta_correcta) {
                $('#respuesta-correcta').slideDown(500);
                setTimeout(()=>{
                    $('#respuesta-correcta > p').slideDown(500)
                }, 500)
            }
            else {
                $('#respuesta-incorrecta').slideDown(500);
                setTimeout(()=>{
                    $('#respuesta-incorrecta > p').slideDown(500);
                }, 500)
            }

            // Destacar texto en turno
            var interval = setInterval(
                ()=>{
                    $('.tablilla-img').toggleClass('opacity-0');
                }, 250
            )

            // Esperar 2s para reajustar
            setTimeout(()=>{
                $('#overlay').hide();

                $('.preguntas-container').show();
                $('#respuesta-correcta, #respuesta-correcta > p').hide();
                $('#respuesta-incorrecta, #respuesta-incorrecta > p').hide();
                clearInterval(interval);

                // Habilitar dado
                toggleDado();
            }, 5000)
        }

        // Mostrar container de repetir lanzamiento de dado
        function repetirDado(jugadorActual){

            $('.preguntas-container').hide();
            $('#overlay').show();

            // Mostrar container de dado
            $('#repetir-dado').slideDown(500);
            setTimeout(()=>{
                $('#repetir-dado > p').slideDown(500)
            }, 500)

            // Destacar texto en turno
            var interval = setInterval(
                ()=>{
                    $('.tablilla-img').toggleClass('opacity-0');
                }, 250
            );

            // Esperar 4s para reajustar
            setTimeout(()=>{
                $('#overlay').hide();

                $('.preguntas-container').show();
                $('#repetir-dado, #repetir-dado > p').hide();
                clearInterval(interval);

                // Habilitar dado
                toggleDado();

                //Si es un CPU, lanzar dado automaticamente
                if(jugadorActual.cpu === true) rollDice();
            }, 4000)
        }

        // Dejar de restar celdas para moverse
        function quitarResaltadoCeldasAdyacentes() {
            $('.highlighted-cell').remove();
        }

        // Cambiar jugador en turno
        function cambiarTurno() {
            var jugadorActual = obtenerJugadorActual()
            jugadorActual = jugadorActual.nombre.replace(' ', '-');

            $(`.quesitos-${jugadorActual} .title .nombre-jugador`).toggleClass('destacarJugador');
            $(`.quesitos-${jugadorActual} .title .nombre-jugador`).removeClass('resaltarJugador');

            turnoActual = turnoActual % numJugadores + 1; // Cambia al siguiente turno                

            // Mostrar en DOM
            resaltarJugadorEnTurno();

            // Verificar el tipo de jugador siguiente
            verificarTipoDeJugador(obtenerJugadorActual());
        }

        // Resaltar en el DOM el jugador en turno
        function resaltarJugadorEnTurno() {
            var jugadorActual = obtenerJugadorActual();
            console.log(jugadorActual);
            $(`.quesitos-${jugadorActual.nombre.replace(' ', '-')} .title .nombre-jugador`).toggleClass('destacarJugador');
        }

        // Habilitar/Deshabilitar boton de tirar dado
        function toggleDado() {
            var jugadorActual = obtenerJugadorActual();
            
            // Comprueba si el jugador actual es una CPU
            if(jugadorActual.cpu === true) {
                // Si el jugador actual es una CPU y el dado está habilitado, entonces deshabilitarlo.
                if(!$('#roll-dice').prop('disabled')) {
                    $('#roll-dice').prop('disabled', true);
                    $('#roll-dice').addClass('dado-deshabilitado'); 
                }
                // Nota: No se hace nada si el dado ya está deshabilitado
            } else {
                // Para jugadores humanos, alterna el estado del dado
                $('#roll-dice').prop('disabled', function(i, val) {
                    return !val;
                });

                $('#roll-dice').toggleClass('dado-deshabilitado');
            }
        }

        // Mostrar al ganador y terminar partida
        function terminarPartida(jugador){
            // Si la partida es de un jugador, verificar el record
            if(solo1Jugador){
                clearInterval(intervalo);
                mostrarSpinner2($('#record-spinner'));
                

                $('.tiempo-actual-val').text(convertirASegundos(tiempoTotalSegundos));
                $('.record-actual-val').text(convertirASegundos(tiempoTotalSegundos));

                ocultarSpinner2($('#record-spinner'));
                $('#record-spinner').hide();

                $('.tablilla-solo-record').show();
            }

            $('.preguntas-container').hide();
            $('#overlay').show();

            $('#tablilla-ganador .tablilla-text').text(`${jugador.nombre} es el ganador`);
            
            $('#tablilla-ganador').slideDown(500);
            setTimeout(()=>{
                $('#tablilla-ganador .tablilla-text').slideDown(500);
            }, 500);
        };

        // Obtener el jugador en turno
        function obtenerJugadorActual() {
            return jugadores['jugador' + turnoActual];
        }

        // Verificar el tipo de jugador en turno (para ver si es CPU)
        function verificarTipoDeJugador(jugadorActual){
            if(jugadorActual.cpu === true){
                setTimeout(()=>{
                    rollDice();
                }, 4500)
            }
        }

        // Limpiar el container de preguntas
        function limpiarContainerPreguntas(){
            $('pregunta-bloque, #pregunta-categoria, #pregunta-enunciado').empty();
        }

        // Resolver probabilidad de que el CPU acierte pregunta según dificultad
        function probabilidadSegunDificultad(){
            var dificultad = $('#opcion-dificultad').val();

            switch(dificultad){
                case 'inicial':
                    return 0.25;
                    break;
                case 'intermedio':
                    return 0.5; 
                    break;
                case 'experto':
                    return 0.75;
                    break;
                default:
                    // Devuelve un numero aleatorio entre 0.25, 0.5 y 0.75
                    return Math.floor(Math.random() * 3) / 4;
            }
        }

        /* Lógica de los caminos de las fichas */
        
        // Búsqueda de camino más corto (BFS) al siguiente quesito
        function bfs(camino, objetivo, visitados, quesitosJugador, celdaPrevia) {
            let cola = [camino];
            while (cola.length > 0) {
                let ruta = cola.shift();
                let nodo = ruta[ruta.length - 1];

                if (!visitados.includes(nodo)) {
                    let adyacentes = cells[nodo].celdasAdyacentes;

                    for (let adyacente of adyacentes) {
                        if (adyacente === celdaPrevia || (cells[adyacente].tipoDeCelda === objetivo && quesitosJugador.includes(adyacente))) {
                            continue; // Ignorar la celdaPrevia y celdas "quesito" que el jugador ya posee
                        }

                        let nuevaRuta = ruta.slice();
                        nuevaRuta.push(adyacente);

                        cola.push(nuevaRuta);

                        if (cells[adyacente].tipoDeCelda === objetivo) {
                            return nuevaRuta;
                        }
                    }

                    visitados.push(nodo);
                }
            }
            return [];
        }

        // Llama a la funcion BFS (Búsqueda de camino más corto)
        function encontrarCaminoACeldaQuesito(celdaInicio, celdaPrevia) {
            let objetivo = 'quesito';
            let visitados = [];
            let quesitosJugador = jugadores[`jugador${turnoActual}`].quesitos;
            let caminoInicial = [celdaInicio.nombre];

            let camino = bfs(caminoInicial, objetivo, visitados, quesitosJugador, celdaPrevia ? celdaPrevia.nombre : null);
            return camino;
        }

        // Devuelve las celdas a X distancia de la celda actual y el camino para llegar a ella
        function bfsConDistancia(celdaInicio, maxDistancia) {
            let caminos = [];
            let cola = [[celdaInicio]]; // Cola de caminos (inicia con el camino que solo contiene la celda de inicio)

            while (cola.length > 0) {
                let rutaActual = cola.shift();
                let ultimaCelda = rutaActual[rutaActual.length - 1];

                // Verificar si la ruta ya contiene una celda "cellInicial"
                let contieneCellInicial = rutaActual.some(celda => celda.includes("cellInicial"));

                if (rutaActual.length - 1 === maxDistancia) {
                    caminos.push(rutaActual); // Añadir ruta si tiene la longitud deseada
                    continue;
                }

                let celdasAdyacentes = cells[ultimaCelda].celdasAdyacentes;
                for (let adyacente of celdasAdyacentes) {
                    // Evitar repeticiones y pasar por otra celda "cellInicial" si ya contiene una
                    if (!rutaActual.includes(adyacente) && !(contieneCellInicial && adyacente.includes("cellInicial"))) {
                        let nuevoCamino = rutaActual.concat([adyacente]);
                        cola.push(nuevoCamino);
                    }
                }
            }
            return caminos;
        }

        // Realizar movimiento del CPU de acuerdo a los caminos disponibles
        function moverCPU(celdaActual, finalNumber, caminos) {
            // Buscar camino más cercano a un quesito no obtenido aun
            var rutaAQuesito = encontrarCaminoACeldaQuesito(celdaActual, null);
            var caminoMasSimilar = null;
            var maxSimilitud = 0;

            // De los caminos disponibles, buscar camino con mayor similitud al camino hacia el quesito
            for (let camino of caminos) {
                let similitud = calcularSimilitudConRutaAQuesito(camino, rutaAQuesito);
                if (similitud > maxSimilitud) {
                    maxSimilitud = similitud;
                    caminoMasSimilar = camino;
                }
            }

            if (caminoMasSimilar) {
                moverFicha(celdaActual, caminoMasSimilar.slice(0, finalNumber + 1), 0);
            } else {
                // Si no hay caminos similares, el CPU podría realizar alguna otra acción
            }
        }

        // Buscar camino con mayor similitud al camino hacia el quesito
        function calcularSimilitudConRutaAQuesito(camino, rutaAQuesito) {
            let similitud = 0;
            for (let celda of camino) {
                if (rutaAQuesito.includes(celda)) {
                    similitud++;
                }
            }
            return similitud;
        }

        /* Fin de Lógica de los caminos de las fichas */

        /* Para el modo de juego "Solo" */

        // Logica del contador y las estadísticas
        var minutos = 0;
        var segundos = 0;
        var tiempoTotalSegundos = 0;
        var intervalo;

        function tiempoYStats(arg = false) {
            if(arg === false){
                // Iniciar contador
                intervalo = setInterval(actualizarContador, 1000);
            }

            // Actualizar stat de dados
            if(arg === 'dados'){
                var dados_tirados = Number($('#dados_tirados p').text());
                dados_tirados = dados_tirados + 1;

                $('#dados_tirados p').text(dados_tirados);
            }

            // Actualizar stat de preguntas recibidas
            if(arg === 'pregunta_recibida'){
                var preg_recibidas = Number($('#preg_recibidas p').text());
                preg_recibidas = preg_recibidas + 1;

                $('#preg_recibidas p').text(preg_recibidas);
            }

            // Actualizar stat de preguntas acertadas
            if(arg === 'pregunta_acertada'){
                var preg_acertadas = Number($('#preg_acertadas p').text());
                preg_acertadas = preg_acertadas + 1;

                $('#preg_acertadas p').text(preg_acertadas);
            }

            // Actualizar stat de preguntas erradas
            if(arg === 'pregunta_errada'){
                var preg_erradas = Number($('#preg_erradas p').text());
                preg_erradas = preg_erradas + 1;

                $('#preg_erradas p').text(preg_erradas);
            }
        }

        function actualizarContador() {
            segundos++;
            tiempoTotalSegundos++;

            if (segundos === 60) {
                segundos = 0;
                minutos++;
            }

            var tiempoFormateado = (minutos < 10 ? '0' : '') + minutos + ':' + (segundos < 10 ? '0' : '') + segundos;
            $('#contador').text(tiempoFormateado);
        }

        var segundosPorPregunta = 0;
        var intervaloPregunta;
        function promedioPorPregunta(arg) {
            if (arg === "detener") {
                // Detener el contador
                clearInterval(intervaloPregunta);

                // Mostrar resultados
                var preg_promedio = Number($('#preg_promedio span.promedio').text());
                
                if(preg_promedio !== 0){
                    preg_promedio = ((preg_promedio + segundosPorPregunta)/2).toFixed(2);
                } else {
                    preg_promedio = segundosPorPregunta;
                }

                $('#preg_promedio span.promedio').text(preg_promedio);
            } else {
                    // Reiniciar variables
                segundosPorPregunta = 0;

                // Iniciar el contador
                intervaloPregunta = setInterval(function () {
                    segundosPorPregunta++;
                }, 1000);
            }
        }

        /* Fin de logica del modo de juego "Solo" */

        // Funcion auxiliar: convertir un numero en minutos
        function convertirASegundos(segundosTotales) {
            var minutos = Math.floor(segundosTotales / 60);
            var segundos = segundosTotales % 60;

            // Añadir un cero al principio si los minutos o segundos son menores a 10
            minutos = minutos < 10 ? '0' + minutos : minutos;
            segundos = segundos < 10 ? '0' + segundos : segundos;

            return minutos + ':' + segundos;
        }

        // Funcion auxiliar: mostrar spinner de carga
        function mostrarSpinner2(div){
            var spinnerDiv2 = document.createElement('div');
            spinnerDiv2.innerHTML = `
            <div class="spinner" id="spinner">
                <div class="bounce1"></div>
                <div class="bounce2"></div>
                <div class="bounce3"></div>
            </div>
            `;
            div.append(spinnerDiv2);
        };

        // Funcion auxiliar: ocultar spinner de carga
        function ocultarSpinner2(div){
            div.find('.spinner').remove();
        };

        // Funcion auxiliar: devolver string con primera letra en mayúsculas
        function capitalizeFirstLetter(str) {
            return str.charAt(0).toUpperCase() + str.slice(1);
        }

        // Funcion auxiliar: verificar que 2 arrays sean iguales
        function arraysIguales(arr1, arr2) {
            if (arr1.length !== arr2.length) return false;
            for (var i = 0; i < arr1.length; i++) {
                if (arr1[i] !== arr2[i]) return false;
            }
            return true;
        }

        // Funcion auxiliar: Buscar la imagen de la categoria en las preguntas
        function obtenerImgCategoria(categoria) {

            for (var i = 0; i < preguntas.length; i++) {
                if (preguntas[i].categoria === categoria) {
                    return preguntas[i].bloque_img; // Devuelve inmediatamente al encontrar la coincidencia
                }
            }

            return null; // Devolver null si no se encuentra ninguna pregunta con esa categoría
        }

        // Ejecutar funcion preliminar
        init();

    });

}
