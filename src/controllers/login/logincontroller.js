const loginUsuario = require('../../service/login/login')

exports.loginservice = (req, res) => {
    const dados = req.body
    const nome = dados.nome
    const senha = dados.senha

    loginUsuario(nome, senha)
    .then(jwt => {
        req.session.token = jwt
        res.redirect('/home') 
    }).catch((erros) => {console.log(erros)
        //error_msg = erros
        return res.redirect('/')
    })
}