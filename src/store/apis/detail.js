import {
  korean,
  imagePath,
  YOUTUBE_PATH,
  getYoutubeThumbnail,
} from 'utils/constants';
import fetchData from 'utils/fetchData';
import getData from 'utils/getData';

const getMovieCasts = async (id) => {
  const rawResult = await fetchData(`movie/${id}/credits`);
  const result = rawResult.cast;

  const casts = result.map((cast) => {
    let profilePath = `${imagePath.w500}${cast.profile_path}`;
    if (cast.profile_path === null) {
      profilePath = imagePath.empty;
    }

    return {
      name: cast.name,
      role: cast.character,
      profilePath,
    };
  });

  return casts;
};

const getMovieSimilars = async (id) => {
  const rawResult = await fetchData(`movie/${id}/similar`, [korean]);
  const result = rawResult.results;

  return result.map((movie) => ({
    title: movie.title,
    posterPath: `${imagePath.w500}${movie.poster_path}`,
    id: movie.id,
  }));
};

export default async function detailAPI(payload) {
  const { id } = payload;
  const result = await getData(`api/movie/${id}`);

  const gallery = [];
  result.gallery.map((backdrop) => gallery.push(backdrop.backdrop_path));

  const movie = {
    id: result.tm_id,
    title: result.title,
    tagline: result.tagline,
    releaseYear: parseInt(result.release_date, 10),
    releaseDate: result.release_date,
    runtime: `${result.runtime} 분`,
    rating: result.rating,
    genres: result.genre,
    overview: result.overview,
    posterPath: result.poster,
    backdropPath: result.backdrop_path,
    images: gallery,
    simula: result.simula,
    casts: result.cast,
  };

  return movie;
}
