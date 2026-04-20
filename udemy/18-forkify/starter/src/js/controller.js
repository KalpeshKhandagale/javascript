import * as model from './model.js';
import recipeView from './views/recipeView.js';
import searchView from './views/searchView.js';
import resultsView from './views/resultsView.js';
import paginationView from './views/paginationView.js';

import 'core-js/stable';
import 'regenerator-runtime/runtime';
import { async } from 'regenerator-runtime';

if(module.hot) {
  module.hot.accept();
}

const timeout = function (s) {
  return new Promise(function (_, reject) {
    setTimeout(function () {
      reject(new Error(`Request took too long! Timeout after ${s} second`));
    }, s * 1000);
  });
};

// https://forkify-api.herokuapp.com/v2

///////////////////////////////////////

const controlRecipes = async function() {
  try {
   const id = window.location.hash.slice(1);

   if(!id) return;
   recipeView.renderSpinner();
   
    //1) Loading recipe
    await model.loadRecipe(id);

   //2) Rendering recipe
   recipeView.render(model.state.recipe);

   
  } catch(err) {
    console.log(err);
    recipeView.renderError();
  }
};

const controlSearchResults = async function() {
  try {
    resultsView.renderSpinner();
    console.log(resultsView);

    //1) Get search query
    const query = searchView.getQuery();
    if(!query) return;

    //  2) Load serach results
    await model.loadSearchResults(query);

    // 3) Render results 
    // resultsView.render(model.state.search.results);
    resultsView.render(model.getSearchResultPage(0));

    // 4) Render initial pagination buttons
    paginationView.render(model.state.search);
  } catch(err) {
    console.log(err);
  }
};

const controlPagination = function(goToPage) {
    // 1) Render NEW results 
    resultsView.render(model.getSearchResultPage(goToPage));

    // 2) Render NEW pagination buttons
    paginationView.render(model.state.search);
}

const init = function() {
    recipeView.addHandlerRender(controlRecipes);
    searchView.addHandlerSearch(controlSearchResults);
    paginationView.addHandlerClick(controlPagination);
}
init();