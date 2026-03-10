import Link from "next/link";

export default function Home() {
  return (
    <main className="min-h-screen flex items-center justify-center px-6">

      <div className="max-w-4xl w-full text-center flex flex-col gap-6 opacity-0 animate-fadeUp">

        <h1 className="text-4xl md:text-5xl font-bold">
          Lavanya Sunkara
        </h1>

        <p className="text-lg text-gray-400">
          AI Engineer | Agentic AI, RAG, Streamlit | MS CS @ NJIT
        </p>

        {/* Optional navigation buttons */}
        <div className="flex gap-6 mt-6 justify-center">
          <Link href="/about" className="underline hover:text-gray-300">
            About
          </Link>

          <Link href="/projects" className="underline hover:text-gray-300">
            Projects
          </Link>

          <Link href="/contact" className="underline hover:text-gray-300">
            Contact
          </Link>
        </div>

      </div>

    </main>
  );
}