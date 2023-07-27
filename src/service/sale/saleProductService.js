const db = require('../../db/dataBase')

async function saleProductService(vendasProdutoTesteNome, vendasProdutoTesteQtd){
    return new Promise(async ( resolve, reject) =>{

        for(let i in vendasProdutoTesteNome){
            console.log('teste for: ' + vendasProdutoTesteNome[i])

            await db.insert({vendasProdutoTesteNome, vendasProdutoTesteQtd: Number(vendasProdutoTesteQtd)})
            .into("vendasprodutoteste")
            .then (data =>{
                resolve()
            }).catch(err => {
                console.log(err)
            })
        }
    }
    )
}

module.exports = saleProductService


   /* <label for="">Vendedor:</label>
            <select name="vendedor">
                <% for(let i in rowsVendedor){ %>
                <option value="<%= rowsVendedor[i].idfuncionario %>"><%= rowsVendedor[i].funcionarioNome %></option>
                <% } %>
            </select><br>*/