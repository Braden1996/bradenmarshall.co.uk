import React from 'react';
import ReactDOM from 'react-dom';

import PreviewList from './components/preview_list.jsx';


ReactDOM.render(
  <section className="SiteContent__block">
    <PreviewList />
  </section>,
  document.getElementById('SiteContent__main')
);
