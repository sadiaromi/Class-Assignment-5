import { Button } from './ui/button'
import Image from 'next/image'

export default function Project() {
  return (
    <section className="py-20">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center">
          <div className="md:w-1/2 mb-8 md:mb-0">
          <Image
          src={"/projectheading.png"}
          alt='Project logo'
          width={657}
          height={174}
           />
          <p className="text-gray-600 mb-8 text-balance">Images, videos, PDFs and audio files are supported. Create math expressions
            <br />
            and diagrams directly from the app. Take photos with the mobile app and save
            <br />
            them to a note.</p>
            <Button size="lg" className="bg-[#4F9CF9] text-white hover:bg-[#3A89E9] text-lg px-8 py-4">
            Get Started
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
              alt="Project container"
              width={719}
              height={448}
              className="w-full h-auto"
            />
          </div>
        </div>
      </div>
    </section>
    )
}