import Link from "next/link";
import Image from "next/image";
import Header from "./header";

export default function Home() {
  return (
    <main>
      <Header />
      <p><Link href="/about"> About Us</Link></p>
    </main>
  );
}
