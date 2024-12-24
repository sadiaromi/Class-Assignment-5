import { Button } from './ui/button'
import Image from 'next/image'

export default function EveryWhere() {
  return (
    <section className="bg-[#043873] text-white py-20">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center">
          <Image
          src={"/everywhereheading.png"}
          alt="Every Where"
          width={1064}
          height={87}
          />
          <p className="text-[#FFFFFF] font-normal mb-8 mt-4">Access your notes from your computer, phone or tablet by synchronising with various services, including whitepace, Dropbox and
            OneDrive. The app is available on Windows, macOS, Linux, Android and iOS. A terminal app is also available!</p>
          <Button size="lg" className="bg-[#4F9CF9] text-white hover:bg-[#3A89E9] text-lg px-8 py-4">
            Try Taskey
             <Image
                src="/arrow.png"
                alt="Arrow"
                width={15}
                height={15}
            />  
          </Button>
        </div>
      </div>
    </section>
    )
}