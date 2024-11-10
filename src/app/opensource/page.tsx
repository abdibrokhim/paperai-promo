import Image from "next/image"; 
import '../globals.css';

import Footer from '../components/footer';
import HeaderPrimary from '../components/header.primary';
import { Analytics } from '@vercel/analytics/react';

export default function News() { 
  return (
    <div className="flex flex-col min-h-screen">
      <Analytics />
      <HeaderPrimary />
      <main className="flex-1 flex flex-col gap-16 px-4 md:px-0 py-24 m-auto w-full md:w-4/5 2xl:w-3/5">
        <div className="flex flex-col md:flex-row justify-center items-center gap-16">
          <div className="text-center flex md:flex-col flex-col gap-2 h-full justify-center items-center py-32">
            <p>made with 💜 for Open Source 🐐</p>
            <p><a href="https://github.com/abdibrokhim/paper-ai-voice-assistant" target="_blank" className="underline">git clone</a> paper ai webapp</p>
            <p><a href="https://github.com/abdibrokhim/paperai-chrome-extension" target="_blank" className="underline">git clone</a> paper ai chrome extension</p>
          </div>
        </div>
      </main>
      <Footer />
    </div> 
  ); 
}
