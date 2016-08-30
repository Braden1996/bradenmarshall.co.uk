// Todos:
//  - Consider using a library (momentjs) for pretty dates
//  - SEO:
//    - http://schema.org/BlogPosting
//    - <img alt="?!?" />

import React from 'react';

import classNames from 'classnames';

export default class extends React.Component {
  static propTypes = {
    className: React.PropTypes.string,
    author: React.PropTypes.string,
    date: React.PropTypes.string,
    picture: React.PropTypes.string,
    text: React.PropTypes.string,
    title: React.PropTypes.string,
  }

  showPost() {
    return null;
  }

  render() {
    const { className, author, date, picture, text, title } = this.props;
    const classNamesStr = classNames('BlogPreviewListing', className);

    return (
      <article className={classNamesStr}>
        <header className="BlogPreviewListing__header">
          <img
            className="BlogPreviewListing__img"
            src={picture}
            width="270"
            height="180"
            alt="XYZ"
          />
          <h1 itemProp="headline" className="BlogPreviewListing__headLine">{ title }</h1>
          <section className="BlogPreviewListing__byLine">
            <address className="BlogPreviewListing__address">
              By <a rel="author" href="www.bradenmarshall.co.uk">{ author }</a>
            </address>
            <span className="Delimiter">•</span>
            <time pubdate dateTime={date}>{ date }</time>
          </section>
        </header>
        <p className="BlogPreviewListing__content">{ text }</p>
        <footer className="BlogPreviewListing__footer">
          <a href="#more">Continue reading...</a>
        </footer>
      </article>
    );
  }
}
