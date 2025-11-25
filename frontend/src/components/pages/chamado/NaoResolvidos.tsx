import React, { useState, FormEvent } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from "axios";

const handleAlterarStatus = async (chamadoId: number) => {
    try { const response = await fetch(`${API_URL}/api/chamado/alterar`, {
            method: 'PATCH',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ id: chamadoId }), // JSON enviado: { "id": 123 }
        });

        if (response.ok) {
            alert(`Status do chamado ${chamadoId} alterado com sucesso!`);
             fetchChamados(); 
        } else {
            const errorText = await response.text();
            alert(`Erro ao alterar status: ${errorText || response.statusText}`);
        }
    } catch (error) {
        console.error('Erro de conexão ao tentar alterar o status.', error);
        alert('Erro de conexão com a API.');
    }
};