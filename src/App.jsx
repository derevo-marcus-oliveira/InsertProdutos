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


/* 
4 soquetes DDR4 DIMM que suportam até 128 GB (capacidade DIMM única de 32 GB) de memória do sistema
- Processadores AMD Ryzen ™ de 3ª geração: Suporte para módulos de memória DDR4 4000 (OC) / 3600 (OC) / 3333 (OC) / 3200/2933/2667/2400/2133 MHz
- Nova geração de processadores AMD Ryzen ™ com Radeon ™ Graphics: Suporte para DDR4 4733 (OC) / 4600 (OC) / 4400 (OC) / 4000 (OC) / 3600 (OC) / 3333 (OC) / 3200/2933/2667 / Módulos de memória 2400/2133 MHz
- Arquitetura de memória de canal duplo
- Suporte para módulos de memória ECC sem buffer DIMM 1Rx8 / 2Rx8
- Suporte para módulos de memória DIMM 1Rx8 / 2Rx8 / 1Rx16 sem buffer ECC
- Suporte para módulos de memória Extreme Memory Profile (XMP)


*/