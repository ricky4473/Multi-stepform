import Image from "next/image";
interface myProp{
  image:string
  title:string
  price:number
  selectedPlan:any
  setSelectedPlan:any
}

export default function PlanButton ({
  image,
  title,
  price,
  selectedPlan,
  setSelectedPlan,
}:myProp) {
  return (
    <button
      onClick={() => setSelectedPlan(title)}
      className={`border border-slate-300 hover:border-blue-500 w-full rounded-lg  h-[140px] p-3 flex flex-col justify-between items-start ${selectedPlan === title ? "bg-blue-100" : ""}`}
    >
      <Image src={image} alt=""></Image>
      <div className="text-left">
        <h1 className=" font-bold">{title}</h1>
        <p className="text-xs text-slate-400">${price}/mo</p>
      </div>
    </button>
  );
}
