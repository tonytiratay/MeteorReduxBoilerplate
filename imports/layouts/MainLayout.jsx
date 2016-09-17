import React from 'react';
import SearchBar from '../containers/search_bar';

import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';

import reducers from '../reducers';

const createStoreWithMiddleware = applyMiddleware()(createStore);

export const MainLayout = ({ content }) => (
  <Provider store={createStoreWithMiddleware(reducers)}>
    <div className="main-layout">
      <div className="content-layout">
      {<SearchBar/>}
      {content}
      </div>
    </div>
  </Provider>
);
