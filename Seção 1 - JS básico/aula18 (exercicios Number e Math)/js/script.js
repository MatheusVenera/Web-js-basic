let numero = Number(prompt('Digite um número: (se não digitar, será 0)'));
        document.getElementById('titulo').innerHTML += `${numero}`;
        document.getElementById('id-texto').innerHTML += `<p> Raiz quadrada: <strong> ${Math.pow(numero, 2)}</strong> </p>`;
        document.getElementById('id-texto').innerHTML += `<p> ${numero} é inteiro?: <strong>${Number.isInteger(numero)}</strong></p`;
        document.getElementById('id-texto').innerHTML += `<p> É NaN (not a number): <strong> ${Number.isNaN(numero)}</strong></p`;
        document.getElementById('id-texto').innerHTML += `<p> Arredondado para baixo: <strong>${Math.floor(numero)}</strong></p`;
        document.getElementById('id-texto').innerHTML += `<p> Arredondado para cima: <strong>${Math.ceil(numero)}</strong></p`;
        document.getElementById('id-texto').innerHTML += `<p> Com duas casas decimais: <strong>${numero.toFixed(2)}</strong></p`;