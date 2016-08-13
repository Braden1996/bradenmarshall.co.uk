// // Libraries
// require("modernizr");
// require("jquery");

// // Visuals
// require("./visuals/mainnav.js");
// require("./visuals/bgoverlay.js");

import React from 'react';
import ReactDOM from 'react-dom';

class CommentBox extends React.Component {
  render() {
    return <div className="commentBox">Hello, world! I am a CommentBox.</div>;
  }
}

ReactDOM.render(
  <div className="block block--fill">
    <section className="row">
      <CommentBox />
    </section>
  </div>,
  document.getElementById('l-site__content__main')
);
