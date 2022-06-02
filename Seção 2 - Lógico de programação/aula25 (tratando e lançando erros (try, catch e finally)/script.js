try {
    console.log(a); //variavel n criada, gera erro
    console.log('Abri um arquivo');
    console.log('Manipulei o arquivo e gerou erro');
    console.log('Fechei o arquivo');
    //O catch só é executado quando há erro
} catch (error) {
    console.log('Tratando o erro');
    //Dando erro ou não, o finally é sempre executado
} finally {
    console.log('FINALLY: eu sempre sou executado');
};

function retornaHora(data) {
    if (data && !(data instanceof Date)) {
        throw new TypeError('Esperando instância de Date.');
    };

    if (!data) {
        data = new Date();
    };

    return data.toLocaleTimeString('pt-BR', {
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit',
        hour12: false
    });
};
try {
    const hora = retornaHora();
    console.log(hora);
} catch (error) {
    // Tratar erro
} finally {
    console.log('Tenha um bom dia.')
};