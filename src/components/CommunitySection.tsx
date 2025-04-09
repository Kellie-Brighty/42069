import React from "react";

interface SocialLink {
  name: string;
  icon: string;
  color: string;
  url: string;
}

const CommunitySection: React.FC = () => {
  const socialLinks: SocialLink[] = [
    {
      name: "X",
      icon: "X",
      color: "bg-vhs-orange",
      url: "https://x.com/coin42069eth",
    },
    {
      name: "Telegram",
      icon: "T",
      color: "bg-vhs-blue",
      url: "https://t.me/COIN42069eth",
    },
  ];

  return (
    <section className="mt-24 text-center">
      <h2 className="vhs-text text-3xl font-bold mb-8">
        JOIN THE <span className="text-vhs-orange glitch-text">COMMUNITY</span>
      </h2>

      <div className="flex flex-wrap justify-center gap-6 md:gap-8">
        {socialLinks.map((link) => (
          <a
            key={link.name}
            href={link.url}
            target="_blank"
            rel="noopener noreferrer"
            className="group"
          >
            <div className="bg-black p-4 rounded-full hover:bg-vhs-purple/20 transition-all transform group-hover:scale-110">
              <div
                className={`w-12 h-12 ${link.color} rounded-full flex items-center justify-center text-2xl font-bold text-white`}
              >
                {link.icon}
              </div>
            </div>
            <p className="mt-2 text-gray-400 group-hover:text-white transition-colors">
              {link.name}
            </p>
          </a>
        ))}
      </div>
    </section>
  );
};

export default CommunitySection;
