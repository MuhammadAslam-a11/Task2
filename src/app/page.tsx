import React from 'react'
import Image from 'next/image'
const page = () => {
  return (
    <div> <figure className="md:flex bg-slate-100 rounded-xl p-8 md:p-0 dark:bg-slate-800">
    <Image className="w-24 h-24 md:w-48 md:h-auto md:rounded-none rounded-full mx-auto" src="/home.WEBP" alt="" width="384" height="512"/>
    <div className="pt-6 md:p-8 text-center md:text-left space-y-4">
      <blockquote>
        <p className="text-lg font-medium">
          “I live in a peaceful village home surrounded by nature. The air is fresh, and I often hear birds singing and trees rustling. Life here is calm, far from the busy city. My home is cozy and simple, perfect for enjoying the quiet countryside. The village moves at a slower pace, giving me time to appreciate the beauty of the fields and the peaceful atmosphere that makes it special.”
        </p>
      </blockquote>
      <figcaption className="font-medium">
        <div className="text-sky-500 dark:text-sky-400">
          Chak No 518/T.D.A
        </div>
        <div className="text-slate-700 dark:text-slate-500">
          Kot addu
        </div>
      </figcaption>
    </div>
  </figure></div>
  )
}

export default page 
