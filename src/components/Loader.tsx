import { AiOutlineLoading3Quarters } from 'react-icons/ai';

const Loader = () => {
  return (
    <div className="flex items-center justify-between gap-4 text-2xl text-sky-600">
      <AiOutlineLoading3Quarters className="animate-spin" />
      Winter is coming
    </div>
  );
};

export default Loader;
