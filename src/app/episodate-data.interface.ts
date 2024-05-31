import { EpisodateShow } from './episodate-show.interface';

export interface EpisodateData {
  page: number;
  pages: number;
  total: number;
  tv_shows: EpisodateShow[];
}
