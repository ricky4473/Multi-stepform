'use client'
import PickAddOns from '@/components/PickAddOns'
import Image from 'next/image'
import { useState } from 'react'

const PickSelection = [
  { title: 'Online service', text: 'Access to multiplayer games', price: 1 },
  { title: 'Larger storage', text: 'Extra 1TB of cloud save', price: 2 },
  { title: 'Customizable Profile', text: 'Custom theme on your profile', price: 2 },
]

export default function Pick () {
  const [pickSelected, setPickSelected] = useState([])
  return (
    <div class="var">
      <h1 class="mt-1 text-xl font-semibold">Pick add-ons</h1>
      <small class="text-slate-400">Add-ons help enhance your gaming experience.</small>
      <div className="flex flex-col mt-3 gap-3">
        {PickSelection.map((item, index) => {
          return (
            <PickAddOns
              key={index}
              title={item.title}
              text={item.text}
              price={item.price}
              pickSelected={pickSelected}
              setPickSelected={setPickSelected}
            />
          )
        })}
      </div>
    </div>
  )
}
