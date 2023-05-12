
/*
-----------------------------------------------------------------------------------------
 Construir um programa em JS que resolva o seguinte problema.
Solicitar o nome, idade (18-75), sexo (M/F/O) de 6 pessoas e apresente:
-----------------------------------------------------------------------------------------
- [ X ] Quantidade de pessoas do sexo Masculino
- [ X ] Percentual de pessoas do sexo Feminino e Outros 
- [ X ] Média de idade dos Homens
- [ X ] Nome da Mulher mais idosa
- [ X ] Média geral de idade
- [ X ] Percentual de pessoas com idade acima de 50 anos
- [ X ] Quantidade de erros que o usuário cometeu ao digitar os dados
- [ X ] Nome e idade da pessoa mais nova. Caso haja pessoas com idades iguais, mostrar apenas a primeira delas.
- [ X ] Média de caracteres dos nomes (apenas mulheres)
- [ X ] Menor nome (em ordem alfabética)
- [ X ] Maior nome (em quantidade de caracteres)

-------------------------------------
*/


var nomes = []
var sexos = []
var idades = []
var quantErros = 0
var pos = 0
var maiorNomeComp = 0
var contagem = 0
function exercicio() {
    var divInputNome = document.getElementById('nomePessoas').value
    var divInputIdade = parseInt(document.getElementById('idadePessoas').value)
    var divInputSexo = document.getElementById('sexoPessoas').value
    var divErro = document.getElementById('divErro')
    var divContagem = document.getElementById('contagem')
    divErro.textContent = ''


    // DIVS DAS RESPOSTAS
    var divResposta1 = document.getElementById('resposta1')
    var divResposta2 = document.getElementById('resposta2')
    var divResposta3 = document.getElementById('resposta3')
    var divResposta4 = document.getElementById('resposta4')
    var divResposta5 = document.getElementById('resposta5')
    var divResposta6 = document.getElementById('resposta6')
    var divResposta7 = document.getElementById('resposta7')
    var divResposta8 = document.getElementById('resposta8')
    var divResposta9 = document.getElementById('resposta9')
    var divResposta10 = document.getElementById('resposta10')
    var divResposta11 = document.getElementById('resposta11')

    // VARIAVEIS
    var quantMasc = 0
    var quantQueer = 0
    var quantFem = 0
    var somaIdadeMasc = 0
    var mulherMaisIdosa = ''
    var mediaIdadeHomens = 0
    var idadeGeral = 0
    var maiorDeCinquenta = 0
    var pessoaMaisJovem = ''
    var menorIdade = 0
    var quantCarac = 0
    var maiorNome = ''
    var maiorIdadeFem = 0

    // VERIFICANDO OS ERROS


    if(divInputNome == '' || isNaN(divInputIdade) || divInputSexo == '') {
        divErro.textContent = 'Todos os campos devem ser preenchidos!'
        quantErros += 1
        return;
    }

    if(divInputIdade < 18 || divInputIdade > 75) {
        divErro.textContent = 'A idade deve estar entre 18 e 75!'
        quantErros += 1
        return;
    }

    if(divInputSexo != 'M' && divInputSexo != 'F' && divInputSexo != 'O') {
        divErro.textContent = 'O sexo deve ser informado usando as siglas M/F/O!'
        quantErros += 1
        return;
    }
    quantQueer + quantFem
    
    //A lista de nomes se organiza sozinha. Isso gera problemas no exercício 4 e 8.
    if(nomes.length < 6) {
        nomes[pos] = divInputNome
        sexos.push(divInputSexo)
        idades.push(divInputIdade)

        console.warn(idades.reduce((a, b) => a + b))
        
        if(contagem == 0) {
            divContagem.textContent = `Foi cadastrada ${contagem += 1} / 6 pessoa.`
        } else {
            divContagem.textContent = `Foram cadastradas ${contagem += 1} / 6 pessoas.`
        }

        sexos.forEach(element => {
            if(element == 'M') {
                quantMasc += 1
            } else if(element == 'F') {
                quantFem += 1
            } else {
                quantQueer += 1
            }
        });



        for(index = 0; index < nomes.length; index++){
            if(sexos[index] == 'M') {
                somaIdadeMasc += idades[index]
            } else if (sexos[index] == 'F') {
                if(idades[index] > maiorIdadeFem) {
                    maiorIdadeFem = idades[index]
                    mulherMaisIdosa = nomes[index]
                }
                quantCarac += nomes[index].length
            }

            if(idades[index] > 50) {
                maiorDeCinquenta += 1
            }

            if (nomes[index].length > maiorNomeComp) {
                maiorNomeComp = nomes[index].length
                maiorNome = nomes[index]
            }

            

            idadeGeral += idades[index]
        }

        for(index = 0; index < nomes.length; index++) {
            if(idades[index] == idades.reduce((a,b) => Math.min(a,b), +Infinity)) {
                pessoaMaisJovem = nomes[index]
                menorIdade = idades[index]
                break
            }
        }

        if(quantMasc == 1) {
            divResposta1.textContent = `${quantMasc} homem fez cadastro.`
        } else {
            divResposta1.textContent = `${quantMasc} homens fizeram cadastro.`
        }

        divResposta2.textContent = `${Math.round(((quantQueer + quantFem) / nomes.length) * 100, 2)}% dos cadastros não são masculinos.`

        mediaIdadeHomens = isNaN(Math.round((somaIdadeMasc / quantMasc), 2)) ?  mediaIdadeHomens = 0 : mediaIdadeHomens = Math.round((somaIdadeMasc / quantMasc), 2)
        divResposta3.textContent = `A media de idade dos homens é ${mediaIdadeHomens}.`

        divResposta4.textContent = `A mulher mais idosa se chama ${mulherMaisIdosa} e tem ${maiorIdadeFem}.`
        divResposta5.textContent = `A média geral das idades é ${Math.round((idadeGeral / nomes.length), 2)}.`
        divResposta6.textContent = `${(maiorDeCinquenta / nomes.length) * 100}% das pessoas cadastradas têm mais de 50 anos.`
        divResposta7.textContent = `Você cometeu ${quantErros} erros ao entrar os dados.`
        divResposta8.textContent = `A pessoa mais jovem cadastrada é ${pessoaMaisJovem} e ela tem ${menorIdade} anos.`
        divResposta9.textContent = `A média dos caracteres dos nomes femininos é ${Math.round((quantCarac / quantFem), 2)}.`
        divResposta10.textContent = `O menor nome, em termos alfabéticos, entrado cadastrado foi ${nomes.sort()[0]}.`
        divResposta11.textContent = `O nome de maior comprimento entrado foi ${maiorNome}.`
        
        pos += 1

    }
}

