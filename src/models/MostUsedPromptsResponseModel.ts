import { BaseResponseModel } from "./BaseResponseModel";

export interface MostUsedPromptsResponseModel extends BaseResponseModel {
  prompts?: MostUsedPromptModel[];
}

export interface MostUsedPromptModel {
  prompt?: string;
  count?: number;
}
