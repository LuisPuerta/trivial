<?php

// Obtener preguntas según los filtros pedidos
if (isset($_POST['action']) && $_POST['action'] === 'obtener_preguntas') {
    $response = "success";

    $user_id = $_POST['user_id'];
    $bloques = $_POST['bloques'];
    $nivel = $_POST['nivel'];
    $grado = $_POST['grado'];
    $dificultad = $_POST['dificultad'];

    // Buscar preguntas
    $args = array(
        'post_type' => 'preguntas',
        'posts_per_page' => -1,
    );
    
    $meta_query = array();
    
    if ($nivel !== 'sin-definir') {
        $meta_query[] = array(
            'key' => 'nivel',
            'value' => $nivel,
            'compare' => '='
        );
    }
    
    if ($grado !== 'sin-definir') {
        $meta_query[] = array(
            'key' => 'grado',
            'value' => $grado,
            'compare' => '='
        );
    }
    
    if ($dificultad !== 'sin-definir') {
        $meta_query[] = array(
            'key' => 'dificultad',
            'value' => $dificultad,
            'compare' => '='
        );
    }
    
    // Añadir bloques al meta_query si hay bloques seleccionados
    if (!empty($bloques)) {
        $meta_query[] = array(
            'key' => 'bloque',
            'value' => $bloques,
            'compare' => 'IN'
        );
    }
    
    // Añadir meta_query a $args si hay condiciones
    if (!empty($meta_query)) {
        $meta_query['relation'] = 'AND';
        $args['meta_query'] = $meta_query;
    }

    $preguntas = get_posts($args);
    $preguntas_array = array();
    $categorias_array = array();

    foreach ($preguntas as $pregunta) {
        $enunciado = get_post_meta($pregunta->ID, 'pregunta', true);
        $respuesta = get_post_meta($pregunta->ID, 'respuesta', true);
        $opcion2 = get_post_meta($pregunta->ID, 'opcion_2', true);
        $opcion3 = get_post_meta($pregunta->ID, 'opcion_3', true);
        $dificultad = get_post_meta($pregunta->ID, 'dificultad', true);
        $asignatura = get_post_meta($pregunta->ID, 'asignatura', true);
        $bloque = get_post_meta($pregunta->ID, 'bloque', true);
        $categoria = get_post_meta($pregunta->ID, 'categoria', true);
        $nivel = get_post_meta($pregunta->ID, 'nivel', true);
        $grado = get_post_meta($pregunta->ID, 'grado', true);

        // Convertir el texto a minúsculas
        $bloque_img = strtolower($bloque);

        // Reemplazar acentos y caracteres especiales
        $buscar = array('á', 'é', 'í', 'ó', 'ú', 'ñ');
        $reemplazar = array('a', 'e', 'i', 'o', 'u', 'n');
        $bloque_img = str_replace($buscar, $reemplazar, $bloque_img);

        // Reemplazar espacios por guiones
        $bloque_img = str_replace(' ', '-', $bloque_img);

        $bloque_img = "$bloque_img.png";

        // Agrega cada pregunta como un array asociativo al array $preguntas_array
        $preguntas_array[] = array(
            "ID" => $pregunta->ID,
            "enunciado" => $enunciado,
            "opcion_correcta" => $respuesta,
            "opcion_err1" => $opcion2,
            "opcion_err2" => $opcion3,
            "dificultad" => $dificultad,
            "asignatura" => $asignatura,
            "bloque" => $bloque,
            "categoria" => $categoria,
            "bloque_img" => $bloque_img,
            "nivel" => $nivel,
            "grado" => $grado,
        );

        // Agregar categorias al array
        if (!in_array($categoria, $categorias_array)) {
            $categorias_array[] = $categoria;
        }
    }

    if(count($preguntas_array) < 0) $response = 'No fue encontrada ninguna pregunta con estos parámetros';

    echo json_encode(array(
        'response' => $response,
        'preguntas' => $preguntas_array,
        'categorias' => $categorias_array
    ));
    
}

?>