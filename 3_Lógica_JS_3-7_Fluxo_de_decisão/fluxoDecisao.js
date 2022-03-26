let setaContinue = `      
<div class="div-svg">
    <?xml version="1.0" ?>
        <svg
        id="down-arrow-low-below"
        style="enable-background: new 0 0 8.706 15.698"
        version="1.1"
        viewBox="0 0 5 60"
        xml:space="preserve"
        xmlns="http://www.w3.org/2000/svg"
        xmlns:xlink="http://www.w3.org/1999/xlink"
        width="200px"
        height="200px"
        >
        <polygon
            fill="none"
            stroke="#fff"
            stroke-width="1"
            class="seta-poly"
            points="8,10.646 4.853,13.786 4.853,0 3.853,0 3.853,13.786 0.706,10.646 0,11.354 4.353,15.698 8.706,11.354 "
        />
        <text class="continue" x="-11" y="25" fill="#fff">Continue</text>
        </svg>
</div>
`;

let tecnologias = [];

function validaCampoPreenchido() {
  let input = document.querySelector("#nome");
  let button = document.querySelector("#button-nome");
  input.addEventListener("change", stateHandle);

  function stateHandle() {
    if (input.value === "") {
      button.disabled = true;
    } else {
      button.disabled = false;
    }
  }
}

validaCampoPreenchido();

function mostrarGame(event) {
  let input = document.querySelector("#nome").value;

  let nomeDoUsuario = document.getElementById("nome-do-usuario");
  nomeDoUsuario.innerHTML = `Ola <span class='span-efects'> ${input} </span>, agora sim podemos começar!!! 😄`;

  let areaLinguagens = document.getElementById("area-linguagens");
  areaLinguagens.style.display = "flex";

  let buttonResetar = document.getElementById("button-resetar");
  buttonResetar.style.display = "flex";
  areaLinguagens.innerHTML += setaContinue;

  //   Remove o campo de inserir o nome
  event.target.parentNode.parentNode.children[1].remove();
}
// Back ou front
function qualCaminho(caminho) {
  let linguagensDasAreas = document.getElementById("linguagens-das-areas");
  let linguagemFront = document.getElementById("front-selecionada");
  let linguagemBack = document.getElementById("back-selecionada");

  let buttonFront = document.getElementById("button-front");
  buttonFront.disabled = true;
  let buttonBack = document.getElementById("button-back");
  buttonBack.disabled = true;
  if (caminho === "front") {
    linguagensDasAreas.style.display = "flex";
    linguagemFront.style.display = "flex";
  } else {
    linguagensDasAreas.style.display = "flex";
    linguagemBack.style.display = "flex";
  }
  linguagensDasAreas.innerHTML += setaContinue;
}
// Back == aprender C# ou aprender Java.
// Front == aprender React ou aprender Vue.
function qualLinguagem(linguagem) {
  let especializacao = document.getElementById("especializacao");
  especializacao.style.display = "flex";
  especializacao.innerHTML += setaContinue;

  if (linguagem === "react" || linguagem === "vue") {
    let buttonOpcoesLinguagensReact = document.querySelector(
      ".button-opcoes-linguagens-react"
    );
    buttonOpcoesLinguagensReact.disabled = true;
    let buttonOpcoesLinguagensVue = document.querySelector(
      ".button-opcoes-linguagens-vue"
    );
    buttonOpcoesLinguagensVue.disabled = true;
    seEspecializar(linguagem, "front-end");
    tecnologias.push({
      name: linguagem,
    });
  } else if (linguagem === "c#" || linguagem === "java") {
    let buttonOpcoesLinguagensC = document.querySelector(
      ".button-opcoes-linguagens-c"
    );
    buttonOpcoesLinguagensC.disabled = true;
    let buttonOpcoesLinguagensJava = document.querySelector(
      ".button-opcoes-linguagens-java"
    );
    buttonOpcoesLinguagensJava.disabled = true;
    seEspecializar(linguagem, "back-end");
    tecnologias.push({
      name: linguagem,
    });
  }
}

