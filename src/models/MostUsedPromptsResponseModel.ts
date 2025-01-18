export interface MostUsedPromptsResponseModel {
  prompts?: MostUsedPromptModel[];
}

export interface MostUsedPromptModel {
  prompt?: string;
  count?: number;
}
