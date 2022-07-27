function calcularImc() {
    let altura = document.getElementById('altura').value;
    let peso   = document.getElementById('peso').value;
    let result = document.getElementById('result');
    let imc    = document.getElementById('imc');

  
    altura = altura.replace(',' , '.');
    peso   = peso.replace(',' , '.');

    // calcular imc
    let calculo = peso / (altura * altura);

  
    calculo = calculo.toFixed(2);

 
    result.innerHTML = calculo.replace('.' , ',') + '<br>';

    if (calculo < 18.5)
        imc.innerHTML = "Você está abaixo do peso.";
    else if (calculo >= 18.5 && calculo <= 24.9)
        imc.innerHTML = "Você está no peso ideal.";
    else if (calculo >= 25 && calculo <= 29.9)
        imc.innerHTML = "Você está acima do peso.";
    else if (calculo >= 30 && calculo <= 40)
        imc.innerHTML = "Você está com obesidade.";
    else 
        imc.innerHTML = "Você está com obesidade mórbida.";    
}

function resetar() {
    document.getElementById("result").innerHTML = "";
    document.getElementById("imc").innerHTML = "";
}