import Link from "next/link";

export default function Home() {
  return (
    <main className="flex flex-col items-center justify-center min-h-screen gap-6">
      
      <h1 className="text-4xl font-bold">
        Pavani G
      </h1>

      <p className="text-lg text-gray-600">
        Data Engineer | AI Consultant | Future Founder
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

    </main>
  );
}
