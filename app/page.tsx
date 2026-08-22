import Link from "next/link";

export default function Home() {
  return (
    <main>
      <h1 style={{ color: "white", textAlign: "center" }}>
        Time to get started!
        <div>
          <p>
            <Link href="/meals">Meals</Link>
          </p>
          <p>
            <Link href="/meals/share">Share Meal</Link>
          </p>
          <p>
            <Link href="/community">community</Link>
          </p>
        </div>
      </h1>
    </main>
  );
}
