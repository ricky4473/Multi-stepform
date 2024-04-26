//@ts-nocheck
'use client'

const NextButton = ({ step, setStep }: any) => {
  const onBackClick = () => {
    setStep(step - 1)
  }
  const onNextClick = () => {
    setStep(step + 1)
  }
  switch (step) {
    case 1:
      return <></>
    case 4:
      return (
        <div className="flex flex-row justify-between">
          <button className="text-slate-400 text-xs hover:text-blue-900" onClick={onBackClick}>
            Go Back
          </button>

          <button
            className="bg-blue-900 text-white text-xs px-3 py-2 rounded-md"
            onClick={onNextClick}>
            Confirm
          </button>
        </div>
      )
    case 5:
      return <></>
    default:
      return (
        <div className="flex flex-row justify-between">
          <button className="text-slate-400 text-xs hover:text-blue-900" onClick={onBackClick}>
            Go Back
          </button>

          <button
            className="bg-blue-900 text-white text-xs px-3 py-2 rounded-md"
            onClick={onNextClick}>
            Next Step
          </button>
        </div>
      )
  }
}

export default NextButton
