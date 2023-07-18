const db = require('../../db/dataBase')

exports.seller = async(req, res) => {
    const rows = await db. select('idfuncionario', 'funcionarioNome')
                         . from('funcionario')
    res.render('seller')
}


