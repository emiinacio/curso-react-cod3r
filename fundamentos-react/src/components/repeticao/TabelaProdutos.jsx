import React from'react';
import produtos from '../../data/produtos';

export default (props) => {

    function produtosLI() {
        return produtos.map(produto => {
            return (
                <tr>
                    <td>{produto.id}</td>
                    <td>{produto.nome}</td>
                    <td>{produto.preco}</td>
                </tr>
            )
        })
    }

    

    return (
        <div>
            <table>
                <tr>
                    <th>ID</th>
                    <th>Nome</th>
                    <th>Preço</th>
                </tr>
                <tbody>
                    {produtosLI()}
                </tbody>
            </table>
        </div>
    )
}