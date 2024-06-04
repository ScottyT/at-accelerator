export interface EpisodateShow {
  id: number;
  name: string;
  permalink: string;
  start_date: string;
  end_date: string;
  country: string;
  network: string;
  status: string;
  image_thumbnail_path: string;
}

export type TvShowIds = Array<EpisodateShow['id']>;
export type TvShowId = EpisodateShow['id'];
