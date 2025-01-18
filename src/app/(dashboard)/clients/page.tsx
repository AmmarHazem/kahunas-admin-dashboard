"use client";
import { useRouter, useSearchParams } from "next/navigation";
import useClients from "@/hooks/useClients";
import Link from "next/link";

export default function Clients() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const currentPage = Number(searchParams.get("page")) || 1;

  const { data, error, isLoading } = useClients({ page: currentPage });

  const updatePage = (newPage: number) => {
    const params = new URLSearchParams(searchParams);
    params.set("page", newPage.toString());
    router.push(`/clients?${params.toString()}`);
  };

  return (
    <main className="min-h-screen p-4 md:p-8 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        <div className="flex justify-between items-center mb-8">
          <h1 className="text-2xl font-bold text-gray-900">Clients</h1>
        </div>
        {isLoading && <div className="text-center">Loading...</div>}
        {error && <div className="text-red-500 text-center">Error loading clients</div>}
        {data?.data && (
          <>
            <div className="bg-white shadow rounded-lg overflow-hidden">
              <table className="min-w-full divide-y divide-gray-200">
                <thead className="bg-gray-50">
                  <tr>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Name</th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Email</th>
                  </tr>
                </thead>
                <tbody className="bg-white divide-y divide-gray-200">
                  {data.data.map((client) => (
                    <tr key={client.id}>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <Link href={`/clients/${client.id}`} className="block hover:bg-gray-50 cursor-pointer">
                          {client.firstName} {client.lastName}
                        </Link>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <Link href={`/clients/${client.id}`} className="block hover:bg-gray-50 cursor-pointer">
                          {client.email}
                        </Link>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <div className="mt-4 flex justify-center">
              <nav className="relative z-0 inline-flex rounded-md shadow-sm -space-x-px">
                <button
                  onClick={() => updatePage(Math.max(currentPage - 1, 1))}
                  disabled={currentPage === 1}
                  className="relative inline-flex items-center px-2 py-2 rounded-l-md border border-gray-300 bg-white text-sm font-medium text-gray-500 hover:bg-gray-50 disabled:bg-gray-100 disabled:cursor-not-allowed"
                >
                  Previous
                </button>
                <button
                  onClick={() => updatePage(currentPage + 1)}
                  disabled={!data?.data?.length || data?.data?.length < (data?.limit || 10)}
                  className="relative inline-flex items-center px-2 py-2 rounded-r-md border border-gray-300 bg-white text-sm font-medium text-gray-500 hover:bg-gray-50 disabled:bg-gray-100 disabled:cursor-not-allowed"
                >
                  Next
                </button>
              </nav>
            </div>
          </>
        )}
      </div>
    </main>
  );
}
