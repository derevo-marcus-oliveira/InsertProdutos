import { Form } from "react-router-dom";

export default function EnumeradorSalvar() {

    return (
        <>
            <div className="Context">

                <Form className="form-context" method="post">
                    <div className="form-item">

                        <label className="form-label" htmlFor="tipo">Tipo</label>
                        <br />
                        <input className="form-input" type="text" name="tipo" id="tipo" />
                    </div>

                    <div className="form-item">
                        <label className="form-label" htmlFor="descricao">Descrição</label>
                        <br />
                        <input className="form-input" type="text" name="descricao" id="descricao" />

                    </div>

                    <div className="form-item">
                        <button className="form-button button-success" type="submit" onClick={() => {

                            if (document.querySelector("#tipo").value == "" || document.querySelector("#tipo").value == null
                                && document.querySelector("#descricao").value == "" || document.querySelector("#descricao").value == null) {
                                return false
                            }

                        }}>Create</button>
                    </div>
                </Form>

            </div>
        </>
    )
}