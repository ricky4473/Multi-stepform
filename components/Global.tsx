//@ts-nocheck
'use client'
import { usePathname } from 'next/navigation'
import React from 'react'
import { useState, createContext } from 'react'
interface myProp {
  step: number
  title: string
}
export const InfomationCollection = createContext()
const Step = ({ step, title }: myProp) => {
    const pathname=usePathname()
  const activeClass = pathname===`/${step}` ? 'bg-sky-200 text-black' : 'text-white'
  return (
    <div className="flex flex-row items-center uppercase mb-4">
      <p
        className={`mr-4 flex h-8 w-8 items-center justify-center rounded-full border border-white  p-1 text-center text-xs font-semibold  ${activeClass}`}>
        <span>{step}</span>
      </p>
      <div className="flex flex-col">
        <p className="text-[10px] text-slate-300">step {step}</p>
        <p className="text-[13px] font-[500]">{title}</p>
      </div>
    </div>
  )
}
const Global = ({ children }: { children: React.ReactNode }) => {
    const [collection,setCollection]= useState({"personalInfo":{name:'',email:'',phone:''},'plan':{},'pick':{}})
  return (
    <div className="flex h-screen items-center justify-center bg-blue-100 py-[10%]">
      <div className=" h-[400px] w-[700px] grid grid-cols-12 bg-white p-2 rounded-lg">
        <div
          className="relative col-span-4 rounded-lg bg-cover p-5 text-white"
          style={{
            background:
              "url('https://github.com/ricky4473/Multi-stepform/raw/main/public/images/bg-sidebar-desktop.svg') 0/cover",
          }}>
          {[
            { step: 1, title: 'your info' },
            { step: 2, title: 'Select plan' },
            { step: 3, title: 'add-ons' },
            { step: 4, title: 'summary' },
          ].map((item, index) => {
            return <Step key={index} title={item.title} step={item.step} active />
          })}
        </div>
        <div className="col-span-8 px-9 py-2 flex flex-col justify-between text-sky-800">
          <InfomationCollection.Provider value={[collection,setCollection]}>{children}</InfomationCollection.Provider>
          {/* {children} */}
        </div>
      </div>
    </div>
  )
}

export default Global
