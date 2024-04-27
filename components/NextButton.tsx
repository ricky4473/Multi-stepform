//@ts-nocheck
'use client'

const NextButton = ({ step, setStep, callback = () => {} }: any) => {
  const onBackClick = () => {
    setStep(step - 1)
  }
  const onNextClick = () => {
    setStep(step + 1)
  }

  if (step === 5 || step===1) {
    return <></>
  }

  return (
    <div
      className={`flex flex-row  ${
        step === 1 ? 'justify-end' : 'justify-between'
      } max-sm:absolute  max-sm:bottom-0 max-sm:left-0 max-sm:p-3 max-sm:bg-white max-sm:w-full`}>
      {step === 1 ? (
        ''
      ) : (
        <button className="text-slate-400 text-xs hover:text-blue-900" onClick={onBackClick}>
          Go Back
        </button>
      )}

      <button
        className="bg-blue-900 text-white text-xs px-3 py-2 rounded-md"
        onClick={step === 1 ? callback : onNextClick}>
        {step === 4 ? 'Confirm' : 'Next Step'}
      </button>
    </div>
  )
}

export default NextButton
