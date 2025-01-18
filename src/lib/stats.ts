import { MostUsedPromptsResponseModel } from "@/models/MostUsedPromptsResponseModel";
import { axiosInstance } from "./axios";

export async function getMostUsedPrompts() {
  try {
    const res = await axiosInstance.get<MostUsedPromptsResponseModel>("/ai/prompts/most-used");
    return res.data;
  } catch (e) {
    console.log("Error getting most used prompts", e);
    return null;
  }
}
