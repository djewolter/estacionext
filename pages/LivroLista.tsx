import type { NextPage, GetStaticProps } from 'next';
import React from 'react';
import { Menu } from './Menu';
import styles from "../styles/table.module.css";


interface Livro {
  codigo: number;
  titulo: string;
  resumo: string;
  autores: string[];
  codEditora: number;
}

interface LivroListaProps {
  livros: Livro[];
}

const LivroLista: NextPage<LivroListaProps> = ({ livros }) => {
  const excluirLivro = async (codigo: number) => {
    try {
      const resposta = await fetch(`http://localhost:3000/api/livros/${codigo}`, {
        method: 'DELETE',
      });

      if (!resposta.ok) {
        throw new Error('Erro ao excluir o livro');
      }

      // Recarrega a página após a exclusão
      window.location.reload();
    } catch (error) {
      console.error('Erro ao excluir o livro:', error);
    }
  };

  return (
    <>
    <Menu/>
    <main>
      <div className="container">
        <h1>Catálogo de livros</h1>
        <table className="table table-hover">
          <thead className={styles.theadCustom}>
            <tr>
              <th scope="col">Titulo</th>
              <th scope="col">Resumo</th>
              <th scope="col">Editora</th>
              <th scope="col">Autores</th>
              <th scope="col">Ação</th>
            </tr>
          </thead>
          <tbody>
            {livros.map((livro) => (
              <tr key={livro.codigo}>
                <td className="td-titulo">{livro.titulo}</td>
                <td>{livro.resumo}</td>
                <td>{livro.codEditora}</td>
                <td>{livro.autores.join(', ')}</td>
                <td>
                  <button
                    type="button"
                    className="btn btn-danger btn-sm td-button"
                    onClick={() => excluirLivro(livro.codigo)}
                  >
                    Excluir
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </main>
    </>
  );
};

export const getStaticProps: GetStaticProps<LivroListaProps> = async () => {
  try {
    const respostaApi = await fetch('http://localhost:3000/api/livros');

    if (!respostaApi.ok) {
      throw new Error('Erro ao obter os dados da API');
    }

    const data = await respostaApi.json();
    const livros: Livro[] = data;

    return {
      props: {
        livros,
      },
    };
  } catch (error) {
    console.error('Erro durante a obtenção dos dados:', error);
    return {
      props: {
        livros: [],
      },
    };
  }
};

export default LivroLista;
