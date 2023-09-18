import React from 'react'
import { Button } from "@/components/ui/button"
import Navbar from '@/components/navbar'
import Image from 'next/image'



const page = () => {
  return (
    <div>
      <Navbar/>

      <div className="relative isolate px-6  lg:px-8">
        
        <div className="mx-auto max-w-2xl py-12 ">

          
          <div className="text-center content-center">
            <section className='hero container max-w-screen-lg mx-auto pb-10 flex'>
              <Image src="/landing-img.png" className='mx-auto' alt="me"  width="300" height='300' />

            </section>

            <h1 className="text-xl font-bold tracking-tight text-primary sm:text-6xl">Create Dynamic YouTube Streams</h1>
            <p className="mt-6 text-lg leading-8 text-white-600">Elevate your YouTube live streams with our app's interactive overlays, allowing users to record themselves and engage their audience in real-time.</p>
            
          </div>
        </div>
        
      </div>
    </div>
  )
}

export default page