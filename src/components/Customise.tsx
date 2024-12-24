import { Button } from './ui/button';
import Image from 'next/image';

export default function Customise() {
  return (
    <section className="py-20">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center">
          <div className="md:w-1/2 mb-8 md:mb-0">
            <Image
              src="/container.image.png"
              alt="Customise illustration"
              width={670}
              height={500}
              className="w-full h-auto"
            />
          </div>
          <div className="md:w-1/2 md:pl-12">
            <Image
              src="/customiseheading.png"
              alt="Customise heading"
              width={646}
              height={174}
            />
            <p className="text-[#212529] mb-6">
              Customise the app with plugins, custom themes, and multiple text editors (Rich Text or Markdown). Or create your own scripts and plugins using the Extension API.
            </p>
            <Button className="bg-[#4F9CF9] text-white hover:bg-[#3A89E9] flex items-center space-x-2">
              <span>Let&apos;s Go</span>
              <Image
                src="/arrow.png"
                alt="Arrow pointing to the right"
                width={15}
                height={15}
              />
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
