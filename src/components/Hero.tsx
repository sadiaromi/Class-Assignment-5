import { Button } from './ui/button'
import Image from 'next/image'

export default function Hero() {
  return (
    <section className="bg-[#043873] text-white py-20">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center">
          <div className="md:w-1/2 mb-8 md:mb-0">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Get More Done with whitepace</h1>
            <p className="text-balance mb-8">
              Project management software that enables your teams to collaborate, plan, analyze 
              <br />
              and manage everyday tasks</p>
            <Button size="lg" className="bg-[#4F9CF9] text-white hover:bg-[#3A89E9] text-lg px-8 py-4">
              Try Whitepace free
              <Image
                 src="/arrow.png"
                 alt="Arrow"
                 width={15}
                 height={15}
                                />  
            </Button>
          </div>
          <div className="md:w-1/2">
            <Image
              src="/container.image.png"
              alt="Hero container"
              width={685}
              height={456}
              className="w-full h-auto"
            />
          </div>
        </div>
      </div>
    </section>
    )
}