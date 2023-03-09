import React from 'react'
import SocialMediaList from './SocialMediaList'

function Footer() {
  const currentYear = new Date().getFullYear()
  return (
    <div className='bg-gray-200 dark:bg-zinc-900 text-stone-600 dark:text-neutral-300 text-md xs:text-lg px-5 xs:px-10 flex flex-col pt-0 md:pt-5 justify-center items-center md:items-stretch text-center  gap-y-10 md:flex-row md:gap-y-0 pb-8'>
      <p className='w-full max-w-xl  md:pr-12 md:w-1/2 pt-5 border-b-2 dark:border-neutral-500 md:border-none pb-8 md:pb-0 font-medium dark:font-normal'> "What's the plan?" helps you organize and manage your tasks with ease. With a simple and intuitive interface, you can quickly add,complete, set due dates and prioritize your tasks. Keep track of your progress and never forget an important task again.</p>
      <div className="w-full max-w-xl  border-l-none border-neutral-300 dark:border-neutral-500 pl-0 md:pl-12 md:w-1/2 md:border-l-2  pt-0 md:pt-5">
        <p className='font-medium dark:font-normal'>This website was made by <span className='font-semibold text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-rose-600 dark:from-violet-500 dark:to-cyan-500 text-xl tracking-wide '>Hubert Paprocki</span>.
          All rights reserved. Copyright © {currentYear}
        </p>
        <SocialMediaList/>
      </div>
    </div>
  )
}
export default Footer