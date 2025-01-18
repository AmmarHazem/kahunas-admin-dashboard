import axios from "axios";
import { useRouter } from "next/navigation";
import { FC, useCallback, useState } from "react";

const LogoutButton: FC = () => {
  const router = useRouter();
  const [loading, setLoading] = useState(false);

  const handleLogout = useCallback(async () => {
    try {
      setLoading(true);
      await axios.post("/api/logout");
      router.replace("/login");
    } catch (error) {
      setLoading(false);
      console.error("Logout failed:", error);
    }
  }, [router]);

  return (
    <button
      disabled={loading}
      onClick={handleLogout}
      className="px-4 disabled:opacity-50 py-2 bg-red-600 text-white rounded-md hover:bg-red-700 transition-colors"
    >
      {loading ? "Loading..." : "Logout"}
    </button>
  );
};

export default LogoutButton;
