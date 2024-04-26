//@ts-nocheck
'use client'
import Home from '@/app/components/Home'
import SelectPlan from '@/app/components/SelectPlan'
import Pick from '@/app/components/Pick'
import Summary from '@/app/components/Summary'
import React from 'react'
import { useState, createContext } from 'react'
import backgroundImg from '@/public/images/bg-sidebar-desktop.svg'
import Finish from './components/Finish'
import NextButton from '@/components/NextButton'
import Step from '@/components/Step'

export const InfomationCollection = createContext()

const Var = ({ step, setStep }) => {
  const arr = [
    <Home key="Home" setStep={setStep} />,
    <SelectPlan key='SelectPlan' />,
    <Pick key='Pick' />,
    <Summary key='Summary' setStep={setStep} />,
    <Finish key='Finish' />,
  ]
  return arr[step - 1]
}

const App = () => {
  const [step, setStep] = useState(1)
  const [collection, setCollection] = useState({
    personalInfo: { name: '', email: '', phone: '' },
    plan: { selectedPlan: 'Arcade', monthYear: 'Monthly' },
    pick: { pickSelected: [] },
  })
  return (
    <div className="flex h-screen items-center justify-center bg-blue-100 py-[10%]">
      <div className=" h-[400px] w-[700px] grid grid-cols-12 bg-white p-2 rounded-lg">
        <div
          className="relative col-span-4 rounded-lg bg-cover p-5 text-white"
          style={{ background: `url(${backgroundImg.src}) 0/cover` }}>
          {[
            { step: 1, title: 'your info' },
            { step: 2, title: 'Select plan' },
            { step: 3, title: 'add-ons' },
            { step: 4, title: 'summary' },
          ].map((item, index) => {
            return <Step key={index} title={item.title} step={item.step} nowStep={step} active />
          })}
        </div>
        <div className="col-span-8 px-9 py-2 flex flex-col justify-between text-sky-800">
          <InfomationCollection.Provider value={[collection, setCollection]}>
            <Var step={step} setStep={setStep} />
          </InfomationCollection.Provider>
          <NextButton step={step} setStep={setStep} />
        </div>
      </div>
    </div>
  )
}

export default App
