import { NextApiRequest, NextApiResponse } from 'next';
import ControleEditora from '../../../classes/controle/ControleEditora'; // Substitua pelo caminho real

const controleEditora = new ControleEditora();

// eslint-disable-next-line import/no-anonymous-default-export
export default async (req: NextApiRequest, res: NextApiResponse) => {
  try {
    if (req.method === 'GET') {
      const editoras = controleEditora.getEditoras();
      res.status(200).json(editoras);
    } else if (req.method === 'POST') {
      // Processar a solicitação POST aqui
      const novaEditora = req.body; // Supondo que os dados da nova editora estejam no corpo da solicitação
      console.log("--------------------------------------",novaEditora)
      // controleEditora.adicionarEditora(novaEditora); // Substitua pelo método real para adicionar uma nova editora
      res.status(200).json({ mensagem: 'Editora adicionada com sucesso' })
      // res.status(200).json({ mensagem: 'Editora adicionada com sucesso' });
    } else {
      res.status(405).end(); // Método não permitido
    }
  } catch (error) {
    console.error(error);
    res.status(500).end(); // Erro interno do servidor
  }
};