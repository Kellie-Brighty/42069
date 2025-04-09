import { useState, useEffect } from "react";

interface VHSCameraProps {
  size?: number;
  rotationSpeed?: number;
}

const VHSCamera = ({ size = 256, rotationSpeed = 50 }: VHSCameraProps) => {
  const [rotate, setRotate] = useState(0);
  const [isGlitching, setIsGlitching] = useState(false);
  const [time, setTime] = useState("00:00:00");
  const [isRecording, setIsRecording] = useState(true);

  useEffect(() => {
    // Rotation animation
    const rotationInterval = setInterval(() => {
      setRotate((prev) => (prev + 1) % 360);
    }, rotationSpeed);

    // Random glitch effect
    const glitchInterval = setInterval(() => {
      if (Math.random() > 0.7) {
        setIsGlitching(true);
        setTimeout(() => setIsGlitching(false), 200 + Math.random() * 300);
      }
    }, 2000);

    // Recording blink effect
    const recordingInterval = setInterval(() => {
      setIsRecording((prev) => !prev);
    }, 1000);

    // Time counter
    const timeInterval = setInterval(() => {
      const date = new Date();
      const hours = String(date.getHours()).padStart(2, "0");
      const minutes = String(date.getMinutes()).padStart(2, "0");
      const seconds = String(date.getSeconds()).padStart(2, "0");
      setTime(`${hours}:${minutes}:${seconds}`);
    }, 1000);

    return () => {
      clearInterval(rotationInterval);
      clearInterval(glitchInterval);
      clearInterval(recordingInterval);
      clearInterval(timeInterval);
    };
  }, [rotationSpeed]);

  return (
    <div className="relative" style={{ width: size, height: size }}>
      {/* VHS Camera */}
      <div
        className={`w-full h-full border-4 border-vhs-purple bg-black rounded-lg relative overflow-hidden transform transition-transform ${
          isGlitching ? "translate-x-1" : ""
        }`}
        style={{ transform: `rotate(${rotate}deg)` }}
      >
        {/* Lens */}
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="w-16 h-16 bg-vhs-orange rounded-full animate-pulse-slow" />
        </div>

        {/* Record light */}
        <div
          className={`absolute top-2 right-2 w-4 h-4 ${
            isRecording ? "bg-red-500" : "bg-red-800"
          } rounded-full transition-colors`}
        />

        {/* VHS Label */}
        <div className="absolute bottom-3 left-0 right-0 flex justify-center">
          <div className="bg-black/60 px-2 py-1 rounded">
            <p className="font-mono text-xs text-white">
              REC {isRecording ? "●" : ""}
            </p>
          </div>
        </div>

        {/* Time Code */}
        <div className="absolute top-3 left-3">
          <p className="font-mono text-xs text-white bg-black/60 px-2 py-1 rounded">
            {time}
          </p>
        </div>

        {/* VHS lines */}
        <div className="absolute inset-0 opacity-20">
          {Array.from({ length: 10 }).map((_, index) => (
            <div
              key={index}
              className="w-full h-1 bg-white opacity-50"
              style={{ position: "absolute", top: `${index * 10}%` }}
            />
          ))}
        </div>
      </div>

      {/* Tape texture overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/0 to-black/40 pointer-events-none" />

      {/* Glitch effect */}
      {isGlitching && (
        <div className="absolute inset-0 bg-vhs-purple/20 mix-blend-screen z-10" />
      )}

      {/* VHS Brand Label */}
      <div className="absolute bottom-[-20px] left-1/2 transform -translate-x-1/2">
        <p className="pixel-text text-xs bg-vhs-purple text-white px-3 py-1 rounded-full">
          RETRO-VHS
        </p>
      </div>
    </div>
  );
};

export default VHSCamera;
