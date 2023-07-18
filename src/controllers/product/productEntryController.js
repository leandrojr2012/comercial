const db = require('../../db/dataBase')
const productEntryService = require('../../service/product/productEntry')

exports.productEntry = async (req, res) => {
    const rows = await db
    .select('idproduto', 'produtoNome')
    .from('produto')
    res.render('productEntry', {rows})
}

exports. productEntryService = async (req, res) => {

    const dados = req.body
    const prodEntryidproduto = dados.idprod
    const prodEntryQuantity = dados.quantity
    const prodEntryValue = dados.value

    productEntryService (prodEntryidproduto, prodEntryQuantity, prodEntryValue)
    .then( data => {
        return res.redirect('/home')
    }).catch((erros => {
        console.log(erros)
        return res.redirect('/home/product/entry')
    }))
}