import React, { useState } from "react";

interface CAAddressCopierProps {
  contractAddress: string;
}

const CAAddressCopier: React.FC<CAAddressCopierProps> = ({
  contractAddress,
}) => {
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText(contractAddress);
    setCopied(true);

    setTimeout(() => {
      setCopied(false);
    }, 2000);
  };

  // Format the address to show only first 6 and last 4 characters
  const formatAddress = (address: string): string => {
    if (!address || address.length < 12) return address;
    return `${address.substring(0, 6)}...${address.substring(
      address.length - 4
    )}`;
  };

  return (
    <div className="mt-6">
      <h3 className="pixel-text text-vhs-orange mb-3">CONTRACT ADDRESS</h3>

      <div className="relative">
        <div className="bg-black/70 border border-vhs-orange/50 rounded px-3 py-2 font-mono text-white overflow-hidden whitespace-nowrap text-ellipsis flex items-center">
          <div className="w-4 h-4 bg-vhs-green rounded-full animate-pulse mr-2"></div>
          <span className="hidden sm:inline">{contractAddress}</span>
          <span className="sm:hidden">{formatAddress(contractAddress)}</span>
        </div>

        <button
          onClick={handleCopy}
          className={`absolute right-0 top-0 bottom-0 px-4 ${
            copied ? "bg-vhs-green" : "bg-vhs-orange"
          } text-white font-bold transition-all duration-300`}
        >
          {copied ? "COPIED!" : "COPY"}
        </button>
      </div>

      <div className="mt-2 text-xs text-gray-400 font-mono">
        {copied ? (
          <span className="text-vhs-green">✓ Copied to clipboard!</span>
        ) : (
          <span>Click to copy the contract address</span>
        )}
      </div>
    </div>
  );
};

export default CAAddressCopier;
