import { Routes, Route } from 'react-router-dom';
import { Layout } from './layout';
import { BooksPage, NotFoundPage } from './pages';

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
