const Step = ({ step, title, nowStep }: any) => {
  const activeClass = step === nowStep ? 'bg-sky-200 text-black' : 'text-white'
  return (
    <div className="flex flex-row items-center uppercase mb-4">
      <p
        className={`mr-4 flex h-8 w-8 items-center justify-center rounded-full border border-white  p-1 text-center text-xs font-semibold  ${activeClass}`}>
        <span>{step}</span>
      </p>
      <div className="flex flex-col">
        <p className="text-[10px] text-slate-300">step {step}</p>
        <p className="text-[13px] font-[500]">{title}</p>
      </div>
    </div>
  )
}

export default Step
