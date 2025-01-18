"use client";
import { useParams, useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { axiosAPIInstance } from "@/lib/axios";

interface Client {
  id: string;
  firstName: string;
  lastName: string;
  email: string;
  // Add other client fields as needed
}

export default function ClientDetails() {
  const params = useParams();
  const router = useRouter();
  const [client, setClient] = useState<Client | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchClient = async () => {
      try {
        const response = await axiosAPIInstance.get(`/api/users/clients/${params.id}`);
        setClient(response.data.data);
      } catch {
        setError("Failed to load client details");
      } finally {
        setLoading(false);
      }
    };

    fetchClient();
  }, [params.id]);

  if (loading) return <div className="p-8 text-center">Loading...</div>;
  if (error) return <div className="p-8 text-center text-red-500">{error}</div>;
  if (!client) return <div className="p-8 text-center">Client not found</div>;

  return (
    <div className="p-8">
      <div className="max-w-3xl mx-auto">
        <div className="mb-6 flex items-center justify-between">
          <h1 className="text-2xl font-bold text-gray-900">Client Details</h1>
          <button
            onClick={() => router.back()}
            className="px-4 py-2 text-sm font-medium text-gray-700 bg-white border border-gray-300 rounded-md hover:bg-gray-50"
          >
            Back to Clients
          </button>
        </div>

        <div className="bg-white shadow rounded-lg overflow-hidden">
          <div className="p-6 space-y-4">
            <div>
              <h3 className="text-sm font-medium text-gray-500">Name</h3>
              <p className="mt-1 text-sm text-gray-900">
                {client.firstName} {client.lastName}
              </p>
            </div>
            <div>
              <h3 className="text-sm font-medium text-gray-500">Email</h3>
              <p className="mt-1 text-sm text-gray-900">{client.email}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
