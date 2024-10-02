/*document.addEventListener('DOMContentLoaded', function() {
    document.getElementById('btn-buscar-cep').addEventListener('click', function() {
        // AJAX - Asynchronous JavaScript and XML

        const xhttp = new XMLHttpRequest();
        const cep = document.getElementById('cep').value;
        const endpoint = `https://viacep.com.br/ws/${cep}/json`;


        xhttp.open('GET', endpoint);
        xhttp.send();

        //https://viacep.com.br/ws/123123123/json
    })
})*/

$(document).ready(function() {
    $('#btn-buscar-cep').click(function() {
        const cep = $('#cep').val();
        const endpoint = `https://viacep.com.br/ws/${cep}/json`;
        const botao = $(this);
        $(botao).find('i').addClass('d-none');
        $(botao).find('span').removeClass('d-none');



        $.ajax(endpoint).done(function(resposta) {
            const logradouro = resposta.logradouro;
            const bairro = resposta.bairro;
            const cidade = resposta.localidade;
            const estado = resposta.uf;
            const endereco = `${logradouro}, ${bairro} - ${cidade} - ${estado}`;
            $('#endereco').val(endereco);

            $(botao).find('i').removeClass('d-none');
            $(botao).find('span').addClass('d-none');
        })
    })
})