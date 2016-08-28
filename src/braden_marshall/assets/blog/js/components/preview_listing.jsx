// Todos:
//  - Consider using a library (momentjs) for pretty dates
//  - SEO:
//    - http://schema.org/BlogPosting
//    - <img alt="?!?" />

import React from 'react';

export default class extends React.Component {
  static propTypes = {
    author: React.PropTypes.string,
    title: React.PropTypes.string,
    text: React.PropTypes.string,
    date: React.PropTypes.string,
    picture: React.PropTypes.string,
  }

  showPost() {
    console.log('Showing full post');
  }

  render() {
    const { author, title, text, date, picture } = this.props;
    return (
      <article className="BlogPreviewListing">
        <header>
          <h1 itemProp="headline">{ title }</h1>
          <p>By <em>{ author }</em> | Published <time dateTime={date}>{ date }</time></p>
        </header>
        <section>
          <div>
            <img className="BlogPreviewListing__img" src={picture} width="300" height="200" alt="XYZ" />
          </div>
          <p>{ text }</p>
          <a href="#more">Continue reading...</a>
        </section>
      </article>
    );
  }
}
