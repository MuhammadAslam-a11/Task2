import React from 'react'
import Image from 'next/image'
const page = () => {
  return (
    <div><figure className="md:flbg-slate-100 rounded-xl p-8 dark:bg-slate-800">
    <Image className="w-24 h-24 rounded-full mx-auto" src="/Aslam.jpg" alt="" width="384" height="512"/>
    <div className="pt-6 text-center space-y-4">
      <blockquote>
        <p className="text-lg font-medium">
          “My name is Muhammad Aslam. I am a student of BS Cyber Security at Khwaja Fareed University of Engineering and Information Technology (KFUET). In addition to my studies, I am also enrolled in a course on Generative AI in Rahim Yar Khan. I am passionate about learning new technologies and expanding my knowledge in the field of cybersecurity and artificial intelligence.”
        </p>
      </blockquote>
      <figcaption className="font-medium">
        <div className="text-sky-500 dark:text-sky-400">
          Muhammad Aslam
        </div>
        <div className="text-slate-700 dark:text-slate-500">
          Cyber Security Engineer, RYK
        </div>
      </figcaption>
    </div>
  </figure></div>
  )
}

export default page