import React from 'react';
import ReactDOM from 'react-dom';

import PreviewList from './components/preview_list.jsx';
import Sidebar from './components/sidebar.jsx';


ReactDOM.render(
  <section className="BlogSite SiteContent__block">
    <PreviewList className="BlogSite__main" />
    <Sidebar className="BlogSite__aside" />
  </section>,
  document.getElementById('SiteContent')
);
