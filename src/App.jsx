import { useState } from 'react'
import './App.css'
import { Link, Outlet } from 'react-router-dom'

function App() {

  return (
    <>
   
      <div className='menu'>
        <div className="dropdown">
        <button className="btn btn-dark dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false">
            Produto
          </button>
          <ul className="dropdown-menu ">
            <li><Link className="dropdown-item" to={"/produto/salvar"}>Salvar</Link></li>
            <li><Link className="dropdown-item" to={"/produto/consultar"}>Consultar</Link></li>
            <li><Link className="dropdown-item" to={"/produto/listar"}>Listar</Link></li>
          </ul>
        </div>

        <div className="dropdown">
          <button className="btn btn-secondary dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
            Enumerador
          </button>
          <ul className="dropdown-menu">
            <li><Link className="dropdown-item" to={"/enum/salvar"}>Salvar</Link></li>
            <li><Link className="dropdown-item" to={"/enum/consultar"}>Consultar</Link></li>
            <li><Link className="dropdown-item" to={"/enum/listar"}>Listar</Link></li>
          </ul>
        </div>
      </div>
      <div className='context'>
        <Outlet />
      </div>
    </>
  )
}

export default App
