import axios from "axios";
import { AIResponseStatsModel } from "@/models/AIResponseStatsModel";
import { useCallback, useEffect, useState } from "react";

export default function useAIResponseStats() {
  const [loading, setLoading] = useState(true);
  const [data, setData] = useState<AIResponseStatsModel | null>(null);

  const fetchData = useCallback(async () => {
    setLoading(true);
    const data = await axios.get<AIResponseStatsModel>("/api/ai/response-stats");
    setData(data.data);
    setLoading(false);
  }, []);

  useEffect(() => {
    fetchData();
  }, [fetchData]);

  return { loading, data };
}
