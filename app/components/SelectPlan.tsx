//@ts-nocheck
'use client'
import { useRef, useState, useContext, useEffect } from 'react'
import Image from 'next/image'
import iconarcade from '@/public/images/icon-arcade.svg'
import iconadvanced from '@/public/images/icon-advanced.svg'
import iconpro from '@/public/images/icon-pro.svg'
import PlanButton from '@/components/PlanButton'
import { InfomationCollection } from '@/app/components/GlobalState'
import { useRouter } from 'next/navigation'

const planArr = monthYear => {
  const arr = [
    { image: iconarcade, title: 'Arcade', price: 9 },
    { image: iconadvanced, title: 'Advanced', price: 12 },
    { image: iconpro, title: 'Pro', price: 15 },
  ]
  arr.forEach(item => (item.price = monthYear === 'Monthly' ? item.price : item.price * 10))
  return arr
}
export default function SelectPlan() {
  const [collection, setCollection] = useContext(InfomationCollection)

  const plan = collection.plan
  const setSelectedPlan = value => {
    plan.selectedPlan = value

    setCollection({ ...collection })
  }
  const setMonthYear = value => {
    plan.monthYear = value
    setCollection({ ...collection })
  }
  useEffect(() => {
    plan.selectedPlan = planArr(plan.monthYear)[0]
    setCollection({ ...collection })
  }, [])
  return (
    <div className="var">
      <h1 className="mt-1 text-xl font-semibold">Select your plan</h1>
      <small className="text-slate-400">you have the option of monthly or yearly billing.</small>
      <div className="w-full flex flex-row gap-4 justify-between mt-5 ">
        {planArr(plan.monthYear).map((item, index) => {
          return (
            <PlanButton
              selectedPlan={plan.selectedPlan}
              setSelectedPlan={setSelectedPlan}
              monthYear={plan.monthYear}
              key={index}
              // image={item.image}
              // title={item.title}
              // price={item.price}
              item={item}
            />
          )
        })}
      </div>
      <div className="mt-5 bg-slate-100 py-2 gap-5 flex flex-row justify-center items-center rounded-lg">
        <p
          className={`font-bold text-sm ${
            plan.monthYear === 'Monthly' ? 'text-blue-950' : 'text-slate-500 '
          }`}>
          Monthly
        </p>
        <input
          type="checkbox"
          className="toggle bg-white border-white"
          onClick={() => {
            setMonthYear(plan.monthYear === 'Monthly' ? 'Yearly' : 'Monthly')
          }}
        />
        <p
          className={`font-bold text-sm ${
            plan.monthYear === 'Yearly' ? 'text-blue-950' : 'text-slate-500 '
          }`}>
          Yearly
        </p>
      </div>
    </div>
  )
}
