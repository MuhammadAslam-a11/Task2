import React from 'react'
import Image from 'next/image'
const page = () => {
  return (
    <div><figure className="md:flex bg-slate-100 rounded-xl p-8 md:p-0 dark:bg-slate-800">
    <Image className="w-24 h-24 md:w-48 md:h-auto md:rounded-none rounded-full mx-auto" src="/Contact.png" alt="" width="384" height="512"/>
    <div className="pt-6 md:p-8 text-center md:te space-y-4">
      <blockquote>
        <p className="text-lg font-medium">
          ““Hi there! I am Muhammad Aslam from Kot Addu, Punjab. Feel free to reach out to me for any queries or just to chat. Looking forward to connecting with you!””
        </p>
      </blockquote>
      <figcaption className="font-medium">
        <div className="text-sky-500 dark:text-sky-400">
          Muhammad Aslam
        </div>
        <div className="text-slate-700 dark:text-slate-500">
          0346-9004866
        </div>
      </figcaption>
    </div>
  </figure></div>
  )
}

export default page