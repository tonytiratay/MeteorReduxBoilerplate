import React from 'react';
import SearchBar from '../containers/search_bar';
import WeatherList from '../containers/weather_list';

import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import ReduxPromise from 'redux-promise';

import reducers from '../reducers';

const createStoreWithMiddleware = applyMiddleware(ReduxPromise)(createStore);

export const MainLayout = ({ content }) => (
  <Provider store={createStoreWithMiddleware(reducers)}>

    <div className="main-layout">
      <div className="content-layout">
      {<SearchBar/>}
      {<WeatherList/>}
      
      {content}
      </div>
    </div>

  </Provider>
);
