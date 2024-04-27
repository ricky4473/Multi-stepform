//@ts-nocheck
'use client'

import React from 'react'
import { useState, createContext } from 'react'
import backgroundImg from '@/public/images/bg-sidebar-desktop.svg'
import backgroundImgMobile from '@/public/images/bg-sidebar-mobile.svg'
import NextButton from '@/components/NextButton'
import Step from '@/components/Step'
import GlobalState from './components/GlobalState'



const App = () => {
  const [step, setStep] = useState(1)

  return (
    <div className="flex h-screen sm:items-center justify-center bg-blue-100 sm:py-[10%] relative">
      <div className="sm:hidden bg-[url(../public/images/bg-sidebar-mobile.svg)] w-full h-[20%] absolute bg-cover  bg-top "></div>
      <div className=" sm:h-[400px] h-[70%] w-[700px] grid grid-cols-12 sm:bg-white sm:p-2 rounded-lg max-sm:flex max-sm:flex-col z-10">
        <div
          className={`col-span-4 max-sm:gap-3 max-sm:flex max-sm:flex-row justify-center max-sm:h-[17%] sm:rounded-lg sm:bg-bottom  bg-cover p-5 text-white  sm:bg-[url(../public/images/bg-sidebar-desktop.svg)] `}
          >
          {[
            { step: 1, title: 'your info' },
            { step: 2, title: 'Select plan' },
            { step: 3, title: 'add-ons' },
            { step: 4, title: 'summary' },
          ].map((item, index) => {
            return <Step key={index} title={item.title} step={item.step} nowStep={step} />
          })}
        </div>
        <div className="col-span-8 px-9 py-2 max-sm:py-6 flex flex-col justify-between text-sky-800 max-sm:mx-[3%]  max-sm:bg-white max-sm:rounded-lg max-sm:h-full max-sm:shadow-xl">
          <GlobalState step={step} setStep={setStep}/>
          <NextButton step={step} setStep={setStep} />
        </div>
      </div>
    </div>
  )
}

export default App
