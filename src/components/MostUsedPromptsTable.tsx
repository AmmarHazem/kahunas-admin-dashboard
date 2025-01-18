import useMostUsedPrompts from "@/hooks/useMostUsedPrompts";
import { FC } from "react";

const MostUsedPromptsTable: FC = () => {
  const { data, loading } = useMostUsedPrompts();

  return (
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
          {loading ? (
            <tbody>
              <tr>
                <td colSpan={2}>
                  <p className="text-center py-4 w-full text-2xl font-bold text-neutral-400">Loading...</p>
                </td>
              </tr>
            </tbody>
          ) : (
            <tbody className="bg-white divide-y divide-gray-200">
              {data?.prompts?.map((item, index) => (
                <tr key={index}>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">{item.prompt}</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{item.count}</td>
                </tr>
              ))}
            </tbody>
          )}
        </table>
      </div>
    </div>
  );
};

export default MostUsedPromptsTable;
