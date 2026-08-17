import Link from "next/link";
import Header from "@/components/header";

export default function Home() {
  return (
    <div className="bg-zinc-50 font-sans dark:bg-black flex flex-1 flex-col items-center justify-center">
      <main className="max-w-3xl bg-white px-16 py-32 sm:items-start dark:bg-black flex w-full flex-1 flex-col items-center justify-between">
        <Header />
        <p>
          <Link href={"/about"}>About Us</Link>
        </p>
      </main>
    </div>
  );
}
