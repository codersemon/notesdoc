import Image from "next/image";
import Link from "next/link";

const notesLink = [
  {
    id: 7,
    name: "JavaScript",
    link: "/js",
    img: "/images/js.png"
  },
  {
    id: 7,
    name: "TypeScript",
    link: "/typescript",
    img: "/images/ts.png"
  },
  {
    id: 1,
    name: "React JS",
    link: "/reactjs",
    img: "/images/reactjs.png"
  },
  {
    id: 2,
    name: "Next JS",
    link: "/nextjs",
    img: "/images/nextjs.png"
  },
  {
    id: 3,
    name: "Firebase",
    link: "/firebase",
    img: "/images/firebase.png"
  },
  {
    id: 4,
    name: "Framer Motion",
    link: "/framer-motion",
    img: "/images/framer-motion.png"
  },
  {
    id: 5,
    name: "React Router DOM",
    link: "/react-router-dom",
    img: "/images/rrd.png"
  },
  {
    id: 6,
    name: "Tanstack/React Query",
    link: "/tanstack-react-query",
    img: "/images/tanstack-query.png"
  },
  {
    id: 7,
    name: "React Native",
    link: "/react-native",
    img: "/images/reactjs.png"
  },
   {
    id: 8,
    name: "PHP",
    link: "/php",
    img: "/images/php.png"
  }
];

function Homepage() {
  return (
    <div className="min-h-screen w-screen flex justify-center items-center bg-[#0b1120] text-white">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 p-4">
        {notesLink.map((note) => (
          <Link
            key={note.id}
            href={note.link}
            className="border px-5 py-2 rounded-lg bg-[#535ee0]/70  hover:bg-[#535ee0] flex flex-col items-center justify-center"
          >
            <Image
              alt={`${note.name} Note`}
              src={note.img}
              width={100}
              height={100}
              className="mb-2"
            />
            <span>{note.name}</span>
          </Link>
        ))}
      </div>
    </div>
  );
}

export default Homepage;