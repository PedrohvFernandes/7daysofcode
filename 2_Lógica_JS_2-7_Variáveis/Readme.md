<p align="center">
  <img height="100" src="https://github.com/PedrohvFernandes/7daysofcode/blob/main/screenshot/Layout.png">
  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
</p>

E aí, Pedro Henrique Vieira Fernandes, conseguiu resolver o desafio de ontem?

Tenho certeza que sim! Mas, para te deixar mais confiante, vou deixar lá embaixo, no final deste e-mail, como eu resolveria o desafio, ok?
Sabe quando você se cadastra em um site e, logo em seguida, quando faz o seu login, ele já te chama pelo seu nome? É isso que você vai fazer no desafio de hoje!

Quando você cria algum sistema, site ou aplicativo, é comum querer colocar alguns toques personalizados para tornar a experiência na sua aplicação mais rica e dinâmica.

Fazer isso através da programação pode não ser uma tarefa muito fácil. Dependendo do nível de customização que você quiser implementar, a quantidade de código que você precisará escrever pode ser imensa.

Mas é claro que você pode começar de uma maneira mais simples. Para isso, o importante é entender como capturar e armazenar valores dentro de variáveis. E é nisso que eu vou te ajudar hoje!

Variáveis são os blocos básicos de construção de qualquer sistema e são essenciais para processar qualquer tipo de informação, seja ela de uma pessoa logada no sistema ou mesmo para exibir detalhes de produtos em um catálogo de e-commerce.

Por isso, hoje, eu vou te ensinar a desenvolver um programa simulando um desses sites. Ele deve pedir para o usuário responder 3 perguntas:

- Qual o seu nome?
- Quantos anos você tem?
- Qual linguagem de programação você está estudando?

À medida que as perguntas forem sendo feitas, a pessoa que estiver usando o programa deve responder cada uma delas.

No final, o sistema vai exibir a mensagem:

"Olá [nome], você tem [idade] anos e já está aprendendo [linguagem]!"

Note que cada informação entre [ ] é uma das respostas dadas pela pessoa.

# EXERCÍCIO OPCIONAL
Se você quiser se aprofundar no assunto de hoje, eu tenho mais um exercício para você.

Mas ele é 100% opcional.

Você vai complementar o código para que, depois de exibir a mensagem anterior, o programa pergunte:

Você gosta de estudar [linguagem]? Responda com o número 1 para SIM ou 2 para NÃO.

E aí, dependendo da resposta, ele deve mostrar uma das seguintes mensagens:

1 > Muito bom! Continue estudando e você terá muito sucesso.
2 > Ahh que pena... Já tentou aprender outras linguagens?

# DICA
Você pode adicionar quantas perguntas quiser, e pode aproveitar as respostas dos usuários na mensagem que será exibida.

Para imprimir e receber valores, você pode tanto usar console.log, prompt e alert, quanto usar HTML e CSS caso já tenha conhecimento nessas duas tecnologias.

Você pode usar a estrutura condicional if para resolver o Exercício Opcional. Algo como:

if (resposta == 1){
    // dê a resposta positiva
}
if (resposta == 2){
    // dê a resposta negativa
}

# EXTRA
Tanto o alert() quanto o prompt() são usados para criar caixas de diálogo e interagir com o usuário, mas eles são diferentes entre si.

O alert() é usado para mostrar uma mensagem simples ao usuário.

Exemplo:

alert("Olá, pessoal!");

Já o prompt() precisa que o usuário insira algum valor, que você poderá manipular.

Exemplo:

const cidade = prompt("Digite a sua cidade:");
const msg = `Você é de ${cidade}!`;
alert(msg);

Teste os códigos acima e tente adaptá-los ao seu programa!

# RESPOSTA DO DESAFIO DO DIA 1

Você pode olhar no Gist abaixo a minha solução para o desafio de ontem!

<a href='https://gist.github.com/fabriciocarraro/8261fd75a92d761b704c6f0997b32264'>- Solução do Dia 1</a>
Não se esqueça de compartilhar o seu programa no GitHub ou nas suas redes sociais com a hashtag #7DaysOfCode, e também com #feedback caso você queira alguma ajuda.

Bom trabalho e até amanhã!

Rafa Ballerini
Instrutora Front-End na Alura
