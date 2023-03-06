import React from 'react'
import SocialMediaList from './SocialMediaList'

function Footer() {
  const currentYear = new Date().getFullYear()
  return (
    <div className='bg-zinc-900 text-neutral-300 text-lg flex flex-col p-14 justify-center align-center text-center shadow-top gap-y-10 md:flex-row md:gap-y-0'>
      <p className='w-full max-w-xl  md:pr-12 md:w-1/2 '>This to-do app helps you organize and manage your tasks with ease. With a simple and intuitive interface, you can quickly add,  and complete tasks, set due dates, and prioritize your tasks. Keep track of your progress and never forget an important task again.</p>
      <div className="w-full max-w-xl  border-l-none border-neutral-500 pl-0 md:pl-12 md:w-1/2 md:border-l-2">
        <p className=''>This website was made by <span className='font-semibold text-transparent bg-clip-text bg-gradient-to-r from-violet-500 to-cyan-500 text-xl tracking-wide '>Hubert Paprocki</span>.
          All rights reserved. Copyright © {currentYear}
        </p>
        <SocialMediaList/>
      </div>
    </div>
  )
}
export default Footer