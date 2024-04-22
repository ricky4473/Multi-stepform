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
              key={index}
              image={item.image}
              title={item.title}
              price={item.price}
            />
          );
        })}
      </div>
    </div>
  );
}
