import { Button } from './ui/button'
import Image from 'next/image'

export default function UseAsExtension() {
  return (
    <section className="bg-[#043873] text-white py-20">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center">
          <div className="md:w-1/2 mb-8 md:mb-0 order-2 md:order-1">
          <Image
          src={"/useextensionheading.png"}
          alt='Use extension'
          width={592}
          height={87}
          />
            <p className="mb-6">Use the web clipper extension, available on Chrome and Firefox, to save
              <br />
              web pages or take screenshots as notes.</p>
            <Button className="bg-[#4F9CF9] hover:bg-[#3A89E9]">Let's Go
               <Image
                  src="/arrow.png"
                  alt="Arrow"
                  width={15}
                  height={15}
              />  
            </Button>
          </div>
          <div className="md:w-1/2 md:pl-12 order-1 md:order-2">
            <Image
              src="/container.image.png"
              alt="Extension container"
              width={686}
              height={479}
              className="w-full h-auto"
            />
          </div>
        </div>
      </div>
    </section>
    )
}