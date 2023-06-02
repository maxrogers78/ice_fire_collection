import { Navbar } from '.';

interface Props {
  children: JSX.Element | JSX.Element[];
}

const Layout = ({ children }: Props) => {
  return (
    <div>
      <Navbar />

      <main className="grid min-h-[calc(100vh-76px)] w-full overflow-x-hidden bg-gray-50 p-4 md:px-12 md:py-8 lg:px-24 lg:py-12">
        {children}
      </main>
    </div>
  );
};

export default Layout;
