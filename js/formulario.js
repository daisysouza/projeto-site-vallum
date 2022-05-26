$('#contactForm-1').submit(function(){

    var nome = $('#name-2');
    var email = $('#email-1');
    var mensagem = $('#mensagem-1');
    var erro = $('.alert');
    var campo = $('#campo-erro');

    erro.addClass('d-none'); //removendo o elemento da tela sempre que tentar submeter o formulário
    $('.is-invalid').removeClass('is-invalid');


    //valida o campo nome
    if (nome.val() == '') {
        erro.removeClass('d-none');
        campo.html('nome'); //nome do campo não preenchido!
        nome.focus();
        nome.addClass('is-invalid');
        return false;
}
    //valida o campo email
    if (email.val() == '') {
        erro.removeClass('d-none');
        campo.html('email'); //nome do campo não preenchido!
        email.focus();
        email.addClass('is-invalid');
        return false;
}

 //valida o campo mensagem
 if (mensagem.val() == '') {
    erro.removeClass('d-none');
    campo.html('mensagem'); //nome do campo não preenchido!
    mensagem.focus();
    mensagem.addClass('is-invalid');
    return false;
}

//se preenchimento ok, pode enviar os dados!
return true;
});