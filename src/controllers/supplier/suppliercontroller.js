const supplierService = require("../../service/supplier/supplier")

exports.supplier = (req, res) => {
    res.render('supplier')
}

exports.supplierservice = (req, res) => {
    const dados = req.body
    const fornecedorNome = dados.fornNome
    const fornecedorLocalizacao = dados.fornLoc
    const fornecedorContato = dados.fornCont

    supplierService(fornecedorNome, fornecedorLocalizacao, fornecedorContato)
    .then(()=>{
        return res.redirect('/home') 
    }).catch((erros) => {console.log(erros)
        //error_msg = erros
        return res.redirect('/home/supplier')
    })
}