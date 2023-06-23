import { useEffect, useState } from "react";
import { Form, useLoaderData } from "react-router-dom";


export default function ProdutoSalvar() {

    var data = useLoaderData();

    const [enumerador, SetEnumerador] = useState([]);
    const [especificacao, SetEspecificao] = useState([]);
    const [avaliacao, SetAvaliacao] = useState([]);
    const [imagem, SetImagem] = useState([]);
    const [comentario, SetComentario] = useState([]);

    useEffect(() => { SetEnumerador(data); }, [])


    return (
        <>
            <div className="context">
                <Form method="post" id="form" className="form-context">

                    <div className="form-context">

                        <div className="form-item">

                            <label className="form-label" htmlFor="Tipo">Tipo</label>
                            <br />
                            <select name="tipo" id="tipo" style={{padding: 5, width: 185}}>
                                {enumerador.map((item) => {
                                    return (
                                        <option key={item.id} value={item.tipo}>{item.descricao}</option>
                                    )
                                })}
                            </select>
                        </div>


                        <div className="form-item">

                            <label className="form-label" htmlFor="Nome">Nome</label>
                            <br />
                            <input className="form-input" type="text" name="nome" id="Nome" />
                        </div>

                        <div className="form-item">
                            <label className="form-label" htmlFor="Marca">Marca</label>
                            <br />
                            <input className="form-input" type="text" name="marca" id="Marca" />

                        </div>

                        <div className="form-item">
                            <label className="form-label" htmlFor="Modelo">Modelo</label>
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
                                    
                                    var id = especificacao.length > 0 ? especificacao.at(-1).id_especificacao + 1 : 1;

                                    var obj = {
                                        id_especificacao: id,
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
                                        <span style={{fontWeight: 600}}>{item.especificacao}</span> - {item.especificacao_descricao}
                                        <button className="btn-remove list-btn-remove"   onClick={() => {
                                            
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
                                    
                                    var id = imagem.length > 0 ? imagem.at(-1).id_imagem + 1 : 1;

                                    var obj = {
                                        id_imagem: id,
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
                                        <button  className="btn-remove list-btn-remove"   onClick={() => {
                                            
                                            var arr = imagem;
                                            arr.splice(id, 1);
                                            SetImagem(arr);
                                        }}>X</button>
                                    </li>
                                )
                            })}
                        </div>
                    </div>
                    <hr />

                    <div className="form-context">

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

                                    var id = avaliacao.length > 0 ? avaliacao.at(-1).id_avaliacao + 1 : 1;

                                    var obj = {
                                        id_avaliacao: id,
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
                                        <button  className="btn-remove list-btn-remove"   onClick={() => {
                                            
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
                                    
                                    var id = comentario.at(-1).id_comentario + 1 || 1;

                                    var obj = {
                                        id_comentario: id,
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
                                        <button  className="btn-remove list-btn-remove"  onClick={() => {
                                            
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
                        <button className="form-button button-success" type="submit" onClick={() => {

                            document.querySelector('input[name=especificacoes]').setAttribute('value', JSON.stringify(especificacao));
                            document.querySelector('input[name=imagens]').setAttribute('value', JSON.stringify(imagem));
                            document.querySelector('input[name=avaliacoes]').setAttribute('value', JSON.stringify(avaliacao));
                            document.querySelector('input[name=commentarios]').setAttribute('value', JSON.stringify(comentario));
                        }}>Create</button>
                    </div>
                </Form>
            </div>
        </>
    )
}