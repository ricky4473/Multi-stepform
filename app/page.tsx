import Image from "next/image";

export default function Home() {
  return  <div class="var">
  <h1 class="mt-1 text-xl font-semibold">Personal info</h1>
  <small class="text-slate-400">
    Please provide your name, email address, and phone number.
  </small>
  <form class="mt-3" action="">
    <label for="name" class="text-sm font-bold">
      Name
    </label>
    <input
      id="name"
      type="text"
      placeholder="Your Name"
      class="text-semibold focus:outline-none focus:border-blue-500 mb-3 w-full rounded-md border border-slate-300 p-2"
    />{" "}
    <label for="email" class="text-sm font-bold">
      Email Address
    </label>
    <input
      id="email"
      type="text"
      placeholder="Your email"
      class=" text-semibold  focus:outline-none mb-3 w-full rounded-md border border-slate-300 focus:border-blue-500 p-2"
    />{" "}
    <label for="phone" class="text-sm font-bold">
      phone
    </label>
    <input
      id="phone"
      type="number"
      placeholder="e.g. +1 234 567 890"
      class="text-semibold focus:outline-none focus:border-blue-500 mb-3 w-full rounded-md border border-slate-300 p-2"
    />
  </form>
</div>
;
}
