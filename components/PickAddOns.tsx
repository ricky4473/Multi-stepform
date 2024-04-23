//@ts-nocheck
'use client'
import React from 'react'
import Image from 'next/image'
import checkmark from '@/public/images/icon-checkmark.svg'
import lodash from 'lodash'
const PickAddOns = ({ title, text, price, pickSelected, setPickSelected }) => {
  const status = pickSelected.includes(title)
  const activeClass = status ? 'bg-blue-500 border-blue-500' : 'bg-white border-slate-300'
  const onClick = () => {
    if (status) {
      setPickSelected(pickSelected.filter(item => item != title))
    } else {
      const tmp = lodash.cloneDeep(pickSelected)
      tmp.push(title)
      setPickSelected(tmp)
    }
  }
  return (
    <div
      onClick={onClick}
      className={`border ${
        status ? 'border-blue-500' : 'border-slate-300'
      } hover:border-blue-500 hover:cursor-pointer rounded-lg p-3 flex flex-row justify-between items-center`}>
      <div className="flex flex-row items-center">
        <Image
          src={checkmark}
          className={`size-5 text-white 
              border  rounded p-1 mr-4 ${activeClass}`}
        />
        <div className="">
          <h1 className="font-[500]">{title}</h1>
          <p className="text-[13px] text-slate-400">{text}</p>
        </div>
      </div>
      <p className="text-blue-500">+${price}/mo</p>
    </div>
  )
}

export default PickAddOns
