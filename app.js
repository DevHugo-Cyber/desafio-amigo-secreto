let listaAmigosArray = []
let nomeAmigo = ''

function adicionarAmigo () {
    let addAmigo = document.getElementById('amigo').value;
    console.log(`${addAmigo} foi adicionado com sucesso`)
    listaAmigosArray.push(addAmigo)
    console.log(`Lista atual: ${listaAmigosArray}`)
    let novoAmigo = document.createElement('li');
    novoAmigo.textContent = addAmigo
    
    let lista = document.getElementById('listaAmigos');
    lista.appendChild(novoAmigo)
    document.getElementById('amigo').value = '';
}

function sortearAmigo () {

let sortearNome = document.getElementsByClassName('button-draw').value;
  sortear = sortearNome
let indexNome = parseInt(Math.random()*listaAmigosArray.length)
console.log(indexNome)

   document.getElementById('listaAmigos').innerHTML = `O amigo secreto sorteado é: ${listaAmigosArray[indexNome]}`;
   
   document.querySelector('.button-draw').setAttribute('disabled', true);
}
