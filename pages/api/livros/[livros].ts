// pages/api/livros/[livros].ts
import { NextApiRequest, NextApiResponse } from "next";
import ControleLivro from "../../../classes/controle/ControleLivros"; // Substitua pelo caminho real

const controleLivro = new ControleLivro();

// eslint-disable-next-line import/no-anonymous-default-export
export default async (req: NextApiRequest, res: NextApiResponse) => {
  try {
    if (req.method === "DELETE") {
      const codigoLivro = req.query.livros; // Supondo que o código do livro seja fornecido na URL
      console.log("excluido",codigoLivro)
      // Chame o método de exclusão da sua classe ControleLivro
      const livroExcluido = controleLivro.excluirLivro(Number(codigoLivro));

    //   if (!livroExcluido) {
    //     res.status(404).json({ error: "Livro não encontrado" });
    //     return;
    //   }

      res.status(201).json({ mensagem: "Livro excluído com sucesso" });
    } else {
      res.status(405).end(); // Método não permitido
    }
  } catch (error) {
    console.error(error);
    res.status(500).end(); // Erro interno do servidor
  }
};
