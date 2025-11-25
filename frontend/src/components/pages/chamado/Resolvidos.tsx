import React, { useState, FormEvent } from 'react';
import { useNavigate } from 'react-router-dom';

const URL = "http://localhost:5273";

const ChamadosResolvidos: React.FC = () => {
    const [chamado, setChamado] = useState<Chamado[]>([]);
    const [carregar, setCarregar] = useState(true);

    const fetchChamados = async () => {
        setCarregar(true);
        try {
            const response = await fetch(`${URL}/api/`)
        } catch (error) {
            
        }
    }
}