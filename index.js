const perguntas = [
    {
      pergunta: "Qual é a palavra-chave usada para declarar uma variável em JavaScript?",
      respostas: [
        "a) var",
        "b) let",
        "c) const"
      ],
      correta: 1 // Resposta correta: "b) let"
    },
    {
      pergunta: "Qual método é usado para adicionar um novo elemento no final de um array em JavaScript?",
      respostas: [
        "a) push()",
        "b) unshift()",
        "c) concat()"
      ],
      correta: 0 // Resposta correta: "a) push()"
    },
    {
      pergunta: "Como você declara uma função anônima em JavaScript?",
      respostas: [
        "a) function myFunction() {}",
        "b) const myFunction = function() {}",
        "c) let myFunction = () => {}"
      ],
      correta: 1 // Resposta correta: "b) const myFunction = function() {}"
    },
    {
      pergunta: "Qual é o resultado da expressão '5' + 3 em JavaScript?",
      respostas: [
        "a) 8",
        "b) '53'",
        "c) 53"
      ],
      correta: 1 // Resposta correta: "b) '53'"
    },
    {
      pergunta: "O que o método 'indexOf()' retorna se o elemento não for encontrado em um array em JavaScript?",
      respostas: [
        "a) -1",
        "b) 0",
        "c) undefined"
      ],
      correta: 0 // Resposta correta: "a) -1"
    },
    {
      pergunta: "Qual é o operador lógico de negação em JavaScript?",
      respostas: [
        "a) &&",
        "b) ||",
        "c) !"
      ],
      correta: 2 // Resposta correta: "c) !"
    },
    {
      pergunta: "Qual método JavaScript é usado para remover o último elemento de um array?",
      respostas: [
        "a) pop()",
        "b) shift()",
        "c) slice()"
      ],
      correta: 0 // Resposta correta: "a) pop()"
    },
    {
      pergunta: "Qual é a saída da expressão console.log(typeof []) em JavaScript?",
      respostas: [
        "a) 'array'",
        "b) 'object'",
        "c) 'undefined'"
      ],
      correta: 1 // Resposta correta: "b) 'object'"
    },
    {
      pergunta: "Qual é a função do método 'addEventListener()' em JavaScript?",
      respostas: [
        "a) Remover um evento",
        "b) Adicionar um evento",
        "c) Atualizar a página"
      ],
      correta: 1 // Resposta correta: "b) Adicionar um evento"
    },
    {
      pergunta: "Qual é a finalidade do operador 'typeof' em JavaScript?",
      respostas: [
        "a) Verificar o tipo de uma variável",
        "b) Realizar uma comparação",
        "c) Atribuir um tipo a uma variável"
      ],
      correta: 0 // Resposta correta: "a) Verificar o tipo de uma variável"
    }
  ];
  
  const quiz = document.querySelector('#quiz')
  const template = document.querySelector('template')
  
  const corretas =new Set()
  const totalDePerguntas = perguntas.length
  const mostrarTotal = document.querySelector('#Acertos span')
  mostrarTotal.textContent = corretas.size + ' de ' + totalDePerguntas 
  
  for(const item of perguntas) {
  const quizItem = template.content.cloneNode(true) 
  quizItem.querySelector('h3').textContent = item.pergunta 
  
  for(let resposta of item.respostas) {
  const dt = quizItem.querySelector('dl dt').cloneNode(true)
  dt.querySelector('span').textContent = resposta
  dt.querySelector('input').setAttribute('name', 'pergunta-' + perguntas.indexOf(item))
  dt.querySelector('input').value = item.respostas.indexOf(resposta)
  dt.querySelector('input').onchange = (event) => {
  const estaCorreta = event.target.value == item.correta
  
  corretas.delete(item)
  if(estaCorreta) {
    corretas.add(item)
  }
  mostrarTotal.textContent = corretas.size + ' de ' + totalDePerguntas 
  }
  
  quizItem.querySelector('dl').appendChild(dt)
  }
  quizItem.querySelector('dl dt').remove()
  
  quiz.appendChild(quizItem)
  }