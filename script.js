function clicar(){
    var a = window.document.getElementById('area');
    a.innerText = 'Boa Tarde!'
}
function entrar(){
    var a = window.document.getElementById('area');
    area.innerText = 'Hora do lanche!';
    area.style.background = 'red';
}
function sair(){
    var area = window.document.getElementById('area');
    area.innerText = 'Acabou o lanche';
    area.style.background = 'blue';
}

function somar(){
    var tn1 = document.getElementById('txtn1');
    var tn2 = document.getElementById('txtn2');
    var res = document.getElementById('res');
    var n1 = Number(tn1.value);
    var n2 = Number(tn2.value);
    

    var s = n1 + n2;


    res.innerHTML = `A soma entre ${n1} e ${n2} é igual a ${s}`;
}