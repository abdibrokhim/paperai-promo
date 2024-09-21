'use client'

import '../globals.css';

interface ProductsSheetProps {
  toggleProducts: () => void;
}

export default function ProductsSheet({ toggleProducts }: ProductsSheetProps) {

  return (
    <div className="px-16 fixed inset-0 bg-white z-50 flex flex-col items-center justify-center transition-transform transform translate-y-0">
      <button
        className="absolute top-4 right-4 text-black text-[32px] font-black"
        onClick={toggleProducts}
      >
        &times;
      </button>
      <div className="flex md:flex-row flex-col gap-32 items-center justify-center space-x-4">
        <a className="btn text-gray-700 text-md font-bold" href="https://ipaperai.vercel.app/">paper ai app</a>
        <a className="btn text-gray-700 text-md font-bold" href="https://github.com/abdibrokhim/paperai-chrome-extension">paper ai extension</a>
      </div>
    </div>
  );
}
