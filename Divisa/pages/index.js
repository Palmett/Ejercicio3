
document.addEventListener('DOMContentLoaded', () => {
    let valorInput = document.getElementById('Valor');
    let primeraSelect = document.getElementById('Primera');
    let segundaSelect = document.getElementById('Segunda');
    let resultado = document.getElementById('Resultado');

    
    let convertirDivisas = () => {
        let valor = parseFloat(valorInput.value);
        let monedaOrigen = primeraSelect.value;
        let monedaDestino = segundaSelect.value;

        
        resultado.textContent = '';

        
        if (isNaN(valor) || valor <= 0) {
            resultado.textContent = "Ingrese un valor válido.";
            return;
        }

        let resultadoConversion = 0;

       
        if (monedaOrigen === "Col" && monedaDestino === "EEUU") {
            resultadoConversion = valor * 0.000245; 
        } else if (monedaOrigen === "EEUU" && monedaDestino === "Col") {
            resultadoConversion = valor / 0.000245;
        } else {
            resultado.textContent = "Seleccione monedas diferentes para realizar la conversión.";
            return;
        }

        
        resultado.textContent = `Resultado: ${resultadoConversion.toFixed(2)} ${monedaDestino === "EEUU" ? 'Dólares' : 'Pesos'}`;
    };


    valorInput.addEventListener('keyup', convertirDivisas);
    primeraSelect.addEventListener('change', convertirDivisas);
    segundaSelect.addEventListener('change', convertirDivisas);
});