// Todos:
//  - Consider using a library (momentjs) for pretty dates
//  - SEO:
//    - http://schema.org/BlogPosting
//    - <img alt="?!?" />

import React from 'react';

const lorem_ipsum = 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially';

export default class extends React.Component {
  render() {
    const { author, title, text, date, picture } = this.props;
    return (
      <article className="m-blog-post-preview">
        <header>
          <h1 itemProp="headline">{ title }</h1>
          <p>By <em>{ author }</em> | Published <time dateTime={ date }>{ date }</time></p>
        </header>
        <section>
          <div>
            <img src={ picture } width="300" height="200"/>
          </div>
          <p>{ text }</p>
          <a href="#more">Continue reading...</a>
        </section>
      </article>
    );
  }
}
