import Image from "next/image";

export default function Home() {
  return  <div className="var">
  <h1 className="mt-1 text-xl font-semibold">Personal info</h1>
  <small className="text-slate-400">
    Please provide your name, email address, and phone number.
  </small>
  <form className="mt-3" action="">
    <label htmlFor="name" className="text-sm font-bold">
      Name
    </label>
    <input
      id="name"
      type="text"
      placeholder="Your Name"
      className="text-semibold focus:outline-none focus:border-blue-500 mb-3 w-full rounded-md border border-slate-300 p-2 bg-transparent"
    />{" "}
    <label htmlFor="email" className="text-sm font-bold">
      Email Address
    </label>
    <input
      id="email"
      type="text"
      placeholder="Your email"
      className=" text-semibold  focus:outline-none mb-3 w-full rounded-md border border-slate-300 focus:border-blue-500 p-2 bg-transparent"
    />{" "}
    <label htmlFor="phone" className="text-sm font-bold">
      phone
    </label>
    <input
      id="phone"
      type="number"
      placeholder="e.g. +1 234 567 890"
      className="text-semibold focus:outline-none focus:border-blue-500 mb-3 w-full rounded-md border border-slate-300 p-2 bg-transparent"
    />
  </form>
</div>
;
}
