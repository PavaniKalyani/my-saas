import Link from "next/link";

export default function Home() {
  return (
    <main className="flex flex-col items-center justify-center min-h-screen gap-6">
      
      <div className="flex flex-col items-center gap-6 
                   opacity-0
                  animate-fadeUp">

      <h1 className="text-4xl font-bold">
        Pavani G
      </h1>

      <p className="text-lg text-gray-600">
        Senior Data Engineer | Distributed Systems |Independant Consultant 
      </p>

      <div className="flex gap-6 mt-6">
        <Link href="/about" className="underline">
          About
        </Link>

        <Link href="/projects" className="underline">
          Projects
        </Link>

        <Link href="/contact" className="underline">
          Contact
        </Link>
      </div>
    </div>
    </main>
  );
}
