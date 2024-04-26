//@ts-nocheck
'use client';
import React,{useState,createContext} from 'react'
import Home from '@/app/components/Home'
import SelectPlan from '@/app/components/SelectPlan'
import Pick from '@/app/components/Pick'
import Summary from '@/app/components/Summary'
import Finish from '@/app/components/Finish'

export const InfomationCollection = createContext()


const Var = ({ step, setStep }:any) => {
    const arr = [
      <Home key="Home" setStep={setStep} />,
      <SelectPlan key="SelectPlan" />,
      <Pick key="Pick" />,
      <Summary key="Summary" setStep={setStep} />,
      <Finish key="Finish" />,
    ]
    return arr[step - 1]
  }
const GlobalState = ({ step, setStep }:any) => {
      const [collection, setCollection] = useState({
    personalInfo: { name: '', email: '', phone: '' },
    plan: { selectedPlan: 'Arcade', monthYear: 'Monthly' },
    pick: { pickSelected: [] },
  })
  return (
    <InfomationCollection.Provider value={[collection, setCollection]}>
            <Var step={step} setStep={setStep} />
          </InfomationCollection.Provider> 
  )
}

export default GlobalState
