const productService = require('../../service/product/product')
const db = require('../../db/dataBase')

exports.product = async (req, res) => {
    const rows = await db.select('idfornecedor', 'fornecedorNome')
    .from('fornecedor')
    res.render('product', {rows})
}

exports.productservice = (req, res) => {
    const dados = req.body
    const produtoNome = dados.prodNome
    const produtoTipo = dados.prodTipo
    const produtoidfornecedor = dados.prodIdforn
    const produtoValorVenda = dados.prodVVenda

    productService(produtoNome, produtoTipo, produtoidfornecedor, produtoValorVenda)
    .then(()=>{
        return res.redirect('/home') 
    }).catch((erros) => {console.log(erros)
        //error_msg = erros
        return res.redirect('/home/product/register')
    })
}