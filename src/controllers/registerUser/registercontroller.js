const registerEmployee = require('../../service/registerUser/registerEmployee')

exports.register = (req, res) => {
    res.render('register')
}

exports.registerservice = (req, res) => {
    const dados = req.body
    const funcionarioNome = dados.nome
    const funcionarioSobrenome = dados.sobrenome
    const funcionarioDataNascimento = dados.nascimento
    const funcionarioRg = dados.rg
    const funcionarioCpf = dados.cpf
    const funcionarioEndereco = dados.endereco
    const funcionarioAdmissao = dados.admissao
    const funcionarioDemissao = dados.demissao
    const funcionarioSalario = dados.salario
    const funcionarioFuncao = dados.funcao
    const funcionarioSenha = dados.senha
    const confSenha = dados.confirmarsenha
    const funcionarioCondicao = dados.condicao

    registerEmployee(funcionarioNome, funcionarioSobrenome, funcionarioDataNascimento, funcionarioRg, funcionarioCpf, funcionarioEndereco, funcionarioAdmissao, funcionarioDemissao, funcionarioSalario, funcionarioFuncao, funcionarioSenha, confSenha, funcionarioCondicao)
    .then(()=>{
        return res.redirect('/home') 
    }).catch((erros) => {console.log(erros)
        //error_msg = erros
        return res.redirect('/home/register')
    })
}