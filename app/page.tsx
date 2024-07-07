import Image from "next/image";
import Link from 'next/link'

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div className="z-10 w-full max-w-5xl items-center justify-between font-mono text-sm lg:flex">
        <p>
          <code>
            Familiarization Exercise
            From this list, rank your 5 most favourite and 5 least favourite support tasks. Provide a brief explanation for each.
            5 most favourite tasks are
          </code>
        </p>
      </div>
    </main>
  );
}