// Perguntar se ele quer se espcializar na area escolhida
// ou seguir se desenvolvendo para se tornar fullstack
function seEspecializar(linguagem, caminho) {
  let especializarFullStack = document.getElementById("especializar-fullstack");
  especializarFullStack.style.display = "flex";

  let escolherAespecializacao = document.getElementById(
    "escolher-a-especializacao"
  );
  escolherAespecializacao.innerHTML = `Muito Bacana, vejo que você selecionou o caminho <span class='span-efects'>  ${caminho}  </span> e a <span class='span-efects'>  linguagem ${linguagem} </span> , mas depois deste passo, você pretende continuar estudando para se especializar em <span class='span-efects'>  ${caminho} </span> ou gostaria de seguir rumo à uma carreira <span class='span-efects'> full-stack? </span>`;

  if (caminho === "front-end") {
    let especializarFront = document.getElementById("especializar-front");
    especializarFront.style.display = "flex";
  } else if (caminho === "back-end") {
    let especializarBack = document.getElementById("especializar-back");
    especializarBack.style.display = "flex";
  }
}

function caminhoSelecionado(caminho) {
  let especializarFront = document.getElementById("especializar-front");
  especializarFront.disabled = true;
  let especializarBack = document.getElementById("especializar-back");
  especializarBack.disabled = true;
  let especializarFullStack = document.getElementById("especializar-fullstack");
  especializarFullStack.disabled = true;

  if (caminho === "front-end") {
    mensagemListaDelinguagens(caminho);
  } else if (caminho === "back-end") {
    mensagemListaDelinguagens(caminho);
  } else {
    mensagemListaDelinguagens(caminho);
  }
}

// Uma lista das linguagens que ele quer se especializar ou de conhecer
//  pode responder N tecnologias um loop com while, Sempre perguntar "Tem mais alguma tecnologia que você gostaria de aprender?"
// Apos clicar em concluir tudo desativa e so pode jogar quando clicar em reset
function validaCampoTec() {
  let inputTecnologia = document.querySelector("#linguagem");
  let buttonTecnologia = document.querySelector("#button-tecnologia");
  inputTecnologia.addEventListener("change", stateHandle);

  function stateHandle() {
    if (inputTecnologia.value === "") {
      buttonTecnologia.disabled = true;
    } else {
      buttonTecnologia.disabled = false;
    }
  }
}
function mensagemListaDelinguagens(caminho) {
  let listaDeLinguagens = document.getElementById("lista-de-linguagens");

  listaDeLinguagens.innerHTML = `
  
  <h2 class="mensagem-lista-de-linguagens">Muito bom, vejo que você optou por se especializar em <span class='span-efects'> ${caminho} <span class='span-efects'></h2>
  
  <label> Agora informe mais tecnologias que você gostaria de aprender:  </label>
  <input
  type="text"
  name="linguagem"
  id="linguagem"
  placeholder="linguagem"
  />
  <button disabled onclick="adicionarTecnologia()" id="button-tecnologia">Adicionar tecnologia</button>
  <div class="lista" id="lista">
    <p class="nao-existe" id="nao-existe"></p>
    <p class="esse-ja-existe" id="esse-ja-existe"></p>
    <p class="lista-nome" id="lista-nome"></p>
  </div>

  `;
  validaCampoTec();
}

function adicionarTecnologia() {
  let tecnologia = document.getElementById("linguagem").value;
  let esseJaExiste = document.querySelector("#esse-ja-existe");
  let naoExiste = document.querySelector("#nao-existe");
  let lista = document.querySelector("#lista-nome");
  if (!jaExiste(tecnologia)) {
    tecnologias.push({
      name: tecnologia,
    });
    naoExiste.style.display = "flex";
    esseJaExiste.style.display = "none";
    naoExiste.innerHTML = `Tecnologia <span class='span-efects'>  ${tecnologia}  </span> adicionada na lista!!! 😄`;
    naoExiste.style.color = "green";
    lista.innerHTML = ``;
    for (let tec of tecnologias) {
      lista.innerHTML += `Lista ate agora:  <span class='span-efects'> ${tec.name} </span> </br>`;
    }
  } else {
    esseJaExiste.innerHTML = `Já existe essa linguagem na lista`;
    esseJaExiste.style.color = "red";
    esseJaExiste.style.display = "flex";
    naoExiste.style.display = "none";
  }
}

function jaExiste(dadosNome) {
  return tecnologias.some(function (e) {
    return e.name === dadosNome;
  });
}
function resetar() {
  location.reload();
}
