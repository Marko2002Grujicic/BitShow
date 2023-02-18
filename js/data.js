const dataModule = (function () {

    class TvShow {
      constructor(name, id, coverUrl, cast, summary, crew, aka, episode) {
        this.id = id;
        this.name = name;
        this.coverUrl = coverUrl;
        this.cast = cast;
        this.summary = summary;
        this.crew = crew;
        this.aka = aka;
        this.episode = episode;
      }
    }
    class Season{
      constructor(premiereDate, endDate){
        this.premiereDate = premiereDate;
        this.endDate = endDate;
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
    const getSingleTvShow = (id) => {
      return fetch(`https://api.tvmaze.com/shows/${id}?embed[]=seasons&embed[]=cast`)
      .then(function(res){
        return res.json();
      })
      .then(function(rawTvShow){
        const tvSeasons = rawTvShow._embedded.seasons.map(
          (s) => new Season (s.premiereDate, s.endDate)
        );
        const cast = rawTvShow._embedded.cast.map((a) => a.person.name);
        return new TvShow(
          rawTvShow.name,
          rawTvShow.id,
          rawTvShow.image.original,
          rawTvShow.summary,
          cast,
          tvSeasons
        );
      });
    };
        
       
    
  
    return { getShows, searchShow, getSingleTvShow };
  })();