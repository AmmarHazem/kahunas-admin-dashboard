import { BaseResponseModel } from "./BaseResponseModel";

export interface AIResponseStatsModel extends BaseResponseModel {
  stats?: StatsModel;
}

export interface StatsModel {
  averageRelevance?: number;
  averageClarity?: number;
  averageTone?: number;
  averageOverall?: number;
  totalResponses?: number;
}
