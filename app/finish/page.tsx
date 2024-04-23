//@ts-nocheck
import React from 'react'
import Image from 'next/image'
import iconthankyou from '@/public/images/icon-thank-you.svg'
const Finish = () => {
  return (
    <div className="flex flex-col items-center justify-center my-auto">
      <Image src={iconthankyou} />
      <h1 className="text-2xl font-semibold mt-3">Thank you!</h1>
      <p className="text-slate-400 text-[15px] text-center mt-3">
        Thanks for confirming your subscription! We hope you have fun using our platform. If you
        ever need support, please feel free to email us at support@loremgaming.com.
      </p>
    </div>
  )
}

export default Finish
