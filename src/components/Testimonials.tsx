import Image from 'next/image';

export default function Testimonials() {
  const testimonials = [
    {
      name: 'Oberon Shaw, MCH',
      role: 'Head of Talent Acquisition, North America',
      content: 'Whitepace is designed as a collaboration tool for businesses that is a full project management solution.',
      image: '/client1.png',
    },
    {
      name: 'Oberon Shaw, MCH',
      role: 'Head of Talent Acquisition, North America',
      content: 'Whitepace is designed as a collaboration tool for businesses that is a full project management solution.',
      image: '/client2.png',
    },
    {
      name: 'Oberon Shaw, MCH',
      role: 'Head of Talent Acquisition, North America',
      content: 'Whitepace is designed as a collaboration tool for businesses that is a full project management solution.',
      image: '/client3.png',
    },
  ];

  return (
    <section className="py-20 bg-gradient-to-r from-gray-200 via-white to-gray-200">
      <div className="container mx-auto px-6">
        <Image
        src={"/clientheading.png"}
        alt='Our Client'
        width={1376}
        height={84}
        />
        

        {/* Testimonial Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-10">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className={`rounded-3xl shadow-lg p-8 relative ${
                index === 0
                  ? 'bg-white text-black'
                  : index === 1
                  ? 'bg-[#4F9CF9] text-white'
                  : 'bg-[#4F9CF9] text-white'
              }`}
            >
              {/* Quote Icon */}
              <div className="absolute top-6 left-6 text-5xl font-bold opacity-20">
                “
              </div>

              {/* Testimonial Content */}
              <p className="mt-8 mb-8 text-lg leading-relaxed">
                {testimonial.content}
              </p>

              {/* Profile Section */}
              <div className="flex items-center">
                <Image
                  src={testimonial.image}
                  alt={testimonial.name}
                  width={80}
                  height={80}
                  className="w-20 h-20 rounded-full object-cover mr-4"
                />
                <div>
                  <h3 className="font-bold text-lg">
                    {testimonial.name}
                  </h3>
                  <p className="text-sm opacity-80">{testimonial.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
    );
}