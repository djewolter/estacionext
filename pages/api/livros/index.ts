// Importar módulos necessários
import { NextApiRequest, NextApiResponse } from 'next';
import ControleLivro from '../../../classes/controle/ControleLivros'; // Substitua pelo caminho correto

// Inicializar instância de ControleLivro
const controleLivro = new ControleLivro();


// import { NextApiRequest, NextApiResponse } from 'next';
// import ControleEditora from '../../../classes/controle/ControleEditora'; // Substitua pelo caminho real

// export const controleEditora = new ControleEditora();

// eslint-disable-next-line import/no-anonymous-default-export
export default async (req: NextApiRequest, res: NextApiResponse) => {
  try {
    if (req.method === 'GET') {
      const livros = controleLivro.obterLivros()
      
      res.status(200).json(livros);
    }else if (req.method === 'POST') {
        // Processar a solicitação POST aqui
        const novoLivro = req.body; // Supondo que os dados da nova editora estejam no corpo da solicitação
        console.log("--------------------------------------",novoLivro)
        const livros = controleLivro.incluirLivro(novoLivro)
        res.status(201).json({ mensagem: 'livro adicionadoa com sucesso' })     
      } else {
        res.status(405).end(); // Método não permitido
      }
  } catch (error) {
    console.error(error);
    res.status(500).end(); // Erro interno do servidor
  }
};
