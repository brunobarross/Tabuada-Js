function tabuada() {
  var numero = window.document.getElementById('numero');
  var  resultado = window.document.getElementById('lista');

  if(numero.value == 0  ) {
    alert('Precisamos de um número para te mostrar a tabuada!'); 

  } else {
    var num = Number(numero.value);
    resultado.innerHTML="";

    for(var i = 1; i <= 10; i++) {
    var addOption = document.createElement('option'); //CRIA UM ELEMENTO OPTION 
    resultado.appendChild(addOption); //ADICIONA ELE DENTRO DA LIST SELECT
    addOption.setAttribute('value', 'multiplica') //ADICIONA UM VALUE COM MULTIPLICAR DE VALOR
    var multiplicador = num * i; // MULTIPLICA NUMERO PELO VALOR DE I
    var texto = document.createTextNode(`${num} X ${i} = ${multiplicador}`)
    addOption.appendChild(texto); //ADICIONA TEXTO AO OPTION
      
    }
    

  }

}