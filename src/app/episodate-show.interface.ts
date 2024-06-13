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

export interface FavoritesList {
  image: string | null;
  name: string | null;
  next_episode_date: Date | null;
}

export type TvShowIds = Array<EpisodateShow['id']>;
export type TvShowId = EpisodateShow['id'];
