import { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";


export default function EnumeradorListar () {

    const data = useLoaderData();

    const [enums, SetEnum] = useState([]);

    useEffect(() => {

        SetEnum(data);
    }, [])

    return (
        <>
            <div className="Context">
            <table>
            <tr>
                <th>Id</th>
                <th>Tipo</th>
                <th>Descrição</th>
            </tr>
            {enums.map((item) => {
                return (
                    <tr>
                        <td>{item.id}</td>
                        <td>{item.tipo}</td>
                        <td>{item.descricao}</td>
                    </tr>
                );
            })}

        </table>


            </div>        
        </>
    )
}