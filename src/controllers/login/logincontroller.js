const loginUsuario = require('../../service/login/login')

exports.login = (req, res) => {
    res.render('login')
}

exports.loginservice = (req, res) => {
    const dados = req.body
    const nome = dados.nome
    const senha = dados.senha

    loginUsuario(nome, senha)
    .then(()=>{
        return res.redirect('/') 
    }).catch((erros) => {console.log(erros)
        //error_msg = erros
        return res.redirect('/login')
    })
}