const uiModule = (function () {
    const mainContentWrapperEl = document.querySelector('#main-content');
    const searchDropdownEl = document.querySelector('#search-dropdown');
    const accordion = document.querySelector('.show-details');

    const renderHomePage = (shows) => {
      let html = `
              <h1>All TV Shows</h1>
              </br>
              <div id="show-list">
          `;
  
      shows.forEach((show) => {
        html += `
               <div class="show-item" id="${show.id}">
                   <img src="${show.coverUrl}" alt="show cover image"/>
                  <p>${show.name}</p>
               </div>
              `;
      });
  
      html += `</div>`;
      mainContentWrapperEl.innerHTML = html;
    }
  
    const renderSingleTvShowPage = (show) => {
      // Cast
      let castListHtml = '';
      let castCounter = 0;
      show.cast.forEach((string) =>{
        if (castCounter < 10){
          castListHtml += `
          <li class="cast-item">${string}</li>
          `
        }
      });
      // Seasons
      let seasonList = '';
      let numberOfSeasons = 0;
      show.seasons.forEach(({premiereDate, endDate}) =>{
        numberOfSeasons += 1;
        seasonList += `
        <li class="season-item">${premiereDate} - ${endDate}</li>
        `
      });
      // Crew
     let crewMembers = '';
     let counter = 0;
     show.crew.forEach((string) => {
      counter +=1;
      if (counter < 6){
        crewMembers += `
        <li class="cast-item">${string}</li>
        `
      }
      else {
        return;
      };
     })
     let listOfEpisodes = '';
     show.episodes.forEach((string) =>{
      listOfEpisodes += `<p class="episodes">${string}</p>`
     })
     // Akas
     let listOfAkas = '';
     show.akas.forEach((string) =>{
      listOfAkas += `<p class="akas">${string}</p>`
     })
    
      const finalHtml = `
      <h1>${show.name}</h1>
      <div class="detail-wrapper">
        <img src="${show.coverUrl}" alt="show cover" class="single-page-cover"/>
        <ul class="list-wrapper">
          <h2>Seasons(${numberOfSeasons})</h2>
          ${seasonList}
          <h2>Cast</h2>
          ${castListHtml}
          <h2>Crew</h2>
          ${crewMembers}
        </ul>
      </div>
      <div class="show-details">
        <h2>Show Details</h2>
        ${show.summary}
        </br>
        <div class="more">
          
          <div class="akas-list">
            <h2> List of A.K.A.S</h2>
            ${listOfAkas}
          </div>
          <div class="episode-list">
            <h2> Episode List</h2>
            ${listOfEpisodes}
          </div>
        </div>
      </div>
      `;
      mainContentWrapperEl.innerHTML = finalHtml;
    };
    
    const renderSearchDropdown = (shows) => {
      shows.forEach((show) => {
        const itemEl = document.createElement('div');
        itemEl.setAttribute('id', show.id);
        itemEl.classList.add('search-item');
        itemEl.textContent = show.name;
        searchDropdownEl.appendChild(itemEl);
      });
    };
  
    const clearDropdown = () => {
      searchDropdownEl.innerHTML = '';
    };
    return { renderHomePage, renderSearchDropdown, clearDropdown, renderSingleTvShowPage };
  })();