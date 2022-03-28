let categorias = [
  "Bebidas",
  "Temperos",
  "Laticinios",
  "Farinaceos",
  "Doces",
  "Salgados",
  "Açougue",
  "Limpeza",
  "Padaria",
  "Enlatados",
  "Molhos",
  "Cereais",
  "Frios",
  "Congelados",
];

let divCategorias = "";

divCategorias += `<p class='label-categorias'> 3º Categoria: </p> 

<select name='categoriasSelect' id='categoriasSelect'>`;

for (let item in categorias) {
  divCategorias += `
  <option value='"${categorias[item]}"'>
  ${categorias[item]}
  </option>
  `;
}

divCategorias += "</select>";

document.getElementById("divCategorias").innerHTML = divCategorias;

let listaDeCompras = [];

function validaCampoPreenchido() {
  let inputProduto = document.querySelector("#produto");
  let inputQuantidade = document.querySelector("#quantidade");
  let button = document.querySelector("#adicionar-itens");
  inputProduto.addEventListener("change", stateHandle);
  inputQuantidade.addEventListener("change", stateHandle);

  function stateHandle() {
    if (
      inputProduto.value === "" ||
      inputQuantidade.value === "" ||
      !inputProduto.value.trim()
    ) {
      button.disabled = true;
    } else {
      button.disabled = false;
    }
  }
}
validaCampoPreenchido();

function validaLista() {
  let button = document.querySelector("#finalizar");
  let remover = document.querySelector("#remover");
  if (listaDeCompras.length === 0) {
    button.disabled = true;
    remover.disabled = true;
  } else {
    button.disabled = false;
    remover.disabled = false;
  }
}

function limparCampos() {
  document.getElementById("produto").value = "";
  document.getElementById("quantidade").value = "";
  let button = document.querySelector("#adicionar-itens");
  button.disabled = true;
  let erro = document.getElementById("erro");
  erro.style.display = "none";
}

function jaExiste(dadosNome, quantidade) {
  return listaDeCompras.some(function (e) {
    return e.produto === dadosNome && e.quantidade === quantidade;
  });
}

function adicionarProduto() {
  let produto = document.getElementById("produto").value;
  let quantidade = document.getElementById("quantidade").value;
  let categoria = document.getElementById("categoriasSelect").value;
  let erro = document.getElementById("erro");

  if (produto !== "" || quantidade !== "") {
    if (!jaExiste(produto, quantidade)) {
      let objetoProduto = {
        produto: produto,
        quantidade: quantidade,
        categoria: categoria,
      };

      listaDeCompras.push(objetoProduto);
      validaLista();
      limparCampos();
      erro.style.display = "none";
      listaAteAgora(categoria);

    } else {
      erro.innerHTML =
        "Ja existe esse produto com a mesma quantidade, insira um produto diferente ou o mesmo so que de quantidade diferente";
      erro.style.color = "red";
      erro.style.display = "block";
    }
  }
}

function listaAteAgora(categoriaSelecionada){
  let listaAteAgora = document.querySelector("#lista-ate-agora");
  for (let i in listaDeCompras) {
    listaAteAgora.innerHTML = `<ul> ${listaDeCompras[i].categoria} :</ul>`;
    for (let j in listaDeCompras) {
      if (listaDeCompras[j].categoria === categoriaSelecionada){
      listaAteAgora.innerHTML += `<li> ${listaDeCompras[j].produto} : ${listaDeCompras[j].quantidade} </li>`;
    }
  }
  }
}

function removerProduto() {
  let produto = document.getElementById("produto").value;
  let quantidade = document.getElementById("quantidade").value;
  let categoria = document.getElementById("categoriasSelect").value;
  if (produto !== "" || quantidade !== "") {
    if (jaExiste(produto, quantidade)) {
      for (let i in listaDeCompras) {
        if (
          listaDeCompras[i].produto === produto &&
          listaDeCompras[i].quantidade === quantidade
        ) {
          listaDeCompras.splice(i, 1)[0];
          listaAteAgora(categoria)
        }
      }
    }
  }
}

function exibirLista() {
  let htmlCode = `<h3>Lista de Compras:</h3>`;

  let categoriasSelecionadas = [];

  for (let k in listaDeCompras) {
    if (!categoriasSelecionadas.includes(listaDeCompras[k].categoria))
      categoriasSelecionadas.push(listaDeCompras[k].categoria);
  }

  for (let i in categoriasSelecionadas) {
    htmlCode += `<ul> ${categoriasSelecionadas[i]} :</ul>`;
    for (let j in listaDeCompras) {
      if (listaDeCompras[j].categoria == categoriasSelecionadas[i]) {
        htmlCode += `<li> ${listaDeCompras[j].produto} : ${listaDeCompras[j].quantidade} </li>`;
      }
    }
  }
  document.getElementById("content").innerHTML = ``;
  document.getElementById("content").innerHTML = htmlCode;
}
