const db = require('../../db/dataBase')

async function saleProductService(vendasProdutoTesteNome, vendasProdutoTesteQtd){
    return new Promise(async ( resolve, reject) =>{

        let obj = {nome: vendasProdutoTesteNome, qtd: vendasProdutoTesteQtd}

        for (let i in obj){
            console.log('teste nome: ' + obj.nome.vendasProdutoTesteNome[i])
            console.log('teste Qtd: ' + obj.qtd.vendasProdutoTesteQtd[i])

            await db.insert({vendasProdutoTesteNome: obj.nome.vendasProdutoTesteNome[i], vendasProdutoTesteQtd: Number(obj.qtd.vendasProdutoTesteQtd[i])})
            .into("vendasprodutoteste")
            .then (data =>{
                resolve()
            }).catch(err => {
                console.log(err)
            })
        }
    })
}

module.exports = saleProductService


   /* <label for="">Vendedor:</label>
            <select name="vendedor">
                <% for(let i in rowsVendedor){ %>
                <option value="<%= rowsVendedor[i].idfuncionario %>"><%= rowsVendedor[i].funcionarioNome %></option>
                <% } %>
            </select><br>*/