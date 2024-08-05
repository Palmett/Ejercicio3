document.getElementById("Calcular").addEventListener("click", () => {
    
    let peso = parseFloat(document.getElementById("Peso").value);
    let altura = parseFloat(document.getElementById("Altura").value);

    
    if (isNaN(peso) || isNaN(altura) || peso <= 0 || altura <= 0) {
        alert("Por favor, ingrese valores válidos para peso y altura.");
        return;
    }

    
    altura = altura / 100;

    let imc = peso / (altura * altura);

    let resultado = `Tu IMC es ${imc.toFixed(2)}`
     
    if (imc < 18.5) {
        resultado += " (Bajo peso)";
    } else if (imc >= 18.5 && imc < 24.9) {
        resultado += " (Peso normal)";
    } else if (imc >= 25 && imc < 29.9) {
        resultado += " (Sobrepeso)";
    } else {
        resultado += " (Obesidad)";
    }
    
    alert(resultado)


    
    
});







