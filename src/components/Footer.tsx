import React from "react";

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="mt-24 mb-8 text-center text-gray-400">
      <div className="retro-gradient h-1 w-32 mx-auto mb-8"></div>

      {/* Social Links */}
      <div className="flex justify-center gap-6 mb-8">
        <a
          href="https://x.com/coin42069eth"
          target="_blank"
          rel="noopener noreferrer"
          className="bg-black/30 p-3 rounded-full hover:bg-vhs-orange/20 transition-all"
        >
          <div className="w-8 h-8 bg-vhs-orange rounded-full flex items-center justify-center text-lg font-bold text-white">
            X
          </div>
        </a>
        <a
          href="https://t.me/COIN42069eth"
          target="_blank"
          rel="noopener noreferrer"
          className="bg-black/30 p-3 rounded-full hover:bg-vhs-blue/20 transition-all"
        >
          <div className="w-8 h-8 bg-vhs-blue rounded-full flex items-center justify-center text-lg font-bold text-white">
            T
          </div>
        </a>
      </div>

      <p className="vhs-text">© {currentYear} #42069COIN</p>
      <p className="text-xs mt-2 font-mono">
        0x0000000000000000000000000000000000000000
      </p>
    </footer>
  );
};

export default Footer;
