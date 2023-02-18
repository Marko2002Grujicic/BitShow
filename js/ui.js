const uiModule = (function () {
    const mainContentWrapperEl = document.querySelector('#main-content');
    const searchDropdownEl = document.querySelector('#search-dropdown');
  
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
      let castListHtml = '';
      show.cast.forEach((string) =>{
        castListHtml += `
        <li class="cast-item">${string}</li>
        `;
      });
      let seasonList = '';
      let numberOfSeasons = 0;
      show.seasons.forEach(({premiereDate, endDate}) =>{
        numberOfSeasons += 1;
        seasonList += `
        <li class="season-item">${premiereDate} - ${endDate}</li>
        `
      });
      console.log(seasonList);
      // let numberOfSeasons = function
      const finalHtml = `
      <h1>${show.name}</h1>
      <div class="detail-wrapper">
        <img src="${show.coverUrl}" alt="show cover" class="single-page-cover"/>
        <ul class="list-wrapper">
          <h2>Seasons(${numberOfSeasons})</h2>
          ${seasonList}
          <h2>Cast</h2>
          ${castListHtml}
        </ul>
      </div>
      <h2>Show Details</h2>
      ${show.summary}
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