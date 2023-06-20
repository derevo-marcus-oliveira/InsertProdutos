import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import axios from 'axios';

// Produto
import ProdutoConsultar from './page/Produto/ProdutoConsultar.jsx';
import ProdutoLista from './page/Produto/ProdutoListar.jsx';
import ProdutoSalvar from './page/Produto/ProdutoSalvar.jsx';

// Enumerador
import EnumeradorConsultar from './page/Enumerador/EnumeradorConsultar.jsx';
import EnumeradorSalvar from './page/Enumerador/EnumeradorSalvar.jsx';
import EnumeradorListar from './page/Enumerador/EnumeradorListar.jsx';

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        index: true,
        path: "/produto/listar",
        loader: async () => {
          debugger
          var dados;

          await axios("http://localhost:4003/Buscar", {
            method: "GET",
            headers: { 'Content-Type': 'application/json' }
          })
            .then((response) => {

              dados = response.data
            })
            .catch((error) => {
              console.log(error)
            });

          return dados;

        },
        element: <ProdutoLista />,
      },
      {
        path: "/produto/consultar",
        element: <ProdutoConsultar />,
        action: async ({ request, params }) => {
          debugger
          const formData = await request.formData();
          const data = Object.fromEntries(formData);

          await axios.get("http://localhost:4003/Buscar"+data.id_consulta)
            .then((response) => {
              debugger
              dados = response.data
            })
            .catch((error) => {
              console.log(error)
            });

          return []
        }
      },
      {
        path: "/produto/salvar",
        element: <ProdutoSalvar />,
        action: async ({ request, params }) => {

          const formData = await request.formData();
          const data = Object.fromEntries(formData);

          data.especificacoes = JSON.parse(data.especificacoes);
          data.imagens = JSON.parse(data.imagens);
          data.avaliacoes = JSON.parse(data.avaliacoes);
          data.commentarios = JSON.parse(data.commentarios);

          await axios.post("http://localhost:4003/Adicionar", data)
            .then((response) => {
              console.log("Sucesso", response)
            })
            .catch((error) => {
              console.log("Erro", error)
            })

          return []
        }
      },
      {
        path: "/enum/listar",
        element: <EnumeradorListar />,
        loader: async () => {

          return [];
        }
      },
      {
        path: "/enum/consultar",
        element: <EnumeradorConsultar />,
      },
      {
        path: "/enum/manipulsalvarar",
        element: <EnumeradorSalvar />,
      }
    ]
  }
])


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
