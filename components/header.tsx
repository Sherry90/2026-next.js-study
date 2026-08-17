import Image from "next/image";

export default function Header() {
  return (
    <>
      <Image
        className="h-5 w-[100px] dark:invert"
        src="/next.svg"
        alt="Next.js logo"
        width={100}
        height={20}
        priority
      />
      <h1>Welcome to this NextJs Course!</h1>
    </>
  );
}
