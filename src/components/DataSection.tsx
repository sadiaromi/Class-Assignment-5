import { Button } from './ui/button';
import Image from 'next/image';

export default function DataSection() {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center">
          <div className="md:w-1/2 md:pl-12">
            <Image
              src="/dataheading.png"
              alt="Heading: 100% Data"
              width={695}
              height={87}
            />
            <p className="text-[#212529] mb-6">
              The app is open source and your notes are saved to an open format, so you&apos;ll always have access to them. Uses End-To-End Encryption (E2EE) to secure your notes and ensure no-one but yourself can access them.
            </p>
            <Button className="bg-[#4F9CF9] text-white hover:bg-[#3A89E9] flex items-center space-x-2">
              <span>Read more</span>
              <Image
                src="/arrow.png"
                alt="Arrow pointing to the right"
                width={15}
                height={15}
              />
            </Button>
          </div>
          <div className="md:w-1/2 mb-8 md:mb-0">
            <Image
              src="/dataimage.png"
              alt="Data visualization"
              width={681}
              height={380}
              className="w-full h-auto"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
