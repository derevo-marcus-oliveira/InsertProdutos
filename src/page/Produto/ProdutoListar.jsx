import { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";


export default function ProdutoListar() {
    debugger
    const data = useLoaderData();

    const [produto, SetProduto] = useState([]);
    useEffect(() => {

        SetProduto(data);
    }, [])



    return (
        <table>
            <tr>
                <th>Id</th>
                <th>Tipo</th>
                <th>Nome</th>
                <th>Marca</th>
                <th>Modelo</th>
                <th>Especificação</th>
                <th>Imagens</th>
                <th>Avaliações</th>
                <th>Comentarios</th>
            </tr>
            {produto.map((item) => {
                return (
                    <tr>
                        <td>{item.id}</td>
                        <td>{item.tipo}</td>
                        <td>{item.nome}</td>
                        <td>{item.marca}</td>
                        <td>{item.modelo}</td>
                        <td>{item.especificacoes.length > 0 ? "Sim" : "Não"}</td>
                        <td>{item.imagens.length > 0 ? "Sim" : "Não"}</td>
                        <td>{item.avaliacoes.length > 0 ? "Sim" : "Não"}</td>
                        <td>{item.commentarios.length > 0 ? "Sim" : "Não"}</td>
                    </tr>
                );
            })}

        </table>
    )
}