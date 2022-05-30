import { API_KEY, BASE_URL } from '../api/config'
import dataJson from '../data/movies.json'
import { Response } from '../types/moviejson.type'

export const getMoviesJson = () => {
  return dataJson
}

export const getMoviesApi = async (): Promise<Response> => {
  const res = await fetch(
    `${BASE_URL}/discover/movie?api_key=${API_KEY}&language=es&sort_by=release_date.desc&include_adult=false&include_video=false&page=1&primary_release_date.gte=2021-09-01&primary_release_date.lte=2021-12-31`
  )
  const data = await res.json()

  return data
}

export const getMoviesByQuery = async (query: string): Promise<Response> => {
  const res = await fetch(
    `${BASE_URL}/search/movie?api_key=${API_KEY}&language=es&query=${
      query || ''
    }&page=1&include_adult=false&year=2021`
  )
  const data = await res.json()

  return data
}

export const getUrlImage = (posterPath: string) => {
  return `https://image.tmdb.org/t/p/original/${posterPath}`
}
