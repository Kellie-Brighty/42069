import { useState } from "react";
import "./App.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
import VHSCamera from "./components/VHSCamera";
import CommunitySection from "./components/CommunitySection";
import CAAddressCopier from "./components/CAAddressCopier";

function App() {
  const [_isWalletConnected, setIsWalletConnected] = useState(false);
  const contractAddress = "0x0000000000000000000000000000000000000000";

  const handleConnectWallet = () => {
    setIsWalletConnected(true);
    alert("Wallet connect functionality would go here");
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-[#121212] to-[#1a1a1a] text-white">
      <div className="retro-container py-8">
        {/* Header */}
        <Header onConnectWallet={handleConnectWallet} />

        {/* Main content */}
        <main className="flex flex-col md:flex-row gap-12 items-center justify-center">
          {/* VHS Camera */}
          <VHSCamera size={256} rotationSpeed={50} />

          {/* Info section */}
          <div className="max-w-xl">
            <h2 className="vhs-text text-3xl font-bold mb-4 text-vhs-pink glitch-text">
              THE FUTURE IS RETRO
            </h2>
            <p className="mb-6 text-lg">
              Step back into the 80s with the most aesthetically pleasing crypto
              experience. #42069COIN combines nostalgia with blockchain
              innovation.
            </p>
            <div className="flex flex-wrap gap-4">
              <a
                href="https://app.uniswap.org/"
                target="_blank"
                rel="noopener noreferrer"
                className="retro-button inline-block no-underline"
              >
                BUY NOW
              </a>
              <a
                href="https://www.dextools.io/"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-transparent hover:bg-vhs-purple/20 border-2 border-vhs-purple text-white font-bold py-2 px-4 rounded transition-all inline-block no-underline"
              >
                DEXTOOLS
              </a>
              <a
                href="https://dexscreener.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-transparent hover:bg-vhs-orange/20 border-2 border-vhs-orange text-white font-bold py-2 px-4 rounded transition-all inline-block no-underline"
              >
                DEXSCREENER
              </a>
            </div>

            {/* CA Address Copier */}
            <CAAddressCopier contractAddress={contractAddress} />

            {/* Social Links */}
            <div className="mt-6 flex gap-4">
              <a
                href="https://x.com/coin42069eth"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-vhs-orange transition-colors flex items-center gap-2"
              >
                <span className="w-6 h-6 bg-vhs-orange rounded-full flex items-center justify-center text-xs text-white">
                  X
                </span>
                <span className="font-mono text-sm">@coin42069eth</span>
              </a>
              <a
                href="https://t.me/COIN42069eth"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-vhs-blue transition-colors flex items-center gap-2"
              >
                <span className="w-6 h-6 bg-vhs-blue rounded-full flex items-center justify-center text-xs text-white">
                  T
                </span>
                <span className="font-mono text-sm">Telegram</span>
              </a>
            </div>
          </div>
        </main>

        {/* Features Section */}
        <section className="mt-24">
          <h2 className="vhs-text text-3xl font-bold mb-12 text-center text-vhs-blue">
            FEATURES
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Feature 1 */}
            <div className="bg-black/30 p-6 rounded-lg border border-vhs-orange/30 hover:border-vhs-orange transition-all">
              <div className="w-16 h-16 mb-4 bg-vhs-orange/20 rounded-lg flex items-center justify-center">
                <span className="text-3xl font-bold text-vhs-orange">1</span>
              </div>
              <h3 className="text-xl font-bold mb-2 text-white">Retro Vibes</h3>
              <p className="text-gray-400">
                Nostalgic design with modern functionality. A perfect blend of
                old and new.
              </p>
            </div>

            {/* Feature 2 */}
            <div className="bg-black/30 p-6 rounded-lg border border-vhs-purple/30 hover:border-vhs-purple transition-all">
              <div className="w-16 h-16 mb-4 bg-vhs-purple/20 rounded-lg flex items-center justify-center">
                <span className="text-3xl font-bold text-vhs-purple">2</span>
              </div>
              <h3 className="text-xl font-bold mb-2 text-white">
                Strong Community
              </h3>
              <p className="text-gray-400">
                Join thousands of retro enthusiasts and crypto lovers in our
                growing ecosystem.
              </p>
            </div>

            {/* Feature 3 */}
            <div className="bg-black/30 p-6 rounded-lg border border-vhs-blue/30 hover:border-vhs-blue transition-all">
              <div className="w-16 h-16 mb-4 bg-vhs-blue/20 rounded-lg flex items-center justify-center">
                <span className="text-3xl font-bold text-vhs-blue">3</span>
              </div>
              <h3 className="text-xl font-bold mb-2 text-white">
                Innovative Tech
              </h3>
              <p className="text-gray-400">
                Cutting-edge blockchain technology with a focus on security and
                transparency.
              </p>
            </div>
          </div>
        </section>

        {/* Community Section */}
        <CommunitySection />

        {/* Footer */}
        <Footer />
      </div>
    </div>
  );
}

export default App;
