const db = require('../../db/dataBase')
const bcryptjs = require('bcryptjs')


async function registerEmployee(funcionarioNome, funcionarioSobrenome, funcionarioDataNascimento, funcionarioRg, funcionarioCpf, funcionarioEndereco, funcionarioAdmissao, funcionarioDemissao, funcionarioSalario, funcionarioFuncao, funcionarioSenha, confSenha){
    return new Promise(async ( resolve, reject) =>{


        if(funcionarioSenha != confSenha){
            reject('Senhas nao conferem!')
            return
        }
        else{   
            const senhas = bcryptjs.hashSync(funcionarioSenha, 8)
            await db.insert({funcionarioNome, funcionarioSobrenome, funcionarioDataNascimento, funcionarioRg, funcionarioCpf, funcionarioEndereco, funcionarioAdmissao, funcionarioDemissao, funcionarioSalario, funcionarioFuncao, funcionarioSenha:senhas})
            .into("funcionario")
            .then (data =>{
                resolve()
            }).catch(err => {
                console.log(err)
            })
        }
    })
}

module.exports = registerEmployee