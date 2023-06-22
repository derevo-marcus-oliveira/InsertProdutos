import { useEffect, useState } from "react";
import { Link, Form, redirect, useNavigate, useLoaderData, useActionData } from "react-router-dom";



export default function EnumeradorConsultar() {
    debugger

    const data = useActionData();
    const [dados, SetDados] = useState([]);
    const navigate = useNavigate()

    useEffect( () => {
        debugger
        SetDados(data || []);
        console.log(dados)
    }, [data]);

    return (
        <>
            <div className="Context">

                <Form className="form-context" method="post">
                    <div className="form-item">
                        <label className="form-label" htmlFor="identificador">Id</label>
                        <br />
                        <input className="form-input" type="text" name="id" id="identificador" />
                    </div>

                    <div className="form-item">
                        <button className="form-button button-success" type="submit">Create</button>
                    </div>
                </Form>

                {dados.length != 0 ? (
                    <Form key={1} className="form-context" method="post">
                        <div className="form-item">
                            <label className="form-label" htmlFor="id">Id</label>
                            <br />
                            <input className="form-input " type="text" name="id" id="id" value={dados[0].id} readOnly={true} />
                        </div>

                        <div className="form-item">
                            <label className="form-label" htmlFor="tipo">Tipo - <span style={{background: "black", color: "#fff", padding: "2px 16px"}}>{dados[0].tipo}</span></label>
                            <br />
                            <input className="form-input " type="text" name="tipo" id="tipo"  />
                        </div>

                        <div className="form-item">
                            <label className="form-label" htmlFor="descricao">Descrição - <span style={{background: "black", color: "#fff", padding: "2px 12px"}}>{dados[0].descricao}</span></label>
                            <br />
                            <input className="form-input " type="text" name="descricao" id="descricao"  />    
                        </div>

                        <input className="form-input" type="text" name="metodo" hidden />

                        <div className="form-item">
                            <button className="form-button button-success" onClick={async () => {
                                debugger
                                var id = document.querySelector("#id").value;
                                var tipo = document.querySelector("#tipo").value;
                                var descricao = document.querySelector("#descricao").value;

                                if (tipo == "" || descricao == "") {
                                    return false
                                }
                                else {

                                    navigate("/enum/alterar/" + JSON.stringify({ "id": id, "tipo": tipo, "descricao": descricao }))
                                }


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
                ) : (
                    <>
                        <h1>Nada</h1>
                    </>
                )}


            </div>
        </>
    )
}