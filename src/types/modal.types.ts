import { Movie } from './moviejson.type'
export interface ModalActions {
  movieSelected?: Movie
  setMovieSelected: (movie: Movie) => void
  onOpenModal: (bool: boolean) => void
}
