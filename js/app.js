(function (data, ui) {
    const searchInput = document.querySelector('#search-input');
    const searchDropdownEl = document.querySelector('#search-dropdown');
    const mainContentWrapper = document.querySelector("#main-content");
    const homeButtonEl = document.querySelector("#home-button")

    const onSearch = (e) => {
      const term = e.target.value;
      data.searchShow(term).then((shows) => {
        ui.clearDropdown();
        ui.renderSearchDropdown(shows);
      });
    };

    const onSearchDropdownClick = (e) => {
      if (e.target.getAttribute('class') !== 'search-item'){
        return;
      }
      const id = e.target.getAttribute("id");
      ui.clearDropdown();
      data.getSingleTvShow(id).then((show) => {
        ui.renderSingleTvShowPage(show)
        
      });
       
    }
    
    const onSingleTvShowClick = (e) => {
      const targetEl = e.target.parentElement;
      if (targetEl.getAttribute('class') !== 'show-item'){
        return;
      }
      const id = targetEl.getAttribute('id');
      data.getSingleTvShow(id).then((show) => {
        ui.renderSingleTvShowPage(show);
      })
    }

    const onClickHomeButtonHandler = () => {
      data.getShows().then((shows) => {
        ui.renderHomePage(shows);
      })
    }
    onClickHomeButtonHandler();
    searchInput.addEventListener('keyup', onSearch);
    searchDropdownEl.addEventListener("click", onSearchDropdownClick);
    homeButtonEl.addEventListener("click",onClickHomeButtonHandler);
    mainContentWrapper.addEventListener("click", onSingleTvShowClick)

  })(dataModule, uiModule);