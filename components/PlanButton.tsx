import Image from "next/image";

export default function PlanButton ({
  image,
  title,
  price,
  selectedPlan,
  setSelectedPlan,
}) {
  return (
    <button
      onClick={() => setSelectedPlan(title)}
      className={`border border-slate-300 hover:border-blue-500 w-full rounded-lg  h-[140px] p-3 flex flex-col justify-between items-start ${selectedPlan === title ? "bg-blue-100" : ""}`}
    >
      <Image src={image}></Image>
      <div className="text-left">
        <h1 class=" font-bold">{title}</h1>
        <p class="text-xs text-slate-400">${price}/mo</p>
      </div>
    </button>
  );
}
