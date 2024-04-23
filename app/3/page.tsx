//@ts-nocheck
'use client'
import PickAddOns from '@/components/PickAddOns'
import Image from 'next/image'
import { useState,useContext } from 'react'
import {InfomationCollection} from '@/components/Global'
import { useRouter } from 'next/navigation'

const PickSelection = [
  { title: 'Online service', text: 'Access to multiplayer games', price: 1 },
  { title: 'Larger storage', text: 'Extra 1TB of cloud save', price: 2 },
  { title: 'Customizable Profile', text: 'Custom theme on your profile', price: 2 },
]

export default function Pick() {
  const [pickSelected, setPickSelected] = useState([])
  const router=useRouter()
  const [collection, setCollection] = useContext(InfomationCollection)
  const onClick=()=>{
    collection.push({pickSelected})
    setCollection(collection)
    router.push('/4')

  }
  console.log(collection)
  return (
    <>
      <div className="var">
        <h1 className="mt-1 text-xl font-semibold">Pick add-ons</h1>
        <small className="text-slate-400">Add-ons help enhance your gaming experience.</small>
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
      <div className="flex flex-row justify-between">
        <button className="text-slate-400 text-xs hover:text-blue-900">Go Back</button>

        <button className="bg-blue-900 text-white text-xs px-3 py-2 rounded-md" onClick={onClick}>Next Step</button>
      </div>
    </>
  )
}
