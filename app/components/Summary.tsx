//@ts-nocheck
'use client'
import { useState, useContext } from 'react'
import { InfomationCollection } from '@/app/components/GlobalState'

export default function Summary({ setStep }) {
  const [collection, setCollection] = useContext(InfomationCollection)
  const moyr = collection.plan.monthYear === 'Mohthly' ? 'mo' : 'yr'
  const total =
    collection.pick.pickSelected.reduce((prev, curr) => {
      return prev + curr.price
    }, 0) + collection.plan.selectedPlan.price

  return (
    <div className="var">
      <h1 className="mt-1 text-xl font-semibold">Finishing up</h1>
      <small className="text-slate-400">Double-check everything looks OK before confirming.</small>
      <div className="flex flex-col">
        <div className=" mt-3 p-4 bg-slate-100 rounded-lg">
          <div className="flex flex-row justify-between items-center">
            <div className="">
              <p className="font-semibold">
                {collection.plan.selectedPlan.title} ({collection.plan.monthYear})
              </p>
              <p className="text-[13px] text-slate-400 " onClick={() => setStep(2)}>
                <span className="hover:text-blue-500 hover:underline hover:cursor-pointer">
                  Change
                </span>
              </p>
            </div>
            <div className="font-semibold">
              ${collection.plan.selectedPlan.price}/{moyr}
            </div>
          </div>
          {collection.pick.pickSelected.length != 0 && (
            <div className="border-b border-slate-300 my-4 w-full" />
          )}
          {collection.pick.pickSelected.map((item, index) => (
            <div key={index} className="flex flex-row justify-between">
              <div className="mb-2">
                <p className="text-slate-400">{item.title}</p>
              </div>
              <div className="">
                +${item.price}/{moyr}
              </div>
            </div>
          )) || ''}
        </div>
        <div className="flex flex-row justify-between items-center p-4">
          <div className="mb-2">
            <p className="text-slate-400">
              Total (per {collection.plan.monthYear === 'Monthly' ? 'month' : 'year'})
            </p>
          </div>
          <div className="text-blue-500 text-xl font-[500]">
            +${total}/{moyr}
          </div>
        </div>
      </div>
    </div>
  )
}
