"use client";
import AIResponseStatsCardsGrid from "@/components/AIResponseStatsCardsGrid";
import LogoutButton from "@/components/LogoutButton";
import MostUsedPromptsTable from "@/components/MostUsedPromptsTable";

export default function Home() {
  return (
    <main className="min-h-screen p-4 md:p-8 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        <div className="flex justify-between items-center mb-8">
          <h1 className="text-2xl font-bold text-gray-900">Analytics Dashboard</h1>
          <LogoutButton />
        </div>
        <AIResponseStatsCardsGrid />
        <MostUsedPromptsTable />
      </div>
    </main>
  );
}
