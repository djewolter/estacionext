// Menu.tsx
import Link from 'next/link';

export const Menu: React.FC = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <div className="container">
        <Link href="/">
          <span className="navbar-brand">Loja Next</span>
        </Link>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav">
            <li className="nav-item">
              <Link href="/">
                <span className="nav-link">Home</span>
              </Link>
            </li>
            <li className="nav-item">
              <Link href="/LivroLista">
                <span className="nav-link">LivroLista</span>
              </Link>
            </li>
            <li className="nav-item">
              <Link href="/LivroDados">
                <span className="nav-link">LivroDados</span>
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

