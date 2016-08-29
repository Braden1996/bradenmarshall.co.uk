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
    return null;
  }

  render() {
    const { author, title, text, date, picture } = this.props;
    return (
      <article className="BlogPreviewListing">
        <img
          className="BlogPreviewListing__img"
          src={picture}
          width="300"
          height="200"
          alt="XYZ"
        />
        <header className="BlogPreviewListing__header">
          <h1 itemProp="headline" className="BlogPreviewListing__headLine">{ title }</h1>
          <section className="BlogPreviewListing__byLine">
            <address className="BlogPreviewListing__address">
              By <a rel="author" href="www.bradenmarshall.co.uk">{ author }</a>
            </address>
            <span className="Delimiter">•</span>
            <time pubdate dateTime={date}>{ date }</time>
          </section>
        </header>
        <p>{ text }</p>
        <a href="#more">Continue reading...</a>
      </article>
    );
  }
}
