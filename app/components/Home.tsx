//@ts-nocheck
'use client'
import { InfomationCollection } from '@/app/components/GlobalState'
import { useContext, useEffect, useRef, useState } from 'react'

export default function Home({ setStep }) {
  const [collection, setCollection] = useContext(InfomationCollection)
  const [nameValid, setNameValid] = useState('')
  const [emailValid, setEmailValid] = useState('')
  const [phoneValid, setPhoneValid] = useState('')
  const onClick = () => {
    const name = ref.current[0]
    const email = ref.current[1]
    const phone = ref.current[2]
    let validErrorCount = 0
    if (name.value === '') {
      setNameValid('This field is required!')
      validErrorCount += 1
    } else {
      setNameValid('')
    }

    if (email.value === '') {
      setEmailValid('This field is required!')
      validErrorCount += 1
    } else if (!/^\S+@\S+\.\S+$/.test(email.value)) {
      setEmailValid('Email format incorrect!')
      validErrorCount += 1
    } else {
      setEmailValid('')
    }

    if (phone.value === '') {
      setPhoneValid('This field is required!')
      validErrorCount += 1
    } else if (!/^\d+$/.test(phone.value)) {
      setPhoneValid('Phone format incorrect!')
      validErrorCount += 1
    } else {
      setPhoneValid('')
    }

    const obj = { name: name.value, email: email.value, phone: phone.value }
    collection.personalInfo = obj
    setCollection(collection)

    if (validErrorCount === 0) {
      setStep(2)
    }
  }

  const ref = useRef()

  return (
    <>
      <div className="var">
        <h1 className="mt-1 text-xl font-semibold">Personal info</h1>
        <small className="text-slate-400">
          Please provide your name, email address, and phone number.
        </small>
        <form className="mt-3" ref={ref}>
          <div className="flex flex-row justify-between items-center">
            <label htmlFor="name" className="text-sm font-bold">
              Name
            </label>
            <small className="text-red-500 font-bold text-xs">{nameValid}</small>
          </div>
          <input
            id="name"
            type="text"
            placeholder="Your Name"
            defaultValue={collection.personalInfo.name}
            className={`text-semibold ${
              nameValid != ''
                ? 'focus:border-red-500 border-red-500'
                : ' focus:border-blue-500 border-slate-300'
            } focus:outline-none mb-3 w-full rounded-md border  p-2 bg-transparent`}
          />{' '}
          <div className="flex flex-row justify-between items-center">
            <label htmlFor="email" className="text-sm font-bold">
              Email Address
            </label>
            <small className="text-red-500 font-bold text-xs">{emailValid}</small>
          </div>
          <input
            id="email"
            type="text"
            placeholder="Your email"
            defaultValue={collection.personalInfo.email}
            className={`text-semibold ${
              emailValid != ''
                ? 'focus:border-red-500 border-red-500'
                : ' focus:border-blue-500 border-slate-300'
            } focus:outline-none mb-3 w-full rounded-md border  p-2 bg-transparent`}
          />{' '}
          <div className="flex flex-row justify-between items-center">
            <label htmlFor="phone" className="text-sm font-bold">
              Phone
            </label>
            <small className="text-red-500 font-bold text-xs">{phoneValid}</small>
          </div>
          <input
            id="phone"
            type="number"
            placeholder="e.g. +1 234 567 890"
            defaultValue={collection.personalInfo.phone}
            className={`text-semibold ${
              phoneValid != ''
                ? 'focus:border-red-500 border-red-500'
                : ' focus:border-blue-500 border-slate-300'
            } focus:outline-none mb-3 w-full rounded-md border  p-2 bg-transparent`}
          />
        </form>
      </div>
      <div className="flex flex-row justify-end">
        <button className="bg-blue-900 text-white text-xs px-3 py-2 rounded-md" onClick={onClick}>
          Next Step
        </button>
      </div>
    </>
  )
}
