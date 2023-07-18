const db = require('../../db/dataBase')


async function supplierService(fornecedorNome, fornecedorLocalizacao, fornecedorContato){
    return new Promise( async(resolve, reject) => {

        if(fornecedorNome == '' || fornecedorLocalizacao == '' || fornecedorContato == ''){
            reject('Nenhum campo pode ficar em BRANCO!')
            return
        }
        else{
            await db.insert({fornecedorNome, fornecedorLocalizacao, fornecedorContato})
            .into('fornecedor')
            .then(data =>{
                resolve()
            }).catch(err =>{
                console.log(err)
            })
        }
    })
}

module.exports = supplierService