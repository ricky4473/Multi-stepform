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
export default function () {
  const [selectedPlan, setSelectedPlan] = useState("Arcade");
  const [monthYear, setMonthYear] = useState(true);
  return (
    <div class="var">
      <h1 class="mt-1 text-xl font-semibold">Select your plan</h1>
      <small class="text-slate-400">
        you have the option of monthly or yearly billing.
      </small>
      <div class="w-full flex flex-row gap-4 justify-between mt-5 ">
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
      <div className="mt-3 p-3 flex flex-row justify-center items-center bg-blue-100 rounded-lg">
        <p
          class={`ms-3 text-sm font-medium  dark:text-gray-300 mr-2 ${monthYear ? "text-gray-900" : "text-slate-300"}`}
        >
          Monthly
        </p>
        <label class="inline-flex items-center cursor-pointer">
          <input
            type="checkbox"
            value=""
            class="sr-only peer"
            checked
            onChange={(e) => {
              setMonthYear(e.target.value);
            }}
          />
          <div class="relative w-11 h-6 bg-gray-200 rounded-full peer peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 dark:bg-gray-700 peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-0.5 after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600"></div>
        </label>{" "}
        <p
          class={`ms-3 text-sm font-medium  dark:text-gray-300 mr-2 ${!monthYear ? "text-gray-900" : "text-slate-300"}`}
        >
          Yearly
        </p>
      </div>
    </div>
  );
}
