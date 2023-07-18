const db = require('../../db/dataBase')

exports.productviews = async (req, res) => {
    const rows = await db.select('produtoNome', 'produtoTipo', 'produtoValorVenda')
    .from('produto')
    res.render('productviews', {rows})
}