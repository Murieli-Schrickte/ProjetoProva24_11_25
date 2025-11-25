import React from "react";
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import Abertos from './components/pages/chamado/Abertos'; 
import Alterar from './components/pages/chamado/Alterar';
import Cadastrar from './components/pages/chamado/Cadastrar';
import Listar from './components/pages/chamado/Listar';
import Resolvidos from './components/pages/chamado/Resolvidos';

const App: React.FC = () => {
    return (
        <BrowserRouter>
            <div className="App">
                <nav>
                    <ul>
                        <li>
                            <Link to="/">Cadastro de chamado</Link>
                        </li>
                         <li>
                            <Link to="/abertos">Chamados abertos</Link>
                        </li>
                         <li>
                            <Link to="/alterar">Alterar chamado</Link>
                        </li>
                         <li>
                            <Link to="/listar">Lista</Link>
                        </li>
                         <li>
                            <Link to="/resolvidos">Resolvidos</Link>
                        </li>
                    </ul>
                </nav>
                <Routes>
                    <Route path="/" element={<cadastrar />} />
                    <Route path="/abertos" element={<abertos />} />
                    <Route path="/alterar" element={<alterar />} />
                    <Route path="/listar" element={<listar />} />
                    <Route path="/resolvidos" element={<resolvidos />} />
                </Routes>
            </div>
        </BrowserRouter>
    );
};

export default App;