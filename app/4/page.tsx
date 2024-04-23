//@ts-nocheck
'use client'
import { useState,useContext } from 'react'
import {InfomationCollection} from '@/components/Global'
import { useRouter } from 'next/navigation'


export default function Summary() {
    const router=useRouter()
  const [collection, setCollection] = useContext(InfomationCollection)
    const onClick=()=>{
        router.push('/finish')
    }
  console.log(collection)

  return (
    <>
      <div className="var">
        <h1 className="mt-1 text-xl font-semibold">Finishing up</h1>
        <small className="text-slate-400">
          Double-check everything looks OK before confirming.
        </small>
        <div className="flex flex-col">
          <div className=" mt-3 p-4 bg-slate-100 rounded-lg">
            <div className="flex flex-row justify-between items-center">
              <div className="">
                <p className="font-semibold">{collection[1].selectedPlan} ({collection[1].monthYear})</p>
                <p className="text-[13px] text-slate-400">Change</p>
              </div>
              <div className="font-semibold">$9/mo</div>
            </div>
            <div className="border-b border-slate-300 my-4 w-full" />
           {collection[2].pickSelected.map( (item,index)=><div key={index} className="flex flex-row justify-between">
              <div className="mb-2">
                <p className="text-slate-400">{item}</p>
              </div>
              <div className="">+$1/mo</div>
            </div>)}
            
          </div>
          <div className="flex flex-row justify-between items-center p-4">
            <div className="mb-2">
              <p className="text-slate-400">Total (per month)</p>
            </div>
            <div className="text-blue-500 text-xl font-[500]">+$1/mo</div>
          </div>
        </div>
      </div>
      <div className="flex flex-row justify-between">
        <button className="text-slate-400 text-xs hover:text-blue-900">Go Back</button>

        <button onClick={onClick} className="bg-blue-900 text-white text-xs px-3 py-2 rounded-md">Confirm</button>
      </div>
    </>
  )
}
