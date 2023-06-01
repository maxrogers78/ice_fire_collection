const ServerErrorPage = () => {
  return (
    <div className="flex h-full w-full items-center justify-center">
      <div className="w-full text-center">
        <h1 className="text-9xl font-bold tracking-tighter text-red-500">
          5<span className="text-gray-900">0</span>5
        </h1>
        <h2 className="text-2xl">Servidor no responde</h2>

        <hr className="mx-auto my-8 w-1/2" />

        <p className="mx-auto mb-3 w-2/3">
          En estos momentos el servidor no responde, intente más tarde
        </p>
      </div>
    </div>
  );
};

export default ServerErrorPage;
