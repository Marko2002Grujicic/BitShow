(function (data, ui) {
    const searchInput = document.querySelector('#search-input');
  
    const onSearch = (e) => {
      const term = e.target.value;
      data.searchShow(term).then((shows) => {
        ui.clearDropdown();
        ui.renderSearchDropdown(shows);
      });
    };
  
    data.getShows().then((shows) => {
      ui.renderHomePage(shows);
    });
  
    searchInput.addEventListener('keyup', onSearch);
    searchInput.addEventListener('blur', ui.clearDropdown);
  })(dataModule, uiModule);