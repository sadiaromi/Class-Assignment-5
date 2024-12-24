import { Button } from './ui/button'
import Image from 'next/image'

export default function FavoriteApps() {
  
  return (
    <section className="bg-[#043873] text-white py-20">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center">
        <div className="md:w-1/2 mb-8 md:mb-0">
                  <Image
                    src={"/favoriteapps.png"}
                    alt={"Favorite apps"}
                    width={582}
                    height={470}
                    className="w-full h-auto"
                  />
                </div>
          <div className="md:w-1/2 mb-8 md:mb-0 lg:pl-28">
            <h2 className="text-5xl font-bold mb-4">Work with Your
              <br />
              Favorite Apps Using
              <br />
              whitepace</h2>
            <p className="mb-8">Whitepace teams up with your favorite software. Integrate with over 1000+ apps with Zapier to have all the tools you need for your project success.</p>
            
            <Button className="bg-[#4F9CF9] hover:bg-[#3A89E9]">Read more
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