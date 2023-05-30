import { BrowserRouter } from 'react-router-dom';
import App from './App';
import { BookProvider } from './context';

const AppProviders = () => (
  <BrowserRouter>
    <BookProvider>
      <App />
    </BookProvider>
  </BrowserRouter>
);

export default AppProviders;
