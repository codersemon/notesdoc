import Link from "next/link";

function Homepage() {
  return (
    <div className="h-screen w-screen flex flex-col gap-y-3 justify-center items-center bg-[#0b1120] text-white">
      <Link href="/reactjs" className="border px-5 py-2 rounded-lg hover:bg-[#535ee0]">React JS Note</Link>
      <Link href="/nextjs" className="border px-5 py-2 rounded-lg hover:bg-[#535ee0]">Next JS Note</Link>
    </div>
  );
}

export default Homepage;
