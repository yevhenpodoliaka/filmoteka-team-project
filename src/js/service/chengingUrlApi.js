function changeUrl() {
  const href = location.href;
  // const search = location.search;
  // console.log(search);
  const url = new URL(href);

  return {
    // goToStartPage: function () {
    //   url.searchParams.delete('with_genres');
    //   url.searchParams.delete('primary_release_year'); //
    //   url.searchParams.delete('page');
    //   url.searchParams.delete('query');
    //   history.pushState({}, '', `${url}`);
    // },

    reset: function () {
      url.searchParams.delete('page');
      url.searchParams.delete('query');
      url.searchParams.delete('with_genres');
      url.searchParams.delete('primary_release_year');
      history.pushState({}, '', `${url}`);
    },

    goToSearch: function (searchQuery) {
      url.searchParams.delete('page');
      url.searchParams.delete('with_genres');
      url.searchParams.delete('primary_release_year');

      url.searchParams.set('query', searchQuery);
      history.pushState({}, '', `${url}`);
    },

    goToFilter: function (genre, year) {
      url.searchParams.delete('page');
      url.searchParams.delete('query');

      url.searchParams.set('primary_release_year', year);
      url.searchParams.set('with_genres', genre);
      history.pushState({}, '', `${url}`);
    },

    isFilter: function () {
      return (
        url.searchParams.has('primary_release_year') ||
        url.searchParams.has('with_genres')
      );
    },

    isSearch: function () {
      return url.searchParams.has('query');
    },

    changePage: function (value) {
      url.searchParams.set('page', +value);
      history.pushState({}, '', `${url}`);
    },

    setQuery: function (searchQuery) {
      url.searchParams.set('query', searchQuery);
      history.pushState({}, '', `${url}`);
    },

    getQuery: function () {
      return url.searchParams.get('query');
    },

    getGenre: function () {
      return url.searchParams.get('with_genres');
    },

    getYeare: function () {
      return url.searchParams.get('primary_release_year');
    },

    setFilter: function (genre, year) {
      url.searchParams.set('with_genres', genre);
      url.searchParams.set('primary_release_year', year);
      history.pushState({}, '', `${url}`);
    },

    getCurrentPage() {
      return url.searchParams.get('page') ?? 1;
    },
  };
}

export { changeUrl };
