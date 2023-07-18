const db = require('../../db/dataBase')


async function productService(produtoNome, produtoTipo, produtoidfornecedor, produtoValorVenda){
    return new Promise( async(resolve, reject) => {

        if(produtoNome == '' || produtoTipo == ''){
            reject('Nenhum campo pode ficar em BRANCO!')
            return
        }else if(produtoValorVenda == 0){
            reject('O valor do produto precisa ser maior que ZERO!')
        }
        else{
            await db.insert({produtoNome, produtoTipo, produtoidfornecedor, produtoValorVenda:Number(produtoValorVenda)})
            .into('produto')
            .then(data =>{
                resolve()
            }).catch(err =>{
                console.log(err)
            })
        }
    })
}

module.exports = productService