export interface TvShowDetails {
  id: number;
  name: string;
  permalink: string;
  url: string;
  description: string;
  description_source: string | null;
  start_date: Date;
  end_date: null;
  country: string;
  status: string;
  runtime: number;
  network: string;
  youtube_link: null;
  image_path: string;
  image_thumbnail_path: string;
  rating: string;
  rating_count: string;
  countdown: Countdown;
  genres: string[];
  pictures: string[];
  episodes: Countdown[];
}

export interface Countdown {
  season: number;
  episode: number;
  name: string;
  air_date: Date;
}

export interface TvShowResponse {
  tvShow: TvShowDetails;
}
