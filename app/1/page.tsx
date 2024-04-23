//@ts-nocheck
'use client'
import Image from 'next/image'
import { InfomationCollection } from '@/components/Global'
import { useContext, useRef } from 'react'
import lodash from 'lodash'
import Link from 'next/link'
import { useRouter } from 'next/navigation'

export default function Home() {
  const [collection, setCollection] = useContext(InfomationCollection)
  const router=useRouter()
  console.log(collection)
  const onClick = (e) => {
    const name=ref.current[0].value
    const email=ref.current[1].value
    const phone=ref.current[2].value
    const obj={name,email,phone}
    const tmpcollection = lodash.cloneDeep(collection)
    tmpcollection.push(obj)
    setCollection(tmpcollection)
    router.push('/2')
  }
  const ref = useRef()
  return (
    <>
      <div className="var">
        <h1 className="mt-1 text-xl font-semibold">Personal info</h1>
        <small className="text-slate-400">
          Please provide your name, email address, and phone number.
        </small>
        <form className="mt-3" ref={ref} onSubmit={(e)=>e.preventDefault()}>
          <label htmlFor="name" className="text-sm font-bold">
            Name
          </label>
          <input
            id="name"
            type="text"
            placeholder="Your Name"
            className="text-semibold focus:outline-none focus:border-blue-500 mb-3 w-full rounded-md border border-slate-300 p-2 bg-transparent"
          />{' '}
          <label htmlFor="email" className="text-sm font-bold">
            Email Address
          </label>
          <input
            id="email"
            type="text"
            placeholder="Your email"
            className=" text-semibold  focus:outline-none mb-3 w-full rounded-md border border-slate-300 focus:border-blue-500 p-2 bg-transparent"
          />{' '}
          <label htmlFor="phone" className="text-sm font-bold">
            phone
          </label>
          <input
            id="phone"
            type="number"
            placeholder="e.g. +1 234 567 890"
            className="text-semibold focus:outline-none focus:border-blue-500 mb-3 w-full rounded-md border border-slate-300 p-2 bg-transparent"
          />
        </form>
      </div>
      <div className="flex flex-row justify-end">
        <button
          type="submit"
          onClick={onClick}
          className="bg-blue-900 text-white text-xs px-3 py-2 rounded-md">
          Next Step
        </button>
      </div>
    </>
  )
}
