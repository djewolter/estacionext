import React, { useState, useEffect } from "react";
import { useRouter } from "next/router";
import { Menu } from "./Menu";

interface Livro {
  codigo: number;
  titulo: string;
  resumo: string;
  autores: string[];
  codEditora: number;
}

const LivroDados = () => {
  const router = useRouter();

  const [livro, setLivro] = useState<Livro>({
    codigo: 0,
    titulo: "",
    resumo: "",
    autores: [],
    codEditora: 1, // Valor padrão para exemplificar, ajuste conforme necessário
  });

  const [editoras, setEditoras] = useState([]);

  useEffect(() => {
    // Aqui você deve chamar a API para obter a lista de editoras
    // Substitua este trecho de código pela lógica real de chamada à API
    const obterEditoras = async () => {
      try {
        const resposta = await fetch("http://localhost:3000/api/editoras");
        if (!resposta.ok) {
          throw new Error("Erro ao obter as editoras");
        }
        const dados = await resposta.json();
        setEditoras(dados);
      } catch (error) {
        console.error("Erro ao obter as editoras:", error);
      }
    };

    obterEditoras();
  }, []);

  const tratarCampo = (campo: keyof Livro, valor: string | string[]) => {
    setLivro((prevLivro) => ({
      ...prevLivro,
      [campo]: campo === "autores" ? (valor as string).split("\n") : valor,
    }));
  };

  const incluir = async (evento) => {
    evento.preventDefault();

    try {
      const resposta = await fetch("http://localhost:3000/api/livros", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(livro),
      });

      if (!resposta.ok) {
        throw new Error("Erro ao incluir o livro");
      }

      router.push("/");
    } catch (error) {
      console.error("Erro ao incluir o livro:", error);
    }
  };

  return (
    <>
    <Menu/>
    <main>
      <div className="container">
        <h1>Dados do Livro</h1>
        <form>
          <div className="form-group">
            <label htmlFor="titulo">Título:</label>
            <input
              type="text"
              className="form-control"
              id="titulo"
              value={livro.titulo}
              onChange={(e) => tratarCampo("titulo", e.target.value)}
            />
          </div>

          <div className="form-group">
            <label htmlFor="resumo">Resumo:</label>
            <textarea
              className="form-control"
              id="resumo"
              value={livro.resumo}
              onChange={(e) => tratarCampo("resumo", e.target.value)}
            ></textarea>
          </div>

          <div className="form-group">
            <label htmlFor="autores">Autores:</label>
            <textarea
              className="form-control"
              id="autores"
              value={livro.autores.join("\n")}
              onChange={(e) => tratarCampo("autores", e.target.value)}
            ></textarea>
          </div>

          <div className="form-group">
            <label htmlFor="codEditora">Editora:</label>
            <select
              className="form-control"
              id="codEditora"
              value={livro.codEditora}
              onChange={(e) => tratarCampo("codEditora", e.target.value)}
            >
              {editoras.map((editora) => (
                <option key={editora.codEditora} value={editora.codEditora}>
                  {editora.nome}
                </option>
              ))}
            </select>
          </div>

          <button type="submit" className="btn btn-primary" onClick={incluir}>
            Incluir Livro
          </button>
        </form>
      </div>
    </main>
    </>
  );
};

export default LivroDados;
