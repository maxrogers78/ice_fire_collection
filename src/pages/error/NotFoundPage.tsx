import { Link } from 'react-router-dom';

const NotFoundPage = () => {
  return (
    <div className="flex h-full w-full items-center justify-center">
      <div className="w-full text-center">
        <h1 className="text-9xl font-bold tracking-tighter text-red-500">
          4<span className="text-gray-900">0</span>4
        </h1>
        <h2 className="text-2xl">Página no encontrada</h2>

        <hr className="mx-auto my-8 w-1/2" />

        <p className="mx-auto mb-3 w-2/3">
          La página que intentaste acceder no se encuentra disponible o
          simplemente no existe.
        </p>
        <Link to="/" className="text-lg text-sky-500 underline">
          Volver al inicio
        </Link>
      </div>
    </div>
  );
};

export default NotFoundPage;
