<p align="center">
  <img height="100" src="https://github.com/PedrohvFernandes/7daysofcode/blob/main/screenshot/Layout.png">
  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
</p>

Você chegou no terceiro dia já!

Continue assim, Pedro Henrique Vieira Fernandes!

Aliás, o que você achou do desafio de ontem? Trouxe a minha ideia de solução lá no final deste e-mail e vou adorar saber a diferença para a sua.
Você alguma vez já jogou algum jogo que te desse mais de uma escolha e, dependendo do que você escolhesse, o destino do personagem seria totalmente diferente?

Hoje você vai desenvolver um exemplo assim com Javascript!

Eu quero que você trabalhe com estruturas de controle de fluxo. Esse jeito complicado de falar só quer dizer que, assim como nos jogos, a história que você montar precisa se adaptar às respostas dadas por quem está jogando.

Para isso, você vai precisar de algumas estruturas capazes de alterar o fluxo da aplicação, como for, while, if e else. Todas essas conseguem cumprir esse objetivo, dada uma certa condição.

O if e o else, que eu já te mostrei nos últimos dias, são capazes de criar ramificações dentro da aplicação para que seja tomada uma ou outra ação, dependendo da condição fornecida.

Os loops (como for e while) são capazes de fazer uma tarefa repetitiva se transformar em poucas linhas de código, independente de quantas vezes você precisar repetir aquela tarefa.

Seu desafio de hoje é criar os destinos possíveis de um jogo, em que o usuário consiga escolher:

1. Se quer seguir para área de Front-End ou seguir para a área de Back-End.

2. Caso esteja na área de Front-End, se quer aprender React ou aprender Vue. Caso esteja na área de Back-End, poderá aprender C# ou aprender Java.

3. Depois, independente das escolhas anteriores, o usuário poderá escolher entre seguir se especializando na área escolhida ou seguir se desenvolvendo para se tornar Fullstack. Você deve exibir na tela uma mensagem específica para cada escolha.

4. Por fim, pergunte quais são as tecnologias nas quais a pessoa gostaria de se especializar ou de conhecer. Aqui, a pessoa pode responder N tecnologias, uma de cada vez. Então, enquanto ela continuar respondendo ok para a pergunta: "Tem mais alguma tecnologia que você gostaria de aprender?", continue apresentando para ela o Prompt, para que ela complete o nome da tecnologia em questão. E, logo depois, apresente uma mensagem comentando algo sobre a linguagem inserida.

O importante é que a pessoa que estiver jogando possa sempre escolher qual decisão tomar para conseguir aprender e se desenvolver na área de programação.

Além disso, também é essencial que, ao final do jogo, ela possa inserir quantas tecnologias quiser na lista de aprendizado.

# DICA
Já deu pra ter uma ideia de como fazer toda essa historinha acontecer, né? Principalmente lembrando como utilizar as estruturas condicionais e loops em Javascript!

Caso você ainda não saiba como imprimir e receber valores nas páginas web com HTML e CSS, você poderá usar console.log, prompt e alert para desenvolver o seu jogo, como você já viu nos últimos dias.

Lembre-se que você pode sempre personalizar o jogo da forma que quiser.

# EXTRA
Você já viu estruturas condicionais em Javascript anteriormente, mas vou recapitular. O if é usado para verificar se uma determinada condição é verdadeira.

Exemplo:

if (cidade === "Roma"){
    // mostre a foto do "Coliseu"
}

Além disso, ele também pode ser usado com um ou vários else if, que irá saber que a condição anterior era falsa e vai verificar se a atual é verdadeira.

Por fim, existe o else sozinho, sem nenhuma condição, e o código dentro dele será executado sempre que todas as condições encadeadas anteriormente forem falsas.

if (cidade === "Roma"){
    // mostre a foto do "Coliseu"
}
else if (cidade === "Paris"){
    // mostre a foto do "Torre Eiffel"
}
else {
    // dê a resposta "Você não digitou nenhuma cidade válida"
}

Além disso, para a parte 4, você precisará de uma estrutura de repetição (loop) como o while. Para usá-lo, é bem fácil:

let idade = 0;

while (idade < 8) {
    // algum comando para imprimir a idade
    idade = idade + 1;
}

Esse código começará com a idade em zero e, ao entrar no while, esse valor será impresso e, logo depois, incrementado em 1.

Ou seja, depois da primeira vez que ele passar, o valor da idade será igual a 1, que é menor que 8, e por isso, a condição do while terá um resultado verdadeiro e ele continuará a ser executado.

Ele só vai parar quando o valor da variável idade chegar a 8, que não é menor que 8, e por isso a condição do while terá um resultado falso.

Você também pode aprender mais sobre o while nesse site.

# RESPOSTA DO DESAFIO DO DIA 2
<a href='https://gist.github.com/fabriciocarraro/bc662a319215f1d2695444cba564ca5a?utm_source=ActiveCampaign&utm_medium=email&utm_content=%237DaysOfCode+-+Lógica+JS+3%2F7%3A+Fluxo+de+decisão&utm_campaign=%5BALURA+%237days+Of+Code%5D+%28Lógica+de+Programação+-+JavaScript%29+Dia+3%3A+Fluxo+de+decisão'>  
- Solução do Dia 2 
</a>

<a href='https://gist.github.com/fabriciocarraro/7a5279e57be481f990ae54daeb077078?utm_source=ActiveCampaign&utm_medium=email&utm_content=%237DaysOfCode+-+Lógica+JS+3%2F7%3A+Fluxo+de+decisão&utm_campaign=%5BALURA+%237days+Of+Code%5D+%28Lógica+de+Programação+-+JavaScript%29+Dia+3%3A+Fluxo+de+decisão'>
- Solução do Dia 2 (com desafio Opcional)
</a>

Já estamos chegando na metade desta jornada, hein?

Te vejo amanhã, no quarto dia de desafio, e claro, não se esqueça de compartilhar os seus códigos no seu GitHub e nas suas redes sociais com a hashtag #7DaysOfCode, e também com #feedback7DoC caso você precise de alguma ajuda.

Até mais!

Rafa Ballerini
Instrutora Front-End na Alura