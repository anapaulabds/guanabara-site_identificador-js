function verificar() {
     var data = new Date()
     var ano = data.getFullYear()
     var formAno = document.querySelector('#txtano') //caixa do ano
     var res = document.querySelector('#res')
     if (formAno.value.length == 0 || formAno.value> ano) {
         alert('[ERRO] Verifique os dados e tente novamente.')
     } else {
        var fSex = document.getElementsByName('radgender')
        var idade = ano - Number(formAno.value)
        var genero = ''
        var img = document.createElement('img')
        img.setAttribute('id', 'foto')

        if (fSex[0].checked) {
            genero = 'feminino'
        
            if (idade <= 12) {
                //Criança
                img.setAttribute('src', 'imagens/menina-crianca.png')
            } else if (idade <= 21) {
                //jovem
                img.setAttribute('src', 'imagens/menina-jovem.png')
            } else if (idade <= 60 ) {
                //adulto
                img.setAttribute('src', 'imagens/mulher-adulta.png')
            } else {
                //velho
                img.setAttribute('src', 'imagens/mulher-velha.png')
            }
        }    else if (fSex[1].checked) {
            genero = 'masculino'
            
            if (idade <= 12) {
                //Criança
                img.setAttribute('src', 'imagens/menino-crianca.png')
            } else if (idade <= 21) {
                //jovem
                img.setAttribute('src', 'imagens/menino-jovem.png')
            } else if (idade <= 60 ) {
                //adulto
                img.setAttribute('src', 'imagens/homem-adulto.png')
            } else {
                //velho
                img.setAttribute('src', 'imagens/homem-velho.png')
            }
        }
            res.style.textAlign = 'center'
            res.innerHTML = `<p>Detectamos uma pessoa do gênero <strong>${genero}</strong> com ${idade} anos de idade!</p>`
            res.appendChild(img) 

     
}
}

/* Na linha 6: se no formAno o valor não for colocado ou for colocado um ano maior que o atual; posso usar Number(formAno.value) no segundo elemento */
