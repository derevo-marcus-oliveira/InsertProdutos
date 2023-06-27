import { useEffect, useState } from "react";
import { Form, useLoaderData, useActionData, useNavigate } from "react-router-dom";

export default function ProdutoConsultar() {

    const data = useActionData();
    const [dados, SetDados] = useState([]);
    const navigate = useNavigate()

    useEffect(() => {
        debugger
        SetDados(data || []);

        if (data && data.length > 0) {
            if (data[0].especificacoes || data[0].especificacoes.length > 0)
                SetEspecificao(data[0].especificacoes);

            if (data[0].imagens || data[0].imagens.length > 0)
                SetImagem(data[0].imagens);

            if (data[0].avaliacoes || data[0].avaliacoes.length > 0)
                SetAvaliacao(data[0].avaliacoes);

            if (data[0].commentarios || data[0].commentarios.length > 0)
                SetComentario(data[0].commentarios);
        }

    }, [data]);

    const [especificacao, SetEspecificao] = useState([]);
    const [avaliacao, SetAvaliacao] = useState([]);
    const [imagem, SetImagem] = useState([]);
    const [comentario, SetComentario] = useState([]);


    return (
        <>
            <div className="context">
                <Form method="post" id="form" className="form-container" >

                    <div className="form-item">
                        <label className="form-label" htmlFor="id_consulta">Id</label>
                        <br />
                        <input className="form-input" type="number" name="id_consulta" id="id_consulta" />
                    </div>

                    <div className="form-item">

                        <label className="form-label" htmlFor="nome_consulta">Nome</label>
                        <br />
                        <input className="form-input" type="text" name="nome_consulta" id="nome_consulta" />
                    </div>

                    <div className="form-item">
                        <button className="form-button button-success" type="submit" >Create</button>
                    </div>
                </Form>

                <hr />
                {dados.length == 0 ? (
                    <h1>NAda</h1>
                ) : (
                    <Form method="post" id="form" className="form-container" action="/produto/alterar/">

                        <div className="form-context">

                            <div className="form-item">
                                <label className="form-label" htmlFor="id">Id</label>
                                <br />
                                <input className="form-input" type="number" name="id" id="id" value={dados[0].id}/>
                            </div>

                            <div className="form-item">
                                <label className="form-label" htmlFor="Tipo">Tipo - <span style={{ background: "black", color: "#fff", padding: "2px 16px" }}>{dados[0].tipo}</span></label>
                                <br />
                                <input className="form-input" type="text" name="tipo" id="Tipo" />
                            </div>


                            <div className="form-item">

                                <label className="form-label" htmlFor="Nome">Nome - <span style={{ background: "black", color: "#fff", padding: "2px 16px" }}>{dados[0].nome}</span></label>
                                <br />
                                <input className="form-input" type="text" name="nome" id="Nome" />
                            </div>

                            <div className="form-item">
                                <label className="form-label" htmlFor="Marca">Marca - <span style={{ background: "black", color: "#fff", padding: "2px 16px" }}>{dados[0].marca}</span></label>
                                <br />
                                <input className="form-input" type="text" name="marca" id="Marca" />

                            </div>

                            <div className="form-item">
                                <label className="form-label" htmlFor="Modelo">Modelo - <span style={{ background: "black", color: "#fff", padding: "2px 16px" }}>{dados[0].modelo}</span></label>
                                <br />
                                <input className="form-input" type="text" name="modelo" id="Modelo" />

                            </div>

                            <input type="text" name="especificacoes" hidden />
                            <input type="text" name="imagens" hidden />
                            <input type="text" name="avaliacoes" hidden />
                            <input type="text" name="commentarios" hidden />

                        </div>

                        <hr />

                        <div className="form-context">

                            <h1>Especificações</h1>

                            <div className="form-item">
                                <label className="form-label" htmlFor="especificacao">Tipo</label>
                                <br />
                                <input className="form-input" type="text" id="especificacao" />

                            </div>

                            <div className="form-item">
                                <label className="form-label" htmlFor="especificacao_descricao">Nome</label>
                                <br />
                                <input className="form-input" type="text" id="especificacao_descricao" />
                            </div>

                            <div className="form-item">
                                <button className="form-button button-success" type="button" onClick={() => {

                                    if (document.getElementById("especificacao").value == '' || document.getElementById("especificacao").value == null
                                        && document.getElementById("especificacao_descricao").value == '' || document.getElementById("especificacao_descricao").value == null) {
                                        return
                                    }
                                    else {

                                        var obj = {
                                            id_especificacao: especificacao.length,
                                            especificacao: document.getElementById("especificacao").value,
                                            especificacao_descricao: document.getElementById("especificacao_descricao").value
                                        };

                                        SetEspecificao([...especificacao, obj]);
                                    };

                                    document.getElementById("especificacao").value = "";
                                    document.getElementById("especificacao_descricao").value = "";

                                }}>
                                    Add
                                </button>
                            </div>

                            <div className="form-list">
                                {especificacao.map((item, id) => {

                                    return (
                                        <li key={item.id_especificacao}>
                                            {item.especificacao} - {item.especificacao_descricao}
                                            <button type="button" className="btn-remove list-btn-remove" onClick={() => {

                                                var arr = especificacao;
                                                arr.splice(id, 1);
                                                SetEspecificao(arr);
                                            }}>X</button>
                                        </li>
                                    )
                                })}
                            </div>
                        </div>
                        <hr />

                        <div className="form-context">
                            <h1>Imagens</h1>

                            <div className="form-item">
                                <label className="form-label" htmlFor="url">URL</label>
                                <br />
                                <input className="form-input" type="text" id="url" />

                            </div>

                            <div className="form-item">
                                <button className="form-button button-success" type="button" onClick={() => {

                                    if (document.getElementById("url").value == "" || document.getElementById("url").value == null) {
                                        return;
                                    }
                                    else {
                                        var obj = {
                                            id_imagem: imagem.length,
                                            url: document.getElementById("url").value
                                        };

                                        SetImagem([...imagem, obj]);
                                    }

                                    document.getElementById("url").value = "";
                                }}>
                                    Add
                                </button>

                            </div>

                            <div className="form-list">
                                {imagem.map((item, id) => {

                                    return (
                                        <li key={item.id_imagem}>
                                            {item.url}
                                            <button type="button" className="btn-remove list-btn-remove" onClick={() => {

                                                var arr = [];
                                                SetImagem(arr);
                                            }}>X</button>
                                        </li>
                                    )
                                })}
                            </div>
                        </div>
                        <hr />

                        <div className="form-context">
                            <h1>Avaliacoes</h1>
                            <div className="form-item">
                                <label className="form-label" htmlFor="avaliacao">Avaliação</label>
                                <br />
                                <input className="form-input" type="text" id="avaliacao" />

                            </div>

                            <div className="form-item">
                                <label className="form-label" htmlFor="descricao_avaliacao">Descrição</label>
                                <br />
                                <input className="form-input" type="text" id="descricao_avaliacao" />

                            </div>

                            <div className="form-item">

                                <button className="form-button button-success" type="button" onClick={() => {

                                    if (document.getElementById("avaliacao").value == "" || document.getElementById("avaliacao").value == null
                                        && document.getElementById("descricao_avaliacao").value == "" || document.getElementById("descricao_avaliacao").value == null) {
                                        return
                                    }
                                    else {

                                        var obj = {
                                            id_avaliacao: avaliacao.length,
                                            avaliacao: document.getElementById("avaliacao").value,
                                            descricao_avaliacao: document.getElementById("descricao_avaliacao").value
                                        };

                                        SetAvaliacao([...avaliacao, obj]);
                                    }

                                    document.getElementById("avaliacao").value = "";
                                    document.getElementById("descricao_avaliacao").value = "";
                                }}>
                                    Add
                                </button>
                            </div>

                            <div className="form-list">
                                {avaliacao.map((item, id) => {

                                    return (
                                        <li key={item.id_avaliacao}>
                                            {item.avaliacao} - {item.descricao_avaliacao}
                                            <button className="btn-remove list-btn-remove" onClick={() => {

                                                var arr = avaliacao;
                                                arr.splice(id, 1);
                                                SetAvaliacao(arr);
                                            }}>X</button>
                                        </li>
                                    )
                                })}
                            </div>

                        </div>
                        <hr />

                        <div className="form-context">

                            <h1>Comentários</h1>

                            <div className="form-item">
                                <label className="form-label" htmlFor="usuario_nome">Usuário</label>
                                <br />
                                <input className="form-input " type="text" id="usuario_nome" />

                            </div>

                            <div className="form-item">
                                <label className="form-label" htmlFor="comentario">Comentário</label>
                                <br />
                                <input className="form-input " type="text" id="comentario" />

                            </div>

                            <div className="form-item">
                                <button className="form-button button-success" type="button" onClick={() => {

                                    if (document.getElementById("usuario_nome").value == "" || document.getElementById("usuario_nome").value == null
                                        && document.getElementById("comentario").value == "" || document.getElementById("comentario").value == null) {
                                        return;
                                    }
                                    else {

                                        var obj = {
                                            id_comentario: comentario.length,
                                            usuario_nome: document.getElementById("usuario_nome").value,
                                            comentario: document.getElementById("comentario").value
                                        };

                                        SetComentario([...comentario, obj]);
                                    }

                                    document.getElementById("usuario_nome").value = "";
                                    document.getElementById("comentario").value = "";
                                }}>
                                    Add
                                </button>
                            </div>

                            <div className="form-list">
                                {comentario.map((item, id) => {

                                    return (
                                        <li key={item.id_comentario}>
                                            {item.usuario_nome} - {item.comentario}
                                            <button className="btn-remove list-btn-remove" onClick={() => {

                                                var arr = comentario;
                                                arr.splice(id, 1);
                                                SetComentario(arr);
                                            }}>X</button>
                                        </li>
                                    )
                                })}
                            </div>


                        </div>
                        <hr />

                        <div className="form-item">
                            <button type="submit" className="form-button button-success" onClick={async () => {


                                document.querySelector('input[name=especificacoes]').setAttribute('value', JSON.stringify(especificacao));
                                document.querySelector('input[name=imagens]').setAttribute('value', JSON.stringify(imagem));
                                document.querySelector('input[name=avaliacoes]').setAttribute('value', JSON.stringify(avaliacao));
                                document.querySelector('input[name=commentarios]').setAttribute('value', JSON.stringify(comentario));

                            }}>Alterar</button>
                        </div>
                        <div className="form-item">
                            <button className="form-button button-success" onClick={async () => {
                                debugger
                                var id = document.querySelector("#id").value;
                                navigate("/enum/excluir/" + id)

                            }}>Excluir</button>
                        </div>
                    </Form>
                )}

            </div>
        </>
    )
}