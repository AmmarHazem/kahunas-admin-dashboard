"use client";
import LogoutButton from "@/components/LogoutButton";
import { useState } from "react";

export default function Home() {
  const [analyticsData, setAnalyticsData] = useState({
    topPrompts: [
      { prompt: "Example prompt 1", count: 150 },
      { prompt: "Example prompt 2", count: 120 },
      { prompt: "Example prompt 3", count: 90 },
    ],
    metrics: {
      averageRelevance: 4.2,
      averageClarity: 4.0,
      averageTone: 4.5,
      averageOverall: 4.3,
      totalResponses: 1250,
    },
  });

  return (
    <main className="min-h-screen p-4 md:p-8 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        <div className="flex justify-between items-center mb-8">
          <h1 className="text-2xl font-bold text-gray-900">Analytics Dashboard</h1>
          <LogoutButton />
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mb-8">
          <div className="bg-white p-6 rounded-lg shadow-sm">
            <h3 className="text-sm font-medium text-gray-500">Average Relevance Score</h3>
            <p className="mt-2 text-3xl font-semibold text-indigo-600">{analyticsData.metrics.averageRelevance}</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-sm">
            <h3 className="text-sm font-medium text-gray-500">Average Clarity Score</h3>
            <p className="mt-2 text-3xl font-semibold text-blue-600">{analyticsData.metrics.averageClarity}</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-sm">
            <h3 className="text-sm font-medium text-gray-500">Average Tone Score</h3>
            <p className="mt-2 text-3xl font-semibold text-purple-600">{analyticsData.metrics.averageTone}</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-sm">
            <h3 className="text-sm font-medium text-gray-500">Average Overall Score</h3>
            <p className="mt-2 text-3xl font-semibold text-green-600">{analyticsData.metrics.averageOverall}</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-sm">
            <h3 className="text-sm font-medium text-gray-500">Total Responses</h3>
            <p className="mt-2 text-3xl font-semibold text-orange-600">{analyticsData.metrics.totalResponses}</p>
          </div>
        </div>
        <div className="bg-white rounded-lg shadow-sm overflow-hidden">
          <div className="px-6 py-4 border-b border-gray-200">
            <h2 className="text-lg font-medium text-gray-900">Most Used Prompts</h2>
          </div>
          <div className="overflow-x-auto">
            <table className="min-w-full divide-y divide-gray-200">
              <thead className="bg-gray-50">
                <tr>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Prompt</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Usage Count</th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                {analyticsData.topPrompts.map((item, index) => (
                  <tr key={index}>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">{item.prompt}</td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{item.count}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </main>
  );
}
