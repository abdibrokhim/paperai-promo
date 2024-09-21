import '../globals.css';
import Image from "next/image"; 

import whiteLogo from '../assets/logos/paperai_white.png';
import blackLogo from '../assets/logos/paperai.png';

export default function Footer() {
  return (
    <footer className="py-8 md:px-0 px-16 w-full !bg-[#1e1e1e]">
      <div className="flex flex-col md:flex-row justify-between gap-4 m-auto w-full md:w-4/5 2xl:w-3/5">
        <a className="clickable btn !border-0 bg-transparent px-0 mr-4 text-gray-700 text-xl font-black" href="/">
          <Image
            src={whiteLogo}
            width={80}
            alt="paper ai"
            className="max-w-[300px] img-shadow shrink-0 grow-0" 
            title="paper ai"
          />
        </a>
        <div className="flex flex-col md:flex-row items-left md:items-cneter gap-x-16 gap-y-4 flex-wrap text-white text-xs">
          <a className="link link-hover whitespace-nowrap" href="https://linkedin.com/company/opencommunity">terms</a>
          <a className="link link-hover whitespace-nowrap" href="https://linkedin.com/company/opencommunity">privacy policy</a>
          <a className="link link-hover whitespace-nowrap" href="https://linkedin.com/company/opencommunity">about</a>
          <p className="whitespace-nowrap">© 2024 paper ai</p>
          <div className="flex items-center gap-3"> 
            <a className="clickable" href="https://linkedin.com/company/opencommunity" target="_blank" rel="noopener noreferrer">
              <svg xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" aria-hidden="true" role="img" className="w-4 h-4 shrink-0 iconify iconify--simple-icons" width="1em" height="1em" viewBox="0 0 24 24">
                <path fill="currentColor" d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037c-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85c3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065a2.064 2.064 0 1 1 2.063 2.065m1.782 13.019H3.555V9h3.564zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0z"></path>
              </svg>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}