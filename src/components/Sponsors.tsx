import Image from "next/image";

const Sponsors = () => {
  const sponsors = [
    { name: "Apple", logo: "/sponsor1.png", alt: "Apple Logo" },
    { name: "Microsoft", logo: "/sponsor2.png", alt: "Microsoft Logo" },
    { name: "Slack", logo: "/sponsor3.png", alt: "Slack Logo" },
    { name: "Google", logo: "/sponsor4.png", alt: "Google Logo" },
  ];

  return (
    <section className="py-20">
      <div className="max-w-7xl mx-auto text-center">
        <Image
        src={"/Oursponsorsheading.png"}
        alt="Our Sponsors"
        width={1376}
        height={87} 
        />
        
        {/* Sponsor Logos */}
        <div className="flex flex-wrap justify-between items-center gap-20">
          {sponsors.map((sponsor, index) => (
            <div
              key={index}
              className="w-52 h-52 flex justify-center items-center"
            >
              <Image
                src={sponsor.logo}
                alt={sponsor.alt}
                width={1376}
                height={71}
                className="object-contain max-h-20"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Sponsors;