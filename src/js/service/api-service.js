const BASE_URL = 'https://api.themoviedb.org/3';
const KEY = '81f57ce8a5863d84fdab7c29ba0c37c2';

export default class ApiService {
  constructor() {
    this.searchQuery = '';
    this.page = 1;
    this.searchId = '';
    this.genre = '';
    this.year = '';
  }

  async fetchMoviesByFilters() {
    const url = `${BASE_URL}/discover/movie?api_key=${KEY}&language=en-US&primary_release_year=${this.year}&with_genres=${this.genre}&page=${this.page}`;
    const response = await fetch(url);
    const data = await response.json();
    return data;
  }

  async fetchGenres() {
    const url = `${BASE_URL}/genre/movie/list?api_key=${KEY}&language=en-US`;
    const response = await fetch(url);
    const data = await response.json();
    return data;
  }

  async fetchTrending() {
    const url = `${BASE_URL}/trending/movie/day?api_key=${KEY}&page=${this.page}`;
    const response = await fetch(url);
    const data = await response.json();
    return data;
  }

  async fetchSearchMovie() {
    const url = `${BASE_URL}/search/movie?api_key=${KEY}&language=en-US&query=${this.searchQuery}&page=${this.page}&include_adult=false`;
    const response = await fetch(url);
    const data = await response.json();
    return data;
  }

  async fetchMovieDetails(movieId) {
    const url = `${BASE_URL}/movie/${movieId}?api_key=${KEY}&language=en-US`;
    const response = await fetch(url);
    const data = await response.json();
    return data;
  }
  async searchTrailerById(movieId) {
    const url = `${BASE_URL}/movie/${movieId}/videos?api_key=${KEY}&language=en-US`;
    const response = await fetch(url);
    const data = await response.json();
    const trailer = data.results.find(el => el.name.includes('Official'));
    return trailer.key;
  }
  incrementPage() {
    this.page += 1;
  }

  decrementPage() {
    this.page -= 1;
  }

  get pageNumber() {
    return this.page;
  }

  set pageNumber(number) {
    this.page = number;
  }

  resetPage() {
    this.page = 1;
  }

  get query() {
    return this.searchQuery;
  }

  set query(newQuery) {
    this.searchQuery = newQuery;
  }

  get movieId() {
    return this.searchId;
  }

  set movieId(newId) {
    this.searchId = newId;
  }

  get yearFilter() {
    return this.year;
  }

  set yearFilter(newYear) {
    this.year = newYear;
  }

  get genreIdFilter() {
    return this.genre;
  }

  set genreIdFilter(newGenre) {
    this.genre = newGenre;
  }
}

//
