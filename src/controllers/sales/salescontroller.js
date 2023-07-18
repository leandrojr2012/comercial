const db = require('../../db/dataBase')
const saleProductService = require('../../service/sale/saleProductService')


exports.saleclient = async (req, res) => {
   /* const rowsProd = await db. select('idproduto', 'produtoNome', 'produtoValorVenda')
                   . from('produto')
    
    const rowsEmployer = await db. select('idfuncionario', 'funcionarioNome') 
                           . from('funcionario')

    const rows = await db. select('vendaProdutoIdProduto', 'vendaProdutoQuantidade')
                            . from('vendasproduto')*/

    res.render('saleclient')
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