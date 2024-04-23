"use client";
import { useRef, useState } from "react";
import Image from "next/image";
import iconarcade from "@/public/images/icon-arcade.svg";
import iconadvanced from "@/public/images/icon-advanced.svg";
import iconpro from "@/public/images/icon-pro.svg";
import PlanButton from "@/components/PlanButton";
const plan = [
  { image: iconarcade, title: "Arcade", price: 9 },
  { image: iconadvanced, title: "Advanced", price: 12 },
  { image: iconpro, title: "Pro", price: 15 },
];
export default function SelectPlan () {
  const [selectedPlan, setSelectedPlan] = useState("Arcade");
  const [monthYear, setMonthYear] = useState(true);
  return (
    <div className="var">
      <h1 className="mt-1 text-xl font-semibold">Select your plan</h1>
      <small className="text-slate-400">
        you have the option of monthly or yearly billing.
      </small>
      <div className="w-full flex flex-row gap-4 justify-between mt-5 ">
        {plan.map((item, index) => {
          return (
            <PlanButton
              selectedPlan={selectedPlan}
              setSelectedPlan={setSelectedPlan}
              key={index}
              image={item.image}
              title={item.title}
              price={item.price}
            />
          );
        })}
      </div>
      <div className="mt-5 bg-slate-100 py-2 gap-5 flex flex-row justify-center items-center rounded-lg">
        <p className={`text-slate-500 font-bold text-sm ${monthYear&&'text-blue-950'}`}>Monthly</p>
        <input type="checkbox" className="toggle bg-white border-white" onClick={()=>{setMonthYear(!monthYear)}} />
        <p className={`text-slate-500 font-bold text-sm ${!monthYear&&'text-blue-950'}`}>Yearly</p>
      </div>
    </div>
  );
}
