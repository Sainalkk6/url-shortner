"use client";

import { FormEvent, useState } from "react";

export default function Home() {
  const [url, setUrl] = useState("");
  const [shorted, setShorted] = useState("");
  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    const response = await fetch("http://localhost:3012", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ original_url: url }),
    });
    const data = await response.json();
    setUrl("");
    setShorted(data);
    console.log(data);
  };
  return (
    <div className="flex bg-slate-500 w-full items-center justify-center min-h-screen">
      <div className="flex flex-col px-8 py-[34px] bg-white shadow-xl rounded-[60px] w-full max-w-[896px] min-h-[314px]">
        <h4 className="text-3xl text-black font-semibold mb-[10px]">Shorten your links</h4>
        <form onSubmit={handleSubmit} className="flex flex-col gap-4">
          <input type="text" value={url} onChange={(e) => setUrl(e.target.value)} placeholder="Enter the url you wanna shorten" className="text-black text-lg py-2 px-4 border-l-slate-500 border outline-none" />
          <button type="submit" className="bg-black px-5 py-2 rounded max-w-[100px] text-lg text-white">
            Submit
          </button>
          {shorted.length > 0 && shorted === "Please provide a valid url" ? <span className="text-red-500">{shorted}</span> : (shorted.length > 0 && <span className="text-black">{`http://localhost:3012/${shorted}`}</span>)}
        </form>
      </div>
    </div>
  );
}
