import React from 'react'
import Link from 'next/link'
const Header = () => {
  return (
    <div className='flex  bg-yellow-200  gap-12  dark:bg-slate-400'>
        <Link href="\">Home </Link>
        <Link href="\About">About </Link>
        <Link href="\Contact">Contact </Link>
        <Link href="\Address">Address </Link>
    </div>
  )
}

export default Header