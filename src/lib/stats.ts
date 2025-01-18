import { MostUsedPromptsResponseModel } from "@/models/MostUsedPromptsResponseModel";
import { axiosAIServiceInstance } from "./axios";
import { AIResponseStatsModel } from "@/models/AIResponseStatsModel";

export async function getMostUsedPrompts({ token }: { token: string }) {
  try {
    const res = await axiosAIServiceInstance.get<MostUsedPromptsResponseModel>("/ai/prompts/most-used", {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    return res.data;
  } catch (e) {
    console.log("Error getting most used prompts", e);
    return null;
  }
}

export async function getAIResponseStats({ token }: { token: string }) {
  try {
    const res = await axiosAIServiceInstance.get<AIResponseStatsModel>("/ai/stats/quality", {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    return res.data;
  } catch (e) {
    console.log("Error getting AI response stats", e);
    return null;
  }
}
