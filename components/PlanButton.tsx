import Image from 'next/image'

export default function PlanButton({
  item,
  selectedPlan,
  setSelectedPlan,
  monthYear,
}: any) {
  return (
    <button
      onClick={() => setSelectedPlan(item)}
      className={`border  hover:border-blue-500 w-full rounded-lg  h-[140px] p-3 flex flex-col justify-between items-start ${
        selectedPlan.title === item.title ? 'bg-blue-100 border-blue-500' : 'border-slate-300'
      }`}>
      <Image src={item.image} alt=""></Image>
      <div className="text-left">
        <h1 className=" font-bold">{item.title}</h1>
        <p className="text-xs text-slate-400">
          ${monthYear === 'Monthly' ? item.price + '/mo' : item.price  + '/yr'}
        </p>
        <p className="text-xs">{monthYear === 'Yearly' ? '2 months free' : ''}</p>
      </div>
    </button>
  )
}
