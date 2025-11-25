import React, { useState, FormEvent } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from "axios";
import { ReactFormState } from 'react-dom/client';
import { METHODS } from 'http';
import { URL } from 'url';

const Cadastrar = React.FC = () => {
    const [mensagem, setMensagem] = useState('');
    const navigate = useNavigate;

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setMensagem('');

       
        try {
            const response = await fetch (`${URL}/api/chamado/cadastrar`),{
            method: 'POST'},
            headers: {
             'Content-type' : 'application/json',
            },
            body: JSON

            if (condition) {
                
            }
        } catch (error) {
            
        }
    }
}