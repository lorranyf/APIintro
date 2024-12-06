import express from "express";
import dotenv from "dotenv";
import { selectUsuarios } from "./bd.js";
dotenv.config();

const app = express();              // Instancia o Express
const port = 3000;                  // Define a porta

app.get("/", (req, res) => {        // Cria a rota da raiz do projeto
  console.log("Rota GET/ solicitada");
  res.json({
    nome: "Lorrany_Fabia_santos_/_Lindha_Emanuelly_almeida",      // Substitua pelo seu nome
  });
});

import express from 'express';
import { selectUsuario, insertUsuario, deleteUsuario, updateUsuario } from './bd.js';

const app = express();
const PORT = 3000;

app.use(express.json());
app.get('/usuario/:id', async (req, res) => {
  try {
    const usuario = await selectUsuario(req.params.id);
    if (usuario.length > 0) res.json(usuario);
    else res.status(404).json({ message: 'Usuário não encontrado!' });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});
app.post('/usuario', async (req, res) => {
  try {
    await insertUsuario(req.body);
    res.status(201).json({ message: 'Usuário inserido com sucesso!' });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});
app.delete('/usuario/:id', async (req, res) => {
  try {
    const usuario = await selectUsuario(req.params.id);
    if (usuario.length > 0) {
      await deleteUsuario(req.params.id);
      res.status(200).json({ message: 'Usuário excluído com sucesso!' });
    } else res.status(404).json({ message: 'Usuário não encontrado!' });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});
app.put('/usuario/:id', async (req, res) => {
  try {
    const usuario = await selectUsuario(req.params.id);
    if (usuario.length > 0) {
      await updateUsuario(req.params.id, req.body);
      res.status(200).json({ message: 'Usuário atualizado com sucesso!' });
    } else res.status(404).json({ message: 'Usuário não encontrado!' });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

