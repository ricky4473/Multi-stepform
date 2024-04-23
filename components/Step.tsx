export default function Step ({ step, title, active }) {
  return (
    <div className="flex flex-row items-center uppercase">
      <p className="mr-4 flex h-8 w-8 items-center justify-center rounded-full border border-white bg-sky-200 p-1 text-center text-xs font-semibold text-black">
        <span>1</span>
      </p>
      <div className="flex flex-col">
        <p className="text-[10px] text-slate-300">step {step}</p>
        <p className="text-[13px] font-semibold">{title}</p>
      </div>
    </div>
  );
}
