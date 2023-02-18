const dataModule = (function () {
    class TvShow {
      constructor(name, id, coverUrl) {
        this.id = id;
        this.name = name;
        this.coverUrl = coverUrl;
      }
    }
  
    const getShows = () => {
      return fetch('http://api.tvmaze.com/shows')
        .then(function (res) {
          return res.json();
        })
        .then(function (showsRawObjects) {
          return showsRawObjects.map(({ name, id, image }) => new TvShow(name, id, image.original));
        });
    };
  
    const searchShow = (term) => {
      return fetch(`https://api.tvmaze.com/search/shows?q=${term}`)
        .then(function (res) {
          return res.json();
        })
        .then(function (showsRawObjects) {
          return showsRawObjects.map(({ show }) => {
            const { name, id, image } = show;
            const imageToUse = image ? image.original : '';
            return new TvShow(name, id, imageToUse);
          });
        });
    };
  
    return { getShows, searchShow };
  })();