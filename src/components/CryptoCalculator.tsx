import React, { useState, useEffect } from "react";

const CryptoCalculator: React.FC = () => {
  const [amount, setAmount] = useState<number>(100);
  const [price, setPrice] = useState<number>(0.0000042069);
  const [futurePrice, setFuturePrice] = useState<number>(0.000042069);
  const [tokenAmount, setTokenAmount] = useState<number>(0);
  const [futureValue, setFutureValue] = useState<number>(0);
  const [profit, setProfit] = useState<number>(0);
  const [returnPercentage, setReturnPercentage] = useState<number>(0);

  useEffect(() => {
    if (amount && price && price > 0) {
      const tokens = amount / price;
      setTokenAmount(tokens);

      if (futurePrice && futurePrice > 0) {
        const future = tokens * futurePrice;
        setFutureValue(future);

        const profitCalc = future - amount;
        setProfit(profitCalc);

        const returnPerc = (profitCalc / amount) * 100;
        setReturnPercentage(returnPerc);
      }
    }
  }, [amount, price, futurePrice]);

  return (
    <div className="bg-black/50 border border-vhs-purple/30 rounded-lg p-6 mt-8 w-full max-w-md">
      <h3 className="text-xl pixel-text text-vhs-pink mb-4">
        42069 CALCULATOR
      </h3>

      <div className="space-y-4">
        <div className="retro-gradient h-1 w-full mb-6"></div>

        <div className="space-y-2">
          <label className="block vhs-text text-gray-300">
            INVESTMENT ($):
          </label>
          <input
            type="number"
            min="0"
            value={amount}
            onChange={(e) => setAmount(parseFloat(e.target.value) || 0)}
            className="w-full bg-black/70 border border-vhs-orange/50 px-3 py-2 text-white font-mono"
          />
        </div>

        <div className="space-y-2">
          <label className="block vhs-text text-gray-300">
            CURRENT PRICE ($):
          </label>
          <input
            type="number"
            min="0"
            step="0.0000000001"
            value={price}
            onChange={(e) => setPrice(parseFloat(e.target.value) || 0)}
            className="w-full bg-black/70 border border-vhs-orange/50 px-3 py-2 text-white font-mono"
          />
        </div>

        <div className="space-y-2">
          <label className="block vhs-text text-gray-300">
            FUTURE PRICE ($):
          </label>
          <input
            type="number"
            min="0"
            step="0.0000000001"
            value={futurePrice}
            onChange={(e) => setFuturePrice(parseFloat(e.target.value) || 0)}
            className="w-full bg-black/70 border border-vhs-orange/50 px-3 py-2 text-white font-mono"
          />
        </div>

        <div className="retro-gradient h-1 w-full mt-6 mb-6"></div>

        <div className="grid grid-cols-2 gap-4">
          <div>
            <p className="vhs-text text-gray-300">TOKENS:</p>
            <p className="text-vhs-orange font-mono text-lg">
              {tokenAmount.toLocaleString(undefined, {
                maximumFractionDigits: 2,
              })}
            </p>
          </div>

          <div>
            <p className="vhs-text text-gray-300">FUTURE VALUE:</p>
            <p className="text-vhs-green font-mono text-lg">
              $
              {futureValue.toLocaleString(undefined, {
                maximumFractionDigits: 2,
              })}
            </p>
          </div>

          <div>
            <p className="vhs-text text-gray-300">PROFIT:</p>
            <p className="text-vhs-pink font-mono text-lg">
              ${profit.toLocaleString(undefined, { maximumFractionDigits: 2 })}
            </p>
          </div>

          <div>
            <p className="vhs-text text-gray-300">RETURN:</p>
            <p className="text-vhs-blue font-mono text-lg">
              {returnPercentage.toLocaleString(undefined, {
                maximumFractionDigits: 0,
              })}
              %
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CryptoCalculator;
