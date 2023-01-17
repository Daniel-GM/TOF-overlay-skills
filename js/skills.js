let body = document.body
let historico = ['', '']
let arma
let arma1 = $('#arma-1')
let arma2 = $('#arma-2')
let arma3 = $('#arma-3')
let skill = $('#skill')


body.addEventListener("keypress", function(event) {
  let botao = event.key

  if(botao.toUpperCase() === arma1.val() || 
  botao.toUpperCase() === arma2.val() || 
  botao.toUpperCase() === arma3.val()){
    historico.push(botao)
  }

  if (botao === skill.val()) {
    if (historico.slice(-1)[0] != "1") 
      historico.push(botao)
    arma = historico.slice(-2)
    selectWeapon(arma[0].toUpperCase())
    // event.preventDefault()
  }
})