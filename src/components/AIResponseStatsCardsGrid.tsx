import useAIResponseStats from "@/hooks/useAIResponseStats";
import { FC } from "react";

const AIResponseStatsCardsGrid: FC = () => {
  const { data, loading } = useAIResponseStats();

  if (loading) {
    return <p className="text-center py-4 w-full text-2xl font-bold text-neutral-400 h-[300px]">Loading...</p>;
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mb-8">
      <div className="bg-white p-6 rounded-lg shadow-sm">
        <h3 className="text-sm font-medium text-gray-500">Average Relevance Score</h3>
        <p className="mt-2 text-3xl font-semibold text-indigo-600">
          {data?.stats?.averageRelevance?.toLocaleString(undefined, { maximumFractionDigits: 2 })}{" "}
          <span className="text-sm text-gray-500 ms-1">/ 5</span>
        </p>
      </div>
      <div className="bg-white p-6 rounded-lg shadow-sm">
        <h3 className="text-sm font-medium text-gray-500">Average Clarity Score</h3>
        <p className="mt-2 text-3xl font-semibold text-blue-600">
          {data?.stats?.averageClarity?.toLocaleString(undefined, { maximumFractionDigits: 2 })}
          <span className="text-sm text-gray-500 ms-1">/ 5</span>
        </p>
      </div>
      <div className="bg-white p-6 rounded-lg shadow-sm">
        <h3 className="text-sm font-medium text-gray-500">Average Tone Score</h3>
        <p className="mt-2 text-3xl font-semibold text-purple-600">
          {data?.stats?.averageTone?.toLocaleString(undefined, { maximumFractionDigits: 2 })}
          <span className="text-sm text-gray-500 ms-1">/ 5</span>
        </p>
      </div>
      <div className="bg-white p-6 rounded-lg shadow-sm">
        <h3 className="text-sm font-medium text-gray-500">Average Overall Score</h3>
        <p className="mt-2 text-3xl font-semibold text-green-600">
          {data?.stats?.averageOverall?.toLocaleString(undefined, { maximumFractionDigits: 2 })}
          <span className="text-sm text-gray-500 ms-1">/ 5</span>
        </p>
      </div>
      <div className="bg-white p-6 rounded-lg shadow-sm">
        <h3 className="text-sm font-medium text-gray-500">Total Responses</h3>
        <p className="mt-2 text-3xl font-semibold text-orange-600">
          {data?.stats?.totalResponses?.toLocaleString(undefined, { maximumFractionDigits: 2 })}
        </p>
      </div>
    </div>
  );
};

export default AIResponseStatsCardsGrid;
