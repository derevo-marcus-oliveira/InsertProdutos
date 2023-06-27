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
        element: <ProdutoLista />,
        loader: async () => {

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

        }
      },
      {
        path: "/produto/consultar",
        element: <ProdutoConsultar />,
        action: async ({ request, params }) => {

          const formData = await request.formData();
          const data = Object.fromEntries(formData);
          var dados;
          await axios.get("http://localhost:4003/Buscar" + data.id_consulta)
            .then((response) => {
              dados = response.data
            })
            .catch((error) => {
              console.log(error)
            });

          return dados
        }
      },
      {
        path: "/produto/salvar",
        element: <ProdutoSalvar />,
        loader: async () => {

          var dados;

          await axios("http://localhost:4003/BuscarEnum", {
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
        action: async ({ request, params }) => {

          const formData = await request.formData();
          const data = Object.fromEntries(formData);

          if (data.especificacoes) {
            data.especificacoes = JSON.parse(data.especificacoes);
          }

          if (data.imagens) {
            data.imagens = JSON.parse(data.imagens);
          }

          if (data.avaliacoes) {
            data.avaliacoes = JSON.parse(data.avaliacoes);
          }

          if (data.commentarios) {
            data.commentarios = JSON.parse(data.commentarios);
          }


          await axios.post("http://localhost:4003/Adicionar", data)
            .then((response) => {
              console.log("Sucesso", response)
            })
            .catch((error) => {
              console.log("Erro", error)
            });

          return []
        }
      },
      {
        path: "/produto/alterar/",
        element: <ProdutoConsultar />,
        action: async ({ request, params }) => {
          debugger
          const formData = await request.formData();
          const data = Object.fromEntries(formData);

          if (data.especificacoes) {
            data.especificacoes = JSON.parse(data.especificacoes);
          }

          if (data.imagens) {
            data.imagens = JSON.parse(data.imagens);
          }

          if (data.avaliacoes) {
            data.avaliacoes = JSON.parse(data.avaliacoes);
          }

          if (data.commentarios) {
            data.commentarios = JSON.parse(data.commentarios);
          }


          await axios.post("http://localhost:4003/Alterar", data)
            .then((response) => {
              console.log("Sucesso", response)
            })
            .catch((error) => {
              console.log("Erro", error)
            });

          return []
        }
      },
      {
        path: "/enum/listar",
        element: <EnumeradorListar />,
        loader: async () => {

          var dados;

          await axios("http://localhost:4003/BuscarEnum", {
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

        }
      },
      {
        path: "/enum/consultar",
        element: <EnumeradorConsultar />,
        action: async ({ request, params }) => {

          const formData = await request.formData();
          const data = Object.fromEntries(formData);

          var dados;

          await axios.get("http://localhost:4003/BuscarEnum" + data.id)
            .then((response) => {
              dados = response.data
            })
            .catch((error) => {
              console.log(error)
            });

          return dados
        }
      },
      {
        path: "/enum/salvar",
        element: <EnumeradorSalvar />,
        action: async ({ request, params }) => {

          const formData = await request.formData();
          const data = Object.fromEntries(formData);

          await axios.post("http://localhost:4003/AdicionarEnum", data)
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
        path: "/enum/excluir/:id",
        element: <EnumeradorConsultar />,
        loader: async ({ request, params }) => {

          var dados;

          await axios.delete("http://localhost:4003/ExcluirEnum", {
            data: {
              id: params.id
            }
          })
            .then((response) => {
              dados = response.data
            })
            .catch((error) => {
              console.log(error)
            });

          return dados
        }
      },
      {
        path: "/enum/alterar/:enum",
        element: <EnumeradorConsultar />,
        action: async ({ request, params }) => {

          const data = JSON.parse(params.enum);

          await axios.post("http://localhost:4003/AlterarEnum", {
            id: data.id,
            tipo: data.tipo,
            descricao: data.descricao
          })
            .then((response) => {
              console.log("Sucesso")
            })
            .catch((error) => {
              console.log(error)
            });

          return []
        }
      },
    ]
  }
])


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
