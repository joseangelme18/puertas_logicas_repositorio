// Función para calcular los resultados de las puertas lógicas
function calcularResultados() {
    // Obtener los valores de las casillas de verificación
    const verdadero = document.getElementById('verdadero').checked;
    const falso = document.getElementById('falso').checked;

    // Realizar las operaciones lógicas
    const resultadoAND = verdadero && falso;
    const resultadoOR = verdadero || falso;
    const resultadoXOR = verdadero !== falso; // XOR es verdadero si uno es true y el otro es false

    // Mostrar los resultados en los elementos HTML
    document.getElementById('resultadoAND').innerText = resultadoAND ? 'Verdadero' : 'Falso';
    document.getElementById('resultadoOR').innerText = resultadoOR ? 'Verdadero' : 'Falso';
    document.getElementById('resultadoXOR').innerText = resultadoXOR ? 'Verdadero' : 'Falso';

    // Agregar los resultados a la lista de resultados
    const lista = document.getElementById('listaResultados');
    const nuevaListaItem = document.createElement('li');
    nuevaListaItem.textContent = `AND: ${resultadoAND ? 'Verdadero' : 'Falso'}, OR: ${resultadoOR ? 'Verdadero' : 'Falso'}, XOR: ${resultadoXOR ? 'Verdadero' : 'Falso'}`;
    lista.appendChild(nuevaListaItem);
}

// Función para resetear los resultados
function resetearResultados() {
    // Limpiar la lista de resultados
    const lista = document.getElementById('listaResultados');
    lista.innerHTML = '';

    // Limpiar los resultados visibles de AND, OR, XOR
    document.getElementById('resultadoAND').innerText = '-';
    document.getElementById('resultadoOR').innerText = '-';
    document.getElementById('resultadoXOR').innerText = '-';
}
