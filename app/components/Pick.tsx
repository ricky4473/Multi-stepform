//@ts-nocheck
'use client'
import PickAddOns from '@/components/PickAddOns'
import { InfomationCollection } from '@/app/page'
import { useContext } from 'react'

const PickSelection = monthYear => {
  const arr = [
    { title: 'Online service', text: 'Access to multiplayer games', price: 1 },
    { title: 'Larger storage', text: 'Extra 1TB of cloud save', price: 2 },
    { title: 'Customizable Profile', text: 'Custom theme on your profile', price: 2 },
  ]
  arr.forEach(item => (item.price = monthYear === 'Monthly' ? item.price : item.price * 10))
  return arr
}

export default function Pick() {
  const [collection, setCollection] = useContext(InfomationCollection)
  const pick = collection.pick
  const setPickSelected = value => {
    pick.pickSelected = value
    setCollection({ ...collection })
  }
  return (
    <div className="var">
      <h1 className="mt-1 text-xl font-semibold">Pick add-ons</h1>
      <small className="text-slate-400">Add-ons help enhance your gaming experience.</small>
      <div className="flex flex-col mt-3 gap-3">
        {PickSelection(collection.plan.monthYear).map((item, index) => {
          return (
            <PickAddOns
              key={index}
              item={item}
              monthYear={collection.plan.monthYear}
              pickSelected={pick.pickSelected}
              setPickSelected={setPickSelected}
            />
          )
        })}
      </div>
    </div>
  )
}
