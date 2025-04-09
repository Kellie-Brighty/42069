import React from "react";

interface HeaderProps {
  onConnectWallet: () => void;
}

const Header: React.FC<HeaderProps> = ({  }) => {
  return (
    <header className="flex flex-col sm:flex-row justify-between items-center mb-12 pt-6">
      <div className="mb-4 sm:mb-0">
        <h1 className="font-retro text-2xl md:text-4xl leading-relaxed">
          <span className="glitch-text text-vhs-orange">#42069</span>
          <span className="text-vhs-purple">COIN</span>
        </h1>
        <p className="text-sm text-gray-400 mt-1 font-mono">
          The most aesthetically pleasing memecoin
        </p>
      </div>

      <div className="flex gap-4">
        <button className="bg-transparent hover:bg-vhs-purple/20 border-2 border-vhs-purple text-white font-bold py-2 px-4 rounded transition-all pixel-text text-xs">
          BUY NOW
        </button>
      </div>
    </header>
  );
};

export default Header;
