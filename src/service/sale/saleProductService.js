const db = require('../../db/dataBase')

async function saleProductService(vendasProdutoIdProduto, vendasProdutoQuantidade){
    return new Promise(async ( resolve, reject) =>{

            await db.insert({vendasProdutoIdProduto: Number(vendasProdutoIdProduto), vendasProdutoQuantidade: Number(vendasProdutoQuantidade)})
            .into("vendasproduto")
            .then (data =>{
                resolve()
            }).catch(err => {
                console.log(err)
            })
    })
}

module.exports = saleProductService