import React, { useState, FormEvent } from 'react';
import { useNavigate } from 'react-router-dom';
import Cadastro from '../../components/Cadastro';
import axios from "axios";

const URL = "http://localhost:5273";

function Cadastrar() {
    const [mensagem, setMensagem] = useState('');
    const Navigate = useNavigate;


    function submeterForm(e: any) {
    e.preventDefault();
    enviarChamadoAPI();
  }

  async function enviarChamadoAPI() {
    try {
      const Chamado: Chamado = { nome, id, status };
      const resposta = await axios.post(
        "http://localhost:5273/api/chamado/cadastrar",
        Chamado
      );
      navigate("/");
    } catch (error) {
      console.log("Erro na requisição: " + error);
    }
}

  return (
    <div>
      <h1>Cadastrar Chamado</h1>
      <form onSubmit={submeterForm}>
        <div>
          <label>Nome:</label>
          <input
            type="text"
            onChange={(e: any) => setNome(e.target.value)}
          />
        </div>
        <div>
          <label>Status:</label>
          <input
            type="text"
            onChange={(e: any) => setStatus(e.target.value)}
          />
          );
}