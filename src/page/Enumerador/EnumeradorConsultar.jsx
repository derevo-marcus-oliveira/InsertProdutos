import { Link } from "react-router-dom";



export default function EnumeradorConsultar() {

    return (
        <>
            <div className="Context">

                <Form method="post">
                    <div className="form-item">

                        <label className="form-label" htmlFor="id">Id</label>
                        <br />
                        <input className="form-input" type="text" name="id" id="id" />
                    </div>

                    <div className="form-item">
                        <button className="form-button button-success" type="submit">Create</button>
                    </div>
                </Form>


                <Form method="post">
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
                        <button className="form-button button-success" type="submit">Create</button>
                    </div>
                </Form>


            </div>
        </>
    )
}