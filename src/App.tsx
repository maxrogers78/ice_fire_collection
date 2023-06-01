import { Routes, Route } from 'react-router-dom';
import { Layout } from './layout';
import {
  BooksPage,
  FavoriteBooksPage,
  NotFoundPage,
  ServerErrorPage
} from './pages';

const App = () => {
  return (
    <Routes>
      <Route
        path="/"
        element={
          <Layout>
            <BooksPage />
          </Layout>
        }
      />

      <Route
        path="/favorites"
        element={
          <Layout>
            <FavoriteBooksPage />
          </Layout>
        }
      />

      <Route
        path="500"
        element={
          <Layout>
            <ServerErrorPage />
          </Layout>
        }
      />

      <Route
        path="*"
        element={
          <Layout>
            <NotFoundPage />
          </Layout>
        }
      />
    </Routes>
  );
};

export default App;
