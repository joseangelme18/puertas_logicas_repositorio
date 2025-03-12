function calcularResultados() {
    // Obtener los valores de las casillas de verificación
    const verdadero = document.getElementById('verdadero').checked;
    const falso = document.getElementById('falso').checked;

    // Realizar las operaciones lógicas
    const resultadoAND = verdadero && falso;
    const resultadoOR = verdadero || falso;
    const resultadoXOR = verdadero !== falso; // XOR es verdadero si uno es true y el otro es false

    // Mostrar los resultados en el HTML
    document.getElementById('resultadoAND').innerText = resultadoAND ? 'Verdadero' : 'Falso';
    document.getElementById('resultadoOR').innerText = resultadoOR ? 'Verdadero' : 'Falso';
    document.getElementById('resultadoXOR').innerText = resultadoXOR ? 'Verdadero' : 'Falso';
}
