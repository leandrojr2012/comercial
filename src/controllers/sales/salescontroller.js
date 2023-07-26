const db = require('../../db/dataBase')
const saleProductService = require('../../service/sale/saleProductService')
const saleInfoService = require('../../service/sale/saleinfoservice')


exports.saleclient = async (req, res) => {
    const rowsProd = await db. select('idproduto', 'produtoNome', 'produtoValorVenda')
                   . from('produto')
    
    const rowsVendedor = await db. select('funcionarioNome', 'idfuncionario')
                   . from('funcionario')

    res.render('saleclient',{rowsProd, rowsVendedor})
}

exports.saleclientcodigo = async (req, res) => {

    const codigo = req.params.codigo

    const rowsProd = await db. select('idproduto', 'produtoNome', 'produtoValorVenda')
                   . from('produto')
                   . where({idproduto:codigo})

    res.send({rowsProd, codigo})
}

exports.saleproductservice = (req, res) => {

    const dados = req.body
    const vendasProdutoIdProduto = dados.produto
    const vendasProdutoQuantidade = dados.quantidade 

    saleProductService(vendasProdutoIdProduto, vendasProdutoQuantidade)
    .then(()=>{
        return res.render('saleclient')
    }).catch((erros) => {console.log(erros)
        //error_msg = erros
        return res.redirect('/home')
    })
}

exports.saleinfoservice = (req, res) => {

    const dados = req.body
    const vendasProdCod = dados.prodCod

    console.log(dados)

    saleInfoService(vendasProdCod)
    .then(()=>{
        return res.render('saleclient')
    }).catch((erros) => {console.log(erros)
        //error_msg = erros
        return res.redirect('/home')
    })
}

