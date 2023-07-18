const db = require('../../db/dataBase')

async function productEntryService(prodEntryidproduto, prodEntryQuantity, prodEntryValue){
    return new Promise (async(resolve, reject) =>{
    
        let date = new Date()
        
        if(prodEntryidproduto == '' || prodEntryQuantity == '' || prodEntryValue == ''){
            reject('Nenhum campo pode ficar em BRANCO!')
        }else{
            await db. insert({prodEntryidproduto, prodEntryQuantity: Number(prodEntryQuantity), prodEntryValue: Number(prodEntryValue), prodEntryDate: date})
                    . into('productentry')
                    .then(data =>{
                        resolve()
                    }).catch(erros =>{
                        console.log(erros)
                    })
        }
    })
}

module.exports = productEntryService