function calcularResultados() {
    // Obtener los valores de las casillas de verificación
    const verdadero = document.getElementById('verdadero').checked;
    const falso = document.getElementById('falso').checked;

    // Realizar las operaciones lógicas
    const resultadoAND = verdadero && falso;
    const resultadoOR = verdadero || falso;
    const resultadoXOR = verdadero !== falso; // XOR es verdadero si uno es true y el otro es false

    // Mostrar los resultados en el HTML con los símbolos correspondientes
    document.getElementById('resultadoAND').innerHTML = resultadoAND ? '<span class="verdadero">✔</span>' : '<span class="falso">✘</span>';
    document.getElementById('resultadoOR').innerHTML = resultadoOR ? '<span class="verdadero">✔</span>' : '<span class="falso">✘</span>';
    document.getElementById('resultadoXOR').innerHTML = resultadoXOR ? '<span class="verdadero">✔</span>' : '<span class="falso">✘</span>';
}
