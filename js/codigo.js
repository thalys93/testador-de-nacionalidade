
// Função de envio 
// Dentro do html possue a função no botão de input

function envia() {
  //recebe dados do HTML
  var paises = window.document.querySelector("input#pais");
  var nome = window.document.querySelector("input#nome");

  //  Var que Mostra o Resultado na Tela
  var res = window.document.querySelector("div#res");


  // Converte dados em valores .value
  var p1 = paises.value;
  var n1 = nome.value;


  // Condição Que Mostra as Informações no HTML
  if (p1 == "Brasil") {
    res.innerHTML = `<br> Olá <strong>${n1}</strong> ! Do <strong>${p1}</strong> Sendo assim sua Nacionalidade é <strong>Brasileira!!</strong>`;
  } else {
    res.innerHTML = `<br> Olá <strong>${n1}</strong> ! Da <strong>${p1}</strong> Sendo assim sua Nacionalidade é <strong>Estrangeira!!</strong>`;
  }
}
// Final da Função