import { Button } from './ui/button'
import { Check } from 'lucide-react'
import Image from 'next/image'

export default function Pricing() {
  const plans = [
    {
      name: 'Free',
      price: '$0',
      features: [
        'Capture ideas and find them quickly',
        'Sync unlimited devices',
        '10 GB monthly uploads',
        '200 MB max. note size',
        'Customize Home dashboard and access extra widgets',
        'Connect primary Google Calendar account',
        'Add due dates, reminders, and notifications to your tasks'
      ]
    },
    {
      name: 'Personal',
      price: '$11.99',
      features: [
        'Everything in Free',
        '20 GB monthly uploads',
        '400 MB max. note size',
        'Customize Home dashboard and access extra widgets',
        'Connect 2 Google Calendar accounts',
        'Add due dates, reminders, and notifications to your tasks',
        'Offline access'
      ]
    },
    {
      name: 'Organization',
      price: '$49.99',
      features: [
        'Everything in Personal',
        'Unlimited monthly uploads',
        '2 GB max. note size',
        'Customize Home dashboard and access extra widgets',
        'Connect 5 Google Calendar accounts',
        'Add due dates, reminders, and notifications to your tasks',
        'Offline access',
        'Team collaboration tools'
      ]
    }
  ]

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
               <Image
               src={"/chooseheading.png"}
               alt='Work Together'
               width={1376}
               height={87}
               />
        <p className='text-center mb-6'>
          Whether you want to get organized, keep your personal life on track, or boost workplace productivity, Evernote has the
          <br />
          right plan for you.</p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {plans.map((plan) => (
            <div key={plan.name} className={`bg-white p-8 rounded-lg shadow-md ${plan.name === 'Personal' ? 'border-2 border-[#4F9CF9]' : ''}`}>
              <h3 className="text-2xl font-bold mb-4 text-[#212529]">{plan.name}</h3>
              <p className="text-4xl font-bold mb-6 text-[#4F9CF9]">{plan.price}</p>
              <ul className="mb-8 space-y-2">
                {plan.features.map((feature, index) => (
                  <li key={index} className="flex items-center text-[#212529]">
                    <Check className="w-5 h-5 mr-2 text-green-500" />
                    {feature}
                  </li>
                ))}
              </ul>
              <Button className="w-full bg-[#4F9CF9] text-white hover:bg-[#3A89E9]">
                {plan.name === 'Free' ? 'Get Started' : 'Try free for 30 days'}
              </Button>
            </div>
          ))}
        </div>
      </div>
    </section>
    )
}