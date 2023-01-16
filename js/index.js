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
  console.log(arma)
  if($('.card #arma-1').val() === arma){
    for(let i = personagens.length; i >= 0 ; i--) {
      if(personagens[i] == $('#first-char').val())
        $('.contador')[0].innerHTML = tempo[i]
        $('.tempo-1').css('display', 'flex')
    }
  }
}

