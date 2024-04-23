export default function Step ({ step, title, active }) {
  return (
    <div class="flex flex-row items-center uppercase">
      <p class="mr-4 flex h-8 w-8 items-center justify-center rounded-full border border-white bg-sky-200 p-1 text-center text-xs font-semibold text-black">
        <span>1</span>
      </p>
      <div class="flex flex-col">
        <p class="text-[10px] text-slate-300">step {step}</p>
        <p class="text-[13px] font-semibold">{title}</p>
      </div>
    </div>
  );
}
