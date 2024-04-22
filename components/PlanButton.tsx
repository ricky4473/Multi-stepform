import Image from "next/image";
export default function ({ image, title, price }) {
  return (
    <button className="border border-slate-300 w-full rounded-lg  h-[140px] p-3 flex flex-col justify-between items-start">
      <Image src={image}></Image>
      <div className="text-left">
        <h1>{title}</h1>
        <p>${price}/mo</p>
      </div>
    </button>
  );
}
