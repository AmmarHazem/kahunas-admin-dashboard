import { MostUsedPromptsResponseModel } from "@/models/MostUsedPromptsResponseModel";
import { useCallback, useEffect, useState } from "react";
import axios from "axios";

export default function useMostUsedPrompts() {
  const [loading, setLoading] = useState(true);
  const [data, setData] = useState<MostUsedPromptsResponseModel | null>(null);

  const fetchData = useCallback(async () => {
    setLoading(true);
    const data = await axios.get<MostUsedPromptsResponseModel>("/api/ai/most-used-prompts");
    setData(data.data);
    setLoading(false);
  }, []);

  useEffect(() => {
    fetchData();
  }, [fetchData]);

  return { loading, data };
}
