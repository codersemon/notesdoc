import Link from "next/link";

function Homepage() {
  return (
    <div className="h-screen w-screen flex flex-col gap-y-3 justify-center items-center bg-[#0b1120] text-white">
      <Link
        href="/reactjs"
        className="border px-5 py-2 rounded-lg hover:bg-[#535ee0]"
      >
        React JS
      </Link>
      <Link
        href="/nextjs"
        className="border px-5 py-2 rounded-lg hover:bg-[#535ee0]"
      >
        Next JS
      </Link>
      <Link
        href="/firebase"
        className="border px-5 py-2 rounded-lg hover:bg-[#535ee0]"
      >
        Firebase
      </Link>
      <Link
        href="/framer-motion"
        className="border px-5 py-2 rounded-lg hover:bg-[#535ee0]"
      >
        Framer Motion
      </Link>
      <Link
        href="/react-router-dom"
        className="border px-5 py-2 rounded-lg hover:bg-[#535ee0]"
      >
        React Router DOM
      </Link>
      <Link
        href="/tanstack-react-query"
        className="border px-5 py-2 rounded-lg hover:bg-[#535ee0]"
      >
        Tanstack/React Query
      </Link>
    </div>
  );
}

export default Homepage;
