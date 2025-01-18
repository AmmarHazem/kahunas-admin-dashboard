import { getAIResponseStats } from "@/lib/stats";
import { AIResponseStatsModel } from "@/models/AIResponseStatsModel";
import { useCallback, useEffect, useState } from "react";

export default function useAIResponseStats() {
  const [loading, setLoading] = useState(true);
  const [data, setData] = useState<AIResponseStatsModel | null>(null);

  const fetchData = useCallback(async () => {
    setLoading(true);
    const data = await getAIResponseStats();
    setData(data);
    setLoading(false);
  }, []);

  useEffect(() => {
    fetchData();
  }, [fetchData]);

  return { loading, data };
}
