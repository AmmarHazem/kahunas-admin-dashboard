"use client";
import { useRouter } from "next/navigation";

export default function Home() {
  const router = useRouter();

  const handleLogout = async () => {
    try {
      await fetch("/api/logout", {
        method: "POST",
      });
      router.push("/login");
      router.refresh();
    } catch (error) {
      console.error("Logout failed:", error);
    }
  };

  return (
    <main className="min-h-screen p-8">
      <div className="max-w-4xl mx-auto">
        <div className="flex justify-between items-center mb-8">
          <h1 className="text-2xl font-bold">Welcome to Dashboard</h1>
          <button onClick={handleLogout} className="px-4 py-2 bg-red-600 text-white rounded-md hover:bg-red-700">
            Logout
          </button>
        </div>
        {/* Add your dashboard content here */}
      </div>
    </main>
  );
}
