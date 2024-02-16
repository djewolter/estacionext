// LinhaLivro.tsx
import  Livro  from '../classes/controle/ControleLivros'; // Substitua pelo caminho real
import  ControleEditora  from '../classes/controle/ControleEditora'; // Substitua pelo caminho real

const controleEditora = new ControleEditora();

interface LinhaLivroProps {
  livro: Livro;
  excluir: () => void;
}

export const linhaLivro: React.FC<LinhaLivroProps> = (props) => {
  const { livro, excluir } = props;

  return (
    <tr>
      <td>{livro.titulo}</td>
      <td>{livro.autor}</td>
      {/* <td>{controleEditora.getNomeEditora(livro)}</td> */}
      <td>{livro.anoPublicacao}</td>
      <td>
        <button onClick={excluir}>Excluir</button>
      </td>
    </tr>
  );
};
