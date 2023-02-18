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
    return { renderHomePage, renderSearchDropdown, clearDropdown };
  })();