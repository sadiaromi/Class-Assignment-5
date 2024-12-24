import { Button } from './ui/button'
import Image from 'next/image'

export default function WorkTogether() {
  return (
    <section className="py-20">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center">
          <div className="md:w-1/2 mb-8 md:mb-0">
            <Image
              src="/worktogether.image.png"
              alt="Work together"
              width={583}
              height={542}
              className="w-full h-auto"
            />
          </div>
          <div className="md:w-1/2 md:pl-12">
          <Image
          src={"/worktogetherheading.png"}
          alt='Work Together'
          width={633}
          height={87}
          />
            <p className="text-[#212529] mb-6">
              With whitepace, share your notes with your colleagues and collaborate on
              them. You can also publish a note to the internet and share the URL with
              others.
            </p>
            <Button className="bg-[#4F9CF9] text-white hover:bg-[#3A89E9]">
              Try it now
               <Image
                  src="/arrow.png"
                  alt="Arrow"
                  width={15}
                  height={15}
              />  
            </Button>
          </div>
        </div>
      </div>
    </section>
    )
}