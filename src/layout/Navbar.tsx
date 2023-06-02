import { Link } from 'react-router-dom';
import { useBook } from '../hooks';

const Navbar = () => {
  const { favoriteBooks } = useBook();

  return (
    <header className="flex h-[76px] w-full items-center justify-between px-4 py-6 md:px-12 lg:px-24">
      <Link to="/" className="text-xl font-bold">
        <span className="text-sky-400">Ice</span>
        <span className="text-base">&</span>
        <span className="text-red-500">Fire</span>Collection
      </Link>

      <ul>
        <li>
          <Link to="/favorites" className="hover:text-sky-500">
            Favoritos ({favoriteBooks.length})
          </Link>
        </li>
      </ul>
    </header>
  );
};

export default Navbar;
