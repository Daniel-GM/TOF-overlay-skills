for (let i = personagens.length; i >= 0 ; i--) {
  primeiroPersonagem.options[primeiroPersonagem.options.length] = new Option(personagens[i], personagens[i])
  segundoPersonagem.options[segundoPersonagem.options.length] = new Option(personagens[i], personagens[i])
  terceiroPersonagem.options[terceiroPersonagem.options.length] = new Option(personagens[i], personagens[i])
}

function imprime(id){
  primeiroSelect = primeiroPersonagem[primeiroPersonagem.selectedIndex].text
  segundoSelect = segundoPersonagem[segundoPersonagem.selectedIndex].text
  terceiroSelect = terceiroPersonagem[terceiroPersonagem.selectedIndex].text
  
  if (id == 'first-char') {
    setSelect(segundoPersonagem, primeiroSelect, terceiroSelect)
    setSelect(terceiroPersonagem, primeiroSelect, segundoSelect)
  } else if (id == 'second-char') {
    setSelect(primeiroPersonagem, segundoSelect, terceiroSelect)
    setSelect(terceiroPersonagem, primeiroSelect, segundoSelect)
  } else if (id == 'third-char') {
    setSelect(primeiroPersonagem, segundoSelect, terceiroSelect)
    setSelect(segundoPersonagem, primeiroSelect, terceiroSelect)
  }
  getImagem(primeiroSelect, segundoSelect, terceiroSelect)
}

function setSelect(id, primeiroSelect, segundoSelect) {
  let save = id[id.selectedIndex].text
  id.innerHTML = ''
  for (let i = personagens.length; i >= 0 ; i--) {
    if(primeiroSelect != personagens[i] && segundoSelect != personagens[i])
      id.options[id.options.length] = new Option(personagens[i], personagens[i])
  }
  id.value = save
}

function getImagem(key1, key2, key3) {
  if (key1 != '') setImagem(key1, 'char-icon-1')
  if (key2 != '') setImagem(key2, 'char-icon-2')
  if (key3 != '') setImagem(key3, 'char-icon-3')
}

function setImagem(key, elemento) {
  key = key.replace(/\s/g, '')
  var imageUrl = `img/armas/${key.toLowerCase()}.webp`
  $(`.${elemento}`).css("background-image", "url(" + imageUrl + ")")
}

$("input").change(function(){
  $(this).val($(this).val().toUpperCase());
});

function limpaCampo(id) {
  $(`#${id}`).val('')
}

function selectWeapon(arma) {
  if($('.card #arma-1').val() === arma){
    for(let i = personagens.length; i >= 0 ; i--) {
      if(personagens[i] == $('#first-char').val()){
        $('.tempo-1').css('display', 'flex')
        timer(tempo[i], $('.tempo-1 .contador')[0], $('.tempo-1'))
      }
    }
  } else if($('.card #arma-2').val() === arma){
    for(let i = personagens.length; i >= 0 ; i--) {
      if(personagens[i] == $('#second-char').val()){
        $('.tempo-2').css('display', 'flex')
        timer(tempo[i], $('.tempo-2 .contador')[0], $('.tempo-2'))
      }
    }
  } else if($('.card #arma-3').val() === arma){
    for(let i = personagens.length; i >= 0 ; i--) {
      if(personagens[i] == $('#third-char').val()){
        $('.tempo-3').css('display', 'flex')
        timer(tempo[i], $('.tempo-3 .contador')[0], $('.tempo-3'))
      }
    }
  }
}

function timer(tempo, campo, display){
  campo.innerHTML = tempo
  
  let contador = new Date().getTime() + ((tempo+1)*1000)
  let x = setInterval(() => {
    let agora = new Date().getTime();
    let distancia = contador - agora
    let segundos = Math.floor((distancia % (1000 * 60)) / 1000);
    campo.innerHTML = segundos

    if (distancia < 0) {
      clearInterval(x);
      display.css('display', 'none')
    }
  }, 1000)
}