import Image from "next/image";
import Navbar from "./components/Navbar";
import Link from "next/link";

export default async function Home() {
  return (
    <main className="max-w-screen-xl mx-auto">
      <Navbar />
      <h1>Esta es la home, si queres ver algo anda al blog</h1>
    </main>
  );
}
