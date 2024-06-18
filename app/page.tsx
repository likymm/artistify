import Image from "next/image";

export default function Home() {
  return (
    
    <main className="min-h-screen">
        <div className="container mx-auto h-screen bg-white flex items-center justify-center">

        <Image
      src="/artistify.svg"
      alt="Artistify.js Logo"
      width={250}
      height={60}
      priority
    />
  
  </div>
    </main>
  );
}
