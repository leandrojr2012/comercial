const db = require('../../db/dataBase')

async function saleInfoService(nome){
    return new Promise(async ( resolve, reject) =>{

            await db.insert({nome})
            .into("vendasproduto")
            .then (data =>{
                resolve()
            }).catch(err => {
                console.log(err)
            })
    })
}

module.exports = saleInfoService