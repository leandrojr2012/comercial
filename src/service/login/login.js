const db = require('../../db/dataBase')
const bcryptjs = require('bcryptjs')
const jwt = require('jsonwebtoken')
const SECRET = 'leandro'

async function loginUsuario(nome, senha){
    return new Promise(async ( resolve, reject) =>{

        const user = await db.select('idfuncionario', 'funcionarioNome', 'funcionarioSenha').from('funcionario').where({funcionarioNome: nome})

        let nomeBd  
        let senhaBd
        let idBd 
        let data = new Date()

        for(let i=0; i<user.length; i++){
            if(user[i].funcionarioNome){
                nomeBd = user[i].funcionarioNome
            }
        }

        for(let i=0; i<user.length; i++){
            if(user[i].funcionarioSenha){
                senhaBd = user[i].funcionarioSenha
            }
        }

        for(let i=0; i<user.length; i++){
            if(user[i].idfuncionario){
                idBd = user[i].idfuncionario
            }
        }

        if(nome == "" || senha == ""){
            reject('Nenhum campo pode ficar em branco!')
            return;
        }
        else if(nomeBd !== nome){
            reject('Usuario ou senha incorreto! nome nao existe')
        }
        else if(!(bcryptjs.compareSync(senha, senhaBd))){
            reject('Usuario ou Senha incorreto! senha incorreta')
        }
        else{            
            let token = jwt.sign({idBd}, SECRET, {
            expiresIn: 60
            })
            await db.insert({idBd, data})
            .into("login")
            .then (data =>{
               resolve(token)  
            }).catch(err => {
               console.log(err)
            })
        }
    })
}

module.exports = loginUsuario