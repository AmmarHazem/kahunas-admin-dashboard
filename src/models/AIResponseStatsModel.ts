export interface AIResponseStatsModel {
  stats?: StatsModel;
}

export interface StatsModel {
  averageRelevance?: number;
  averageClarity?: number;
  averageTone?: number;
  averageOverall?: number;
  totalResponses?: number;
}
