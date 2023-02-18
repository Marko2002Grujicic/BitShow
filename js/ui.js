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
        <div class="cast-item">${string}</div>
        `;
      });
      let seasonList = '';
      console.log(show.seasons);
      show.seasons.forEach(({startDate, endDate}) =>{
        seasonList += `
        <div class="season-item">${startDate} - ${endDate}</div>
        `
      });
      const finalHtml = `
      <h1>${show.name}</h1>
      <div class="detail-wrapper">
        <img src="${show.coverUrl}" alt="show cover"/>
        <div class="list-wrapper">
          <h2>Seasons</h2>
          ${seasonList}
          <h2>Cast</h2>
          ${castListHtml}
        </div>
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