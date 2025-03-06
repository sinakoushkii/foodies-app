import Link from "next/link";

export default function Home() {
  return (
    <main>
      <div style={{ color: "white", textAlign: "center" }}>
        <p>
          <Link href="/">Home</Link>
        </p>
        <p>
          <Link href="/community">community</Link>
        </p>
        <p>
          <Link href="/meals">meals</Link>
        </p>
        <p>
          <Link href="/meals/share">meals - share</Link>
        </p>
        <p>
          <Link href="/meals/1">meals - 1</Link>
        </p>
        <p>
          <Link href="/meals/2">meals - 2</Link>
        </p>
      </div>
    </main>
  );
}
