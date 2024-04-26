//@ts-nocheck
'use client'
import React from 'react'
import Image from 'next/image'
import checkmark from '@/public/images/icon-checkmark.svg'
import lodash from 'lodash'
const PickAddOns = ({ item, pickSelected, setPickSelected, monthYear }) => {
  const status = pickSelected.find(obj => obj.title === item.title)
  const activeClass = status ? 'bg-blue-500 border-blue-500' : 'bg-white border-slate-300'
  const onClick = () => {
    if (status) {
      setPickSelected(pickSelected.filter(obj => obj.title != item.title))
    } else {
      pickSelected.push(item)
      setPickSelected([...pickSelected])
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
          <h1 className="font-[500]">{item.title}</h1>
          <p className="text-[13px] text-slate-400">{item.text}</p>
        </div>
      </div>
      <p className="text-blue-500">
        +${monthYear === 'Monthly' ? item.price + '/mo' : item.price + '/yr'}
      </p>
    </div>
  )
}

export default PickAddOns
