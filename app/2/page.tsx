//@ts-nocheck
'use client'
import { useRef, useState, useContext } from 'react'
import Image from 'next/image'
import iconarcade from '@/public/images/icon-arcade.svg'
import iconadvanced from '@/public/images/icon-advanced.svg'
import iconpro from '@/public/images/icon-pro.svg'
import PlanButton from '@/components/PlanButton'
import { InfomationCollection } from '@/components/Global'
import { useRouter } from 'next/navigation'

const plan = [
  { image: iconarcade, title: 'Arcade', price: 9 },
  { image: iconadvanced, title: 'Advanced', price: 12 },
  { image: iconpro, title: 'Pro', price: 15 },
]
export default function SelectPlan() {
  const router=useRouter()
  const [selectedPlan, setSelectedPlan] = useState('Arcade')
  const [monthYear, setMonthYear] = useState('Monthly')
  const [collection, setCollection] = useContext(InfomationCollection)
  const onClick=()=>{
    collection.plan={selectedPlan,monthYear}
    setCollection(collection)
    router.push('/3')

  }
  console.log(collection)
  return (
    <>
      <div className="var">
        <h1 className="mt-1 text-xl font-semibold">Select your plan</h1>
        <small className="text-slate-400">you have the option of monthly or yearly billing.</small>
        <div className="w-full flex flex-row gap-4 justify-between mt-5 ">
          {plan.map((item, index) => {
            return (
              <PlanButton
                selectedPlan={selectedPlan}
                setSelectedPlan={setSelectedPlan}
                key={index}
                image={item.image}
                title={item.title}
                price={item.price}
              />
            )
          })}
        </div>
        <div className="mt-5 bg-slate-100 py-2 gap-5 flex flex-row justify-center items-center rounded-lg">
          <p className={`font-bold text-sm ${monthYear==='Monthly' ? 'text-blue-950':'text-slate-500 '}`}>
            Monthly
          </p>
          <input
            type="checkbox"
            className="toggle bg-white border-white"
            onClick={() => {
              setMonthYear(monthYear==='Monthly'?'Yearly':'Monthly')
            }}
          />
          <p className={`font-bold text-sm ${monthYear==='Yearly' ? 'text-blue-950':'text-slate-500 '}`}>
            Yearly
          </p>
        </div>
      </div>
      <div className="flex flex-row justify-between">
        <button className="text-slate-400 text-xs hover:text-blue-900">Go Back</button>

        <button onClick={onClick} className="bg-blue-900 text-white text-xs px-3 py-2 rounded-md">Next Step</button>
      </div>
    </>
  )
}
