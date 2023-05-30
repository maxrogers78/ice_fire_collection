import { Link } from 'react-router-dom';
import { useBook } from '../hooks';

const Navbar = () => {
  const { favoriteBooks } = useBook();

  return (
    <header className="flex h-[76px] w-full items-center justify-between px-24 py-6">
      <Link to="/" className="text-xl font-bold">
        <span className="text-sky-400">Ice</span>
        <span className="text-base">&</span>
        <span className="text-red-500">Fire</span>Collection
      </Link>

      <ul>
        <li>Favoritos ({favoriteBooks.length})</li>
      </ul>
    </header>
  );
};

export default Navbar;
