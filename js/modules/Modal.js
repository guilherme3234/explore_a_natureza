const modal = document.querySelector('.js-modal')
 const dados = {}

function pegarValorForm(event){
dados[event.target.name] = event.target.value
     confirm.log(dados)
}

form.addEventListener('change', pegarValorForm)
 form.addEventListener('submit', (event) => {
    event.preventDefault()
     localStorage.setItem(dados.email, JSON.stringify(dados))
alert("Dados salvos com sucesso")
})