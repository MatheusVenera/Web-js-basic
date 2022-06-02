function calculoIMC() {
    let form = document.querySelector('#form');
    let peso = form.querySelector('#peso');
    let altura = form.querySelector('#altura');
    let divResultado = document.querySelector('#resultadoCalculoIMC');
    function recebeEventoForm(evento) {
        evento.preventDefault();
        let imc = peso.value / (altura.value*altura.value);
        console.log(imc);
        if (imc <= 13.5) { 
            divResultado.style.display = 'block';
            divResultado.innerHTML = `Seu IMC é ${imc} (muito abaixo do normal)`;
            divResultado.style.backgroundColor = 'crimson';
        } else if (imc >= 13.6 && imc <= 18.4) {
            divResultado.style.display = 'block';
            divResultado.innerHTML = `Seu IMC é ${imc} (abaixo do normal)`;
            divResultado.style.backgroundColor = 'gold';
        } else if (imc >= 18.5 && imc <= 24.9) {
            divResultado.style.display = 'block';
            divResultado.innerHTML = `Seu IMC é ${imc} (peso normal)`;
            divResultado.style.backgroundColor = 'aquamarine';
        } else if (imc >= 25 && imc <= 29.9) {
            divResultado.style.display = 'block';
            divResultado.innerHTML = `Seu IMC é ${imc} (sobrepeso)`;
            divResultado.style.backgroundColor = 'gold';
        } else if (imc >= 30 && imc <= 34.9) {
            divResultado.style.display = 'block';
            divResultado.innerHTML = `Seu IMC é ${imc} (obesidade grau 1)`;
            divResultado.style.backgroundColor = 'lightcoral';
        } else if (imc >= 35 && imc <= 39.9) {
            divResultado.style.display = 'block';
            divResultado.innerHTML = `Seu IMC é ${imc} (obesidade grau 2)`;
            divResultado.style.backgroundColor = 'crimson';
        } else if (imc >= 40) {
            divResultado.style.display = 'block';
            divResultado.innerHTML = `Seu IMC é ${imc} (obesidade grau 3)`;
            divResultado.style.backgroundColor = 'red';
        } else {
            divResultado.style.display = 'block';
            divResultado.innerHTML = `Algo de errado aconteceu, tente novamente`;
            divResultado.style.backgroundColor = 'red';
        }
        
    };
    form.addEventListener('submit', recebeEventoForm);
    
};
calculoIMC();