import { Navbar } from '.';

interface Props {
  children: JSX.Element | JSX.Element[];
}

const Layout = ({ children }: Props) => {
  return (
    <div>
      <Navbar />

      <main className="grid min-h-[calc(100vh-76px)] bg-gray-50 px-24 py-12">
        {children}
      </main>
    </div>
  );
};

export default Layout;
